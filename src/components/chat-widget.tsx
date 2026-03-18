"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  time: string;
}

function createInitialMessages(): Message[] {
  return [
    {
      id: 1,
      text: "Hey there, gamer! 🎮 Welcome to NEXUS. How can I help you today?",
      sender: "bot",
      time: "",
    },
  ];
}

const BOT_REPLIES = [
  "Great question! Our platform supports PC, PlayStation, Xbox, and Nintendo Switch.",
  "You can start with our free tier — no credit card required! 🚀",
  "Our servers have 99.9% uptime across 150+ regions worldwide.",
  "Check out our Featured Games section for the latest releases!",
  "Need help with your account? I can guide you through the setup.",
  "We have 50K+ active players online right now. Join the community!",
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(createInitialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.time === ""
          ? { ...msg, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }
          : msg
      )
    );
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const getTime = () =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;

    const userMsg: Message = {
      id: Date.now(),
      text,
      sender: "user",
      time: getTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = BOT_REPLIES[Math.floor(Math.random() * BOT_REPLIES.length)];
      const botMsg: Message = {
        id: Date.now() + 1,
        text: reply,
        sender: "bot",
        time: getTime(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Window */}
      <div
        className={`fixed z-[999] transition-all duration-300 ease-in-out ${
          isOpen
            ? "bottom-0 right-0 sm:bottom-24 sm:right-6 opacity-100 scale-100"
            : "bottom-20 right-6 opacity-0 scale-95 pointer-events-none"
        }`}
        style={{ transformOrigin: "bottom right" }}
      >
        <div
          className="flex flex-col bg-[var(--bg-deep)] border border-[var(--glass-border)]
            w-screen h-screen
            sm:w-[380px] sm:h-[520px] sm:rounded-2xl
            overflow-hidden shadow-2xl shadow-black/50"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-[var(--bg-mid)] border-b border-[var(--glass-border)]">
            <div className="flex items-center gap-3">
              {/* Bot avatar */}
              <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--bg-surface)] border border-[var(--glass-border)]">
                <span className="font-[var(--font-pixel)] text-[8px] text-[var(--accent-gold)]">NX</span>
                <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-[var(--bg-mid)]" />
              </div>
              <div>
                <h3 className="font-[var(--font-pixel)] text-[10px] uppercase tracking-wider text-white">
                  NEXUS Bot
                </h3>
                <p className="text-[11px] text-green-400">Online</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Minimize (mobile: close, desktop: minimize) */}
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--text-subtle)] hover:text-white hover:bg-[var(--glass-bg-hover)] transition-colors"
                aria-label="Close chat"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--text-subtle)] hover:text-white hover:bg-[var(--glass-bg-hover)] transition-colors"
                aria-label="Close chat"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-[var(--accent-gold)] text-[#1a1a2e] rounded-br-sm"
                      : "bg-[var(--bg-mid)] border border-[var(--glass-border)] text-[var(--text-muted)] rounded-bl-sm"
                  }`}
                >
                  <p>{msg.text}</p>
                  <p
                    className={`mt-1.5 text-[10px] ${
                      msg.sender === "user" ? "text-[#1a1a2e]/60" : "text-[var(--text-subtle)]"
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[var(--bg-mid)] border border-[var(--glass-border)] rounded-2xl rounded-bl-sm px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[var(--text-subtle)] animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="h-2 w-2 rounded-full bg-[var(--text-subtle)] animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="h-2 w-2 rounded-full bg-[var(--text-subtle)] animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          {messages.length <= 1 && (
            <div className="flex gap-2 overflow-x-auto px-4 pb-3 scrollbar-none">
              {["Pricing", "Platforms", "Free trial?"].map((q) => (
                <button
                  key={q}
                  onClick={() => {
                    setInput(q);
                    setTimeout(() => sendMessage(), 50);
                  }}
                  className="shrink-0 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-2 text-xs text-[var(--text-muted)] hover:border-[var(--accent-gold-dark)] hover:text-[var(--accent-gold)] transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="border-t border-[var(--glass-border)] bg-[var(--bg-mid)] px-4 py-3">
            <div className="flex items-center gap-3">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="flex-1 rounded-xl border border-[var(--glass-border)] bg-[var(--bg-deep)] px-4 py-3 text-sm text-white placeholder-[var(--text-subtle)] outline-none focus:border-[var(--accent-gold-dark)] transition-colors"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim()}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-gold)] text-[#1a1a2e] transition-all hover:shadow-lg hover:shadow-[var(--accent-gold)]/30 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:shadow-none"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button — matches kodus.io terminal icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-[1000] flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--glass-border)] transition-all duration-300 ${
          isOpen
            ? "bg-[var(--accent-gold)] border-[var(--accent-gold)] scale-90 rotate-90 sm:opacity-100 opacity-0 pointer-events-none sm:pointer-events-auto"
            : "bg-[var(--bg-mid)] hover:border-[var(--glass-border-hover)] hover:shadow-lg hover:shadow-black/40"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <div className="flex flex-col items-start leading-none">
            <span className="font-mono text-base font-bold text-[var(--accent-gold)]">{">"}</span>
            <span className="font-mono text-[10px] font-bold text-[var(--accent-gold)] -mt-1 ml-2">_</span>
          </div>
        )}
      </button>
    </>
  );
}
