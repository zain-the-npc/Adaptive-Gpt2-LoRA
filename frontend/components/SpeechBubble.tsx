"use client";

import { Persona } from "@/lib/personas";

interface SpeechBubbleProps {
  text: string;
  persona: Persona;
  isUser?: boolean;
  isError?: boolean;
}

export default function SpeechBubble({
  text,
  persona,
  isUser = false,
  isError = false,
}: SpeechBubbleProps) {
  if (isUser) {
    return (
      <div className="flex justify-end">
        <div
          className="chat-bubble fade-up"
          style={{ background: "#f3f3f3", color: "#444748" }}
          role="article"
          aria-label="Your message"
        >
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{text}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-4 items-start fade-up">
      {/* Persona letter icon */}
      <div
        className="persona-square flex-shrink-0"
        style={{ color: persona.accentColor, borderColor: persona.accentColor }}
        aria-hidden="true"
      >
        {persona.letter}
      </div>

      <div
        className="chat-bubble"
        style={{ background: "#ffffff" }}
        role="article"
        aria-label={isError ? "Error response" : `${persona.name} response`}
      >
        {/* Persona label */}
        <span
          className="mono uppercase block mb-2"
          style={{
            fontSize: "10px",
            letterSpacing: "0.15em",
            color: persona.accentColor,
            fontWeight: 600,
            borderBottom: `1px solid ${persona.accentColor}20`,
            paddingBottom: "4px",
            display: "inline-block",
          }}
        >
          {persona.name.toUpperCase()} PERSONA
        </span>
        <p
          className="text-sm leading-relaxed whitespace-pre-wrap"
          style={{ color: isError ? "#ba1a1a" : "#1a1c1c" }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
