import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Contacts() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [toast, setToast] = useState(false);
   const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    setToast(true);
    setTimeout(() => setToast(false), 3000);
    setForm({ name: "", email: "", message: "" });
  }
};


  return (
    
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--muted)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "2rem",
      }}
    >
      {/* Floating Neon Dots */}
      {[...Array(60)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            borderRadius: "50%",
            background: Math.random() > 0.5 ? "var(--neon)" : "var(--violet)",
            opacity: 0.5,
            filter: "blur(1px)",
            animation: `float ${5 + Math.random() * 5}s ease-in-out infinite alternate`,
          }}
        />
      ))}
{/* Back Button */}
        <button
           onClick={() => navigate("/")}
          style={{
            background: "rgba(30, 144, 255, 0.25)",
            color: "#d6eaf8",
            border: "none",
            borderRadius: "2rem",
            padding: "0.75rem 2rem",
            fontWeight: "bold",
            fontSize: "1.1rem",
            cursor: "pointer",
            boxShadow: "0 0 18px #00bfff, 0 0 6px #76d7c4",
            textShadow: "0 0 8px #5dade2, 0 0 14px #00bfff",
            marginBottom: "2vh",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 0 30px #00bfff, 0 0 15px #a9cce3";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 0 18px #00bfff, 0 0 6px #76d7c4";
          }}
        >
          ⬅️ Back to Universe
        </button>
      {/* Contact Card */}
      <div
        className="card"
        style={{
          position: "relative",
          zIndex: 2,
          backdropFilter: "blur(14px)",
          background: "rgba(255, 255, 255, 0.05)",
          padding: "2rem 2.5rem",
          borderRadius: "20px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 0 25px rgba(0, 200, 255, 0.25)",
          maxWidth: "480px",
          width: "90%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "var(--neon)",
            fontSize: "2.2rem",
            marginBottom: "1rem",
            textShadow: "0 0 12px var(--neon)",
          }}
        >
          Contact Me 💫
        </h1>
        <p
          style={{
            color: "var(--muted)",
            fontSize: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          Have a question or collaboration idea? Send me a message!
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "100%",
          }}
        >
          <input 
            type="hidden" 
             name="access_key" 
            value="1392d788-d31f-470e-b12f-c3fe60ad41c9" 
          />

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 12px #00bfff")}
              onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 12px #00bfff")}
              onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            required
            style={{ ...inputStyle, resize: "none" }}
            onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 12px #00bfff")}
              onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px var(--violet)" }}
            transition={{ duration: 0.2 }}
            style={{
              background: "var(--neon)",
              color: "#000",
              fontWeight: "bold",
              border: "none",
              borderRadius: "10px",
              padding: "0.8rem",
              cursor: "pointer",
              fontSize: "1rem",
              boxShadow: "0 0 15px var(--neon)",
            }}
          >
            🚀 Send Message
          </motion.button>
        </form>

        {/* Social Links */}
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          <SocialIcon
            href="https://github.com/suresh294"
            icon={<FaGithub />}
            color="#ffffff"
          />
          <SocialIcon
            href="https://www.linkedin.com/in/sureshkumar242006/"
            icon={<FaLinkedin />}
            color="#0A66C2"
          />
          <SocialIcon
            href="mailto:suresharumugam020@gmail.com"
            icon={<FaEnvelope />}
            color="#ff4d4d"
          />
          <SocialIcon
            href="https://www.instagram.com/sures_245/?igsh=MWdpYm9xb3pkM240cg%3D%3D#"
            icon={<FaInstagram />}
            color="#E1306C"
          />
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: "fixed",
              bottom: "30px",
              background: "rgba(0, 200, 255, 0.2)",
              color: "var(--neon)",
              padding: "0.8rem 1.5rem",
              borderRadius: "10px",
              boxShadow: "0 0 15px var(--neon)",
              zIndex: 999,
              fontWeight: "bold",
              textShadow: "0 0 6px var(--neon)",
            }}
          >
            ✅ Message Sent Successfully!
          </motion.div>
        )}
      </AnimatePresence>

      <style>
        {`
          @keyframes float {
            from { transform: translateY(0px); opacity: 0.4; }
            to { transform: translateY(-20px); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}

// Input Field Styling
const inputStyle = {
  background: "rgba(255, 255, 255, 0.08)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  borderRadius: "10px",
  padding: "0.8rem 1rem",
  color: "#fff",
  outline: "none",
  fontSize: "1rem",
};

// Social Button Component
const SocialIcon = ({ href, icon, color }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, textShadow: "0 0 12px var(--neon)" }}
    transition={{ duration: 0.3 }}
    style={{
      color,
      fontSize: "1.8rem",
      textDecoration: "none",
      filter: "drop-shadow(0 0 8px rgba(0,200,255,0.4))",
    }}
  >
    {icon}
  </motion.a>
);
