"use client";

import { personas, Persona } from "@/lib/personas";
import PersonaCard from "./PersonaCard";

interface PersonaRowProps {
  selected: Persona | null;
  onSelect: (persona: Persona) => void;
}

export default function PersonaRow({ selected, onSelect }: PersonaRowProps) {
  return (
    <div className="persona-grid" role="group" aria-label="Persona selection">
      {personas.map((p) => (
        <PersonaCard
          key={p.id}
          persona={p}
          selected={selected?.id === p.id}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
