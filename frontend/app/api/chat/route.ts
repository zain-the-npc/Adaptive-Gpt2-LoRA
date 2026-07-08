import { NextRequest, NextResponse } from "next/server";
import { Client } from "@gradio/client";
import { personaLabels } from "@/lib/personas";

export async function POST(req: NextRequest) {
  try {
    const { message, persona } = await req.json();

    if (!message || !persona) {
      return NextResponse.json(
        { error: "message and persona are required" },
        { status: 400 }
      );
    }

    const label = personaLabels[persona as string];
    if (!label) {
      return NextResponse.json({ error: "Unknown persona" }, { status: 400 });
    }

    const client = await Client.connect("zain-the-npc/adaptive-gpt2-lora");
    const result = await client.predict("/chat", {
      message: message as string,
      persona: label,
    });

    const text =
      typeof result.data === "string"
        ? result.data
        : Array.isArray(result.data)
        ? (result.data[0] as string)
        : JSON.stringify(result.data);

    return NextResponse.json({ text });
  } catch (err) {
    console.error("[chat route]", err);
    return NextResponse.json({ error: "Space error" }, { status: 500 });
  }
}
