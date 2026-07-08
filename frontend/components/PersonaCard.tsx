"use client";

import { useCallback, useRef, useState } from "react";
import { Persona } from "@/lib/personas";
import PowerBar from "./PowerBar";

interface PersonaCardProps {
  persona: Persona;
  selected: boolean;
  onSelect: (persona: Persona) => void;
}

export default function PersonaCard({
  persona,
  selected,
  onSelect,
}: PersonaCardProps) {
  const cardRef = useRef<HTMLButtonElement>(null);
  const [clicking, setClicking] = useState(false);

  const handleClick = useCallback(() => {
    // Simple opacity fade on click feedback
    setClicking(true);
    setTimeout(() => setClicking(false), 150);
    onSelect(persona);
  }, [persona, onSelect]);

  return (
    <button
      ref={cardRef}
      id={`persona-card-${persona.id}`}
      onClick={handleClick}
      aria-pressed={selected}
      aria-label={`Select ${persona.name} persona`}
      className={`tech-card${selected ? " tech-card-selected" : ""} p-5 flex flex-col items-start gap-4 w-full cursor-pointer text-left focus-visible:outline-none`}
      style={{
        borderColor: selected ? persona.accentColor : undefined,
        opacity: clicking ? 0.7 : 1,
        transition: "border-color 0.2s ease, opacity 0.15s ease",
        position: "relative",
      }}
    >
      {/* Selected check indicator */}
      {selected && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: persona.accentColor,
          }}
        />
      )}

      {/* Letter icon */}
      <div
        className="persona-square"
        style={{ color: persona.accentColor, borderColor: persona.accentColor }}
      >
        {persona.letter}
      </div>

      {/* Name + aura */}
      <div className="w-full text-left">
        <h3
          className="font-bold text-sm uppercase tracking-wide"
          style={{ color: selected ? persona.accentColor : "#1a1c1c" }}
        >
          {persona.name}
        </h3>
        {selected ? (
          <p
            className="mono uppercase mt-1 font-bold"
            style={{ fontSize: "10px", letterSpacing: "0.05em", color: persona.accentColor }}
          >
            ACTIVE
          </p>
        ) : (
          <p
            className="mono uppercase mt-1"
            style={{ fontSize: "10px", letterSpacing: "0.05em", color: "#747878" }}
          >
            AURA: {persona.auraLabel}
          </p>
        )}
      </div>

      {/* Progress bar */}
      <PowerBar persona={persona} selected={selected} />
    </button>
  );
}
