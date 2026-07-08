"use client";

import { useState } from "react";
import { Persona } from "@/lib/personas";
import PersonaRow from "@/components/PersonaRow";
import ChatArea from "@/components/ChatArea";

export default function Home() {
  const [selectedPersona, setSelectedPersona] = useState<Persona | null>(null);

  const handlePersonaSelect = (persona: Persona) => {
    setSelectedPersona(persona);
  };

  return (
    <main
      className="min-h-dvh pb-16"
      style={{ background: "#f9f9f9", color: "#1a1c1c" }}
    >
      {/* ── Header ─────────────────────────────────────── */}
      <header
        className="flex flex-col items-center justify-center text-center"
        style={{ paddingTop: "3rem", paddingBottom: "2rem" }}
      >
        {/* Eyebrow tag */}
        <div
          className="flex flex-wrap items-center justify-center"
          style={{ marginBottom: "1rem", gap: "0.5rem" }}
        >
          <span className="eyebrow-tag">MODEL: GPT-2 SMALL (LORA)</span>
          <span className="eyebrow-tag">VRAM: 6GB · LEARNING PROJECT</span>
        </div>

        {/* Title */}
        <h1
          className="font-inter font-bold uppercase"
          style={{
            fontSize: "32px",
            letterSpacing: "-0.02em",
            color: "#000000",
            marginBottom: "0.5rem",
          }}
        >
          Adaptive Personas
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontSize: "14px",
            color: "#444748",
            maxWidth: "28rem",
            lineHeight: "1.5",
          }}
        >
          Select a persona to begin fine-tuned inference and experience adaptive
          personality shifting.
        </p>
      </header>

      {/* ── Content ─────────────────────────────────────── */}
      <div
        className="mx-auto"
        style={{ maxWidth: "1280px", padding: "0 1.5rem" }}
      >
        {/* Persona card grid */}
        <section aria-label="Character selection" style={{ marginBottom: "3rem" }}>
          <PersonaRow
            selected={selectedPersona}
            onSelect={handlePersonaSelect}
          />
        </section>

        {/* Chat panel */}
        <section aria-label="Chat area" aria-live="polite">
          {selectedPersona ? (
            <ChatArea key={selectedPersona.id} persona={selectedPersona} />
          ) : (
            <div
              className="tech-card flex items-center justify-center"
              style={{ minHeight: "500px", background: "#ffffff" }}
            >
              <p
                className="mono uppercase"
                style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#747878" }}
              >
                Pick a persona to start chatting
              </p>
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="text-center" style={{ paddingTop: "2.5rem", paddingBottom: "2rem" }}>
          <p
            className="mono uppercase"
            style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#747878" }}
          >
            Learning project — hand-written LoRA fine-tuning on GPT-2, no peft
            library.
          </p>
        </footer>
      </div>
    </main>
  );
}
