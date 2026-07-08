import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adaptive GPT-2 LoRA | Personas",
  description:
    "One GPT-2 model, five swappable LoRA personas — hand-written LoRA fine-tuning, no peft library.",
  openGraph: {
    title: "Adaptive GPT-2 LoRA",
    description:
      "Choose a persona and chat with a fine-tuned GPT-2 model powered by hand-written LoRA adapters.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
