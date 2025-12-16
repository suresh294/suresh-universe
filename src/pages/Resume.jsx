import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function Resume() {
  const navigate = useNavigate();

  return (
    <div
  style={{
    minHeight: "100vh",
    background: "black",
    position: "relative",
    overflowY: "auto",
  }}
>

{/* Background Stars */}
<div
  style={{
    position: "fixed",
    inset: 0,
    zIndex: 0,
  }}
>
  <Canvas
    style={{
      pointerEvents: "none", // 🔥 THIS IS THE REAL FIX
    }}
  >
    <ambientLight intensity={0.5} />
    <Stars
      radius={150}
      depth={70}
      count={500}
      factor={6}
      fade
      speed={0.8}
    />
  </Canvas>
</div>




      {/* Foreground Resume Section */}
      <div
  style={{
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
    color: "white",
    gap: "18px",
    position: "relative",
    zIndex: 10,        // 🔥 MUST be higher than canvas
    pointerEvents: "auto",
  }}
>


        {/* HOLOGRAM FRAME */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1}}
         style={{
  padding: "18px",
  borderRadius: "14px",
  width: "90%",
  maxWidth: "420px", // ⬅️ bigger than before
  position: "relative",
  backdropFilter: "blur(8px)",
  background: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(0, 255, 255, 0.2)",
  boxShadow:
    "0 0 15px rgba(0,255,255,0.4), inset 0 0 25px rgba(0,255,255,0.2)",
  animation: "hologramGlow 2s infinite alternate",
}}

        >
          {/* Resume Image */}
          <motion.img
            src="/resume.jpg" // <<--- put your resume image here
            alt="Resume"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            
style={{
  width: "100%",
  height: "auto",
  maxHeight: "75vh",
  objectFit: "contain",
  transform: "scale(1.05)", // 🔍 ZOOM EFFECT
  borderRadius: "10px",
  border: "1px solid rgba(0,255,255,0.3)",
  boxShadow: "0 0 25px rgba(0,255,255,0.4)",
}}


          />
        </motion.div>
        
       {/* ACTION BUTTONS */}
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: "420px",
    marginTop: "20px",
    gap: "12px",
    flexWrap: "wrap",
  }}
>
  {/* DOWNLOAD - LEFT */}
  <motion.a
  href="/resume.pdf"
  download="Suresh_Resume.pdf"
  whileHover={{
    scale: 1.1,
    boxShadow: "0 0 25px rgba(0,255,255,0.9)",
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300 }}
  style={{
    flex: 1,
    minWidth: "160px",
    padding: "12px",
    borderRadius: "10px",
    border: "2px solid cyan",
    background: "transparent",
    color: "cyan",
    fontWeight: "bold",
    textAlign: "center",
    textDecoration: "none",
    boxShadow: "0 0 12px cyan",
    cursor: "pointer",
  }}
>
  ⬇️ Download Resume
</motion.a>


  {/* VIEW - RIGHT */}
 <motion.a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{
    scale: 1.1,
    boxShadow: "0 0 30px rgba(0,255,255,1)",
    backgroundColor: "rgba(0,255,255,0.2)",
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300 }}
  style={{
    flex: 1,
    minWidth: "160px",
    padding: "12px",
    borderRadius: "10px",
    border: "2px solid #00ffff",
    background: "rgba(0,255,255,0.12)",
    color: "cyan",
    fontWeight: "bold",
    textAlign: "center",
    textDecoration: "none",
    boxShadow: "0 0 14px rgba(0,255,255,0.6)",
    cursor: "pointer",
  }}
>
  👁 View Resume
</motion.a>


</div>
<motion.button
  onClick={() => navigate("/")}
  whileHover={{
    scale: 1.12,
    boxShadow: "0 0 22px rgba(214,179,137,0.9)",
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 260 }}
  style={{
    marginTop: "30px",
    padding: "12px 28px",
    borderRadius: "12px",
    border: "2px solid #d6b389",
    color: "#d6b389",
    background: "transparent",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 0 12px #d6b389",
  }}
>
  🔙 Back to Universe
</motion.button>


      </div>

      {/* HOLOGRAM ANIMATION KEYFRAMES */}
      <style>
        {`
          @keyframes hologramGlow {
            0% {
              box-shadow: 0 0 10px rgba(0,255,255,0.3), inset 0 0 10px rgba(0,255,255,0.1);
            }
            100% {
              box-shadow: 0 0 25px rgba(0,255,255,0.6), inset 0 0 25px rgba(0,255,255,0.2);
            }
          }
        `}
      </style>
    </div>
  );
}
