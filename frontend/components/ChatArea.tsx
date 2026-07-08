"use client";

import { useState, useRef, FormEvent } from "react";
import { Persona } from "@/lib/personas";
import SpeechBubble from "./SpeechBubble";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  isError: boolean;
}

interface ChatAreaProps {
  persona: Persona;
}

export default function ChatArea({ persona }: ChatAreaProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 100);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    // Add user message immediately
    const userMsg: Message = {
      id: crypto.randomUUID(),
      text: trimmed,
      isUser: true,
      isError: false,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, persona: persona.id }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            text: "Something broke. Try again.",
            isUser: false,
            isError: true,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            text: data.text,
            isUser: false,
            isError: false,
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          text: "Something broke. Try again.",
          isUser: false,
          isError: true,
        },
      ]);
    } finally {
      setLoading(false);
      scrollToBottom();
    }
  };

  return (
    <div
      className="tech-card flex flex-col"
      style={{ minHeight: "500px", padding: "2rem", background: "#ffffff" }}
      aria-label={`Chat with ${persona.name}`}
    >
      {/* Messages area */}
      <div
        className="flex-1 flex flex-col gap-6 overflow-y-auto pb-6"
        style={{ minHeight: "300px", maxHeight: "420px" }}
        role="log"
        aria-live="polite"
        aria-label="Chat messages"
      >
        {messages.length === 0 && (
          <p
            className="mono uppercase m-auto text-center"
            style={{ fontSize: "10px", letterSpacing: "0.1em", color: "#747878" }}
          >
            Say something to {persona.name}…
          </p>
        )}
        {messages.map((msg) =>
          msg.isUser ? (
            <SpeechBubble
              key={msg.id}
              text={msg.text}
              persona={persona}
              isUser={true}
              isError={false}
            />
          ) : (
            <SpeechBubble
              key={msg.id}
              text={msg.text}
              persona={persona}
              isUser={false}
              isError={msg.isError}
            />
          )
        )}
        <div ref={bottomRef} />
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid #c4c7c7", marginTop: "2rem", paddingTop: "1.5rem" }}>
        {/* Input row */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-4"
          aria-label="Send message"
        >
          <div className="flex-1">
            <input
              id="chat-input"
              type="text"
              className="tech-input"
              placeholder="Type a message to the AI..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
              autoComplete="off"
              maxLength={500}
              aria-label="Message input"
            />
          </div>

          <button
            id="send-button"
            type="submit"
            disabled={loading || !input.trim()}
            className="send-btn"
            aria-label={loading ? "Sending message" : "Send message"}
          >
            <span>{loading ? "···" : "SEND"}</span>
            {/* Arrow icon — inline SVG, no external dependency */}
            {!loading && (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
