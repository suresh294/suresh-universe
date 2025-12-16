// src/components/FloatingAIChat.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getMockResponse } from "../data/aiMock";

export default function FloatingAIChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! I'm Zynox, your virtual guide. How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);

  // 👇 Add ref to scroll automatically
  const messagesEndRef = useRef(null);

  const speak = (text) => {
    if (!voiceEnabled) return;
    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 1;
    speech.pitch = 1.1;
    speech.voice =
      window.speechSynthesis
        .getVoices()
        .find((v) => v.name.includes("Google") || v.name.includes("Microsoft")) || null;
    window.speechSynthesis.speak(speech);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse = getMockResponse(input);
      setMessages((prev) => [...prev, { sender: "ai", text: aiResponse }]);
      speak(aiResponse);
      setIsTyping(false);
    }, 800);
  };

  // 👇 Scroll to bottom when new message or typing occurs
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (open) window.speechSynthesis.cancel();
  }, [open]);

  return (
    <>
      {/* 🛸 Floating Icon */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          zIndex: 999,
          cursor: "pointer",
        }}
      >
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, 4, -4, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          style={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 30% 30%, #00c8ff, #0044ff, #001133)",
            boxShadow: "0 0 25px #00c8ff, 0 0 50px #0077ff",
            border: "2px solid #00c8ff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "28px",
            color: "#fff",
            textShadow: "0 0 10px #00eaff",
          }}
        >
          🤖
        </motion.div>
      </motion.div>

      {/* 💬 Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              bottom: "110px",
              right: "25px",
              width: "320px",
              height: "420px",
              background: "rgba(5, 10, 25, 0.95)",
              border: "1.5px solid #00ffff33",
              borderRadius: "15px",
              boxShadow: "0 0 30px #00ffff33",
              backdropFilter: "blur(12px)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              zIndex: 998,
            }}
          >
            {/* Header */}
            <div
              style={{
                background: "linear-gradient(90deg, #002244, #004466)",
                padding: "12px",
                color: "#00ffff",
                fontWeight: "600",
                textAlign: "center",
                fontSize: "15px",
                textShadow: "0 0 8px #00ffff",
              }}
            >
              🤖 Zynox – Virtual Portfolio Guide
            </div>

            {/* Messages */}
            <div
              style={{
                flex: 1,
                padding: "10px",
                overflowY: "auto",
                color: "#fff",
                fontSize: "14px",
              }}
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    marginBottom: "10px",
                    textAlign: msg.sender === "user" ? "right" : "left",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      padding: "8px 12px",
                      borderRadius: "10px",
                      background:
                        msg.sender === "user"
                          ? "linear-gradient(90deg, #0066ff, #00c8ff)"
                          : "rgba(255,255,255,0.08)",
                      boxShadow:
                        msg.sender === "user"
                          ? "0 0 10px #0099ff"
                          : "0 0 8px #00ffff33",
                    }}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
              {isTyping && (
                <p style={{ color: "#00ffff", fontStyle: "italic" }}>
                  Zynox is typing...
                </p>
              )}

              {/* 👇 Added auto-scroll anchor */}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div
              style={{
                display: "flex",
                padding: "10px",
                borderTop: "1px solid #00ffff33",
                background: "rgba(0, 0, 20, 0.6)",
              }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask something..."
                style={{
                  flex: 1,
                  padding: "8px",
                  borderRadius: "8px",
                  border: "none",
                  outline: "none",
                  background: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  marginRight: "8px",
                }}
              />
              <button
                onClick={handleSend}
                style={{
                  background: "linear-gradient(90deg, #00ffff, #0044ff)",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  color: "#001122",
                  fontWeight: "600",
                }}
              >
                Send
              </button>
            </div>

            {/* Voice Toggle */}
            <button
              onClick={() => setVoiceEnabled(!voiceEnabled)}
              style={{
                background: "transparent",
                color: voiceEnabled ? "#00ffff" : "#888",
                border: "none",
                fontSize: "14px",
                padding: "5px",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              🔊 {voiceEnabled ? "Voice On" : "Voice Off"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
