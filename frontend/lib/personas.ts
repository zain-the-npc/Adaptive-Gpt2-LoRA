export interface Persona {
  id: string;
  name: string;
  /** Single uppercase letter shown in the 40px icon square */
  letter: string;
  /** Persona accent color — used for border/text only, never fills */
  accentColor: string;
  /** Short aura label shown below name */
  auraLabel: string;
  lossStart: number;
  lossEnd: number;
  // legacy fields kept for API compatibility
  colorPrimary: string;
  colorAccent: string;
  emoji: string;
}

export const personas: Persona[] = [
  {
    id: "pirate",
    name: "Pirate",
    letter: "P",
    accentColor: "#0d9488",
    auraLabel: "TEAL",
    lossStart: 2.35,
    lossEnd: 0.87,
    // legacy
    colorPrimary: "#0d9488",
    colorAccent: "#0d9488",
    emoji: "🏴‍☠️",
  },
  {
    id: "shakespearean",
    name: "Shakespearean",
    letter: "S",
    accentColor: "#dc2626",
    auraLabel: "CRIMSON",
    lossStart: 2.5,
    lossEnd: 0.53,
    // legacy
    colorPrimary: "#dc2626",
    colorAccent: "#dc2626",
    emoji: "🎭",
  },
  {
    id: "genz",
    name: "Gen-Z",
    letter: "G",
    accentColor: "#db2777",
    auraLabel: "PINK",
    lossStart: 2.44,
    lossEnd: 1.42,
    // legacy
    colorPrimary: "#db2777",
    colorAccent: "#db2777",
    emoji: "😏",
  },
  {
    id: "coach",
    name: "Coach",
    letter: "C",
    accentColor: "#f59e0b",
    auraLabel: "ORANGE",
    lossStart: 1.45,
    lossEnd: 0.67,
    // legacy
    colorPrimary: "#f59e0b",
    colorAccent: "#f59e0b",
    emoji: "💪",
  },
  {
    id: "noir",
    name: "Detective",
    letter: "D",
    accentColor: "#334155",
    auraLabel: "CHARCOAL",
    lossStart: 2.42,
    lossEnd: 0.55,
    // legacy
    colorPrimary: "#334155",
    colorAccent: "#334155",
    emoji: "🕵️",
  },
];

/** Maps persona id → exact Gradio dropdown label */
export const personaLabels: Record<string, string> = {
  pirate: "Pirate",
  shakespearean: "Shakespearean",
  genz: "Sarcastic Gen-Z",
  coach: "Motivational Coach",
  noir: "Noir Detective",
};

/** % improvement based on loss reduction — drives the weight bar width */
export function powerBarPct(p: Persona): number {
  return Math.round(((p.lossStart - p.lossEnd) / p.lossStart) * 100);
}

/** Formats the numeric loss drop percentage shown next to the bar */
export function lossDropPctStr(p: Persona): string {
  const pct = ((p.lossStart - p.lossEnd) / p.lossStart) * 100;
  return `${pct.toFixed(1)}%`;
}
