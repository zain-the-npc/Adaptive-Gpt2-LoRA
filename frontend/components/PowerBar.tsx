"use client";

import { Persona, powerBarPct, lossDropPctStr } from "@/lib/personas";

interface PowerBarProps {
  persona: Persona;
  selected: boolean;
}

export default function PowerBar({ persona, selected }: PowerBarProps) {
  const pct = powerBarPct(persona);
  const lossDrop = lossDropPctStr(persona);

  return (
    <div className="w-full mt-2">
      {/* Label row */}
      <div className="flex justify-between mb-2">
        <span
          className="mono uppercase"
          style={{
            fontSize: "9px",
            letterSpacing: "0.05em",
            color: selected ? persona.accentColor : "#747878",
            opacity: selected ? 0.8 : 1,
          }}
        >
          LOSS ↓
        </span>
        <span
          className="mono"
          style={{
            fontSize: "9px",
            letterSpacing: "0.05em",
            color: selected ? persona.accentColor : "#1a1c1c",
          }}
        >
          {lossDrop}
        </span>
      </div>

      {/* Bar */}
      <div className="weight-bar-bg">
        <div
          className="weight-bar-fill"
          style={{ width: `${pct}%`, backgroundColor: persona.accentColor }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Training improvement: ${pct}%`}
        />
      </div>
    </div>
  );
}
