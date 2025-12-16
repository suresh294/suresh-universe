import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { certifications, skills } from "../data/certData";

export default function CertificationsAndSkills() {
  const navigate = useNavigate();

  // 🌠 Add gentle fade-in when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #2b0a00 0%, #000000 90%)",
        color: "white",
        fontFamily: "Poppins, sans-serif",
        padding: "80px 20px",
        overflowX: "hidden",
        position: "relative",
      }}
    >
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
            background: Math.random() > 0.5 ? "var(--neon)" : "var(--orange)",
            opacity: 0.5,
            filter: "blur(1px)",
            animation: `float ${5 + Math.random() * 5}s ease-in-out infinite alternate`,
          }}
        />
      ))}
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "800px",
          height: "800px",
          inset: 0,
    background: "rgba(0, 0, 0, 0.4)",
    zIndex: 1,
    pointerEvents: "none",
          
          transform: "translate(-50%, -50%)",
          filter: "blur(120px)",
         
        }}
      ></div>

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "bold",
          color: "#ffb84d",
          textShadow: "0 0 30px #ff8800, 0 0 60px #ff6600",
          marginBottom: "40px",
          zIndex: 2,
          position: "relative",
        }}
      >
        🪐 Certifications & Skills
      </motion.h1>

      {/* Certifications Section */}
      <section style={{ zIndex: 2, position: "relative" }}>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          style={{
            textAlign: "center",
            fontSize: "28px",
            color: "#ff9933",
            textShadow: "0 0 15px #ff6600",
            marginBottom: "30px",
          }}
        >
          🎓 Certifications
        </motion.h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "25px",
          }}
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(255,153,0,0.6)",
              }}
              style={{
                background: "rgba(255,153,0,0.08)",
                border: "1px solid rgba(255,204,102,0.3)",
                borderRadius: "18px",
                width: "320px",
                padding: "20px",
                boxShadow: "0 0 15px rgba(255,153,0,0.3)",
                backdropFilter: "blur(8px)",
                transition: "0.3s",
              }}
            >
              <h3
                style={{
                  color: "#ffcc66",
                  fontSize: "22px",
                  marginBottom: "8px",
                }}
              >
                {cert.title}
              </h3>
              <p style={{ color: "#ff9933", marginBottom: "5px" }}>
                <strong>{cert.org}</strong> • {cert.year}
              </p>
              <p style={{ color: "#fff", opacity: 0.85, lineHeight: "1.5" }}>
                {cert.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section
        style={{
          marginTop: "20px",
          textAlign: "center",
          zIndex: 2,
          position: "relative",
        }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          style={{
            fontSize: "28px",
            color: "#ffb84d",
            textShadow: "0 0 20px #ff6600",
            marginBottom: "20px",
          }}
        >
          ⚡ Technical Skills
        </motion.h2>

        <div
          style={{
            width: "80%",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          {skills.map((skill, i) => (
            <div key={i} style={{ marginBottom: "20px", textAlign: "left" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "5px",
                }}
              >
                <span style={{ color: "#fff", fontWeight: "500" }}>
                  {skill.name}
                </span>
                <span style={{ color: "#ffb84d" }}>{skill.level}%</span>
              </div>
              <motion.div
  initial={{ width: 0 }}
  animate={{ width: `${skill.level}%` }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  style={{
    height: "10px",
    borderRadius: "8px",
    background: "linear-gradient(90deg, #ff6600, #ffcc66)",
    boxShadow: "0 0 15px rgba(255,153,0,0.7)",
    animation: "pulseGlow 2s infinite alternate",
  }}
></motion.div>

            </div>
          ))}
        </div>
      </section>

      {/* Back to Universe Button */}
      <motion.button
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 25px #ff6600",
        }}
        onClick={() => navigate("/")}
        style={{
          marginTop: "2px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          background:
            "linear-gradient(90deg, #ff6600, #ffb84d)",
          border: "none",
          color: "#fff",
          fontSize: "18px",
          fontWeight: "bold",
          padding: "14px 28px",
          borderRadius: "30px",
          cursor: "pointer",
          textShadow: "0 0 10px #ff9933",
          transition: "0.3s",
        }}
      >
        🚀 Back to Universe
      </motion.button>
    </div>
  );
}
