import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Sun = () => {
  const skillRefs = useRef([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const navigate = useNavigate();
  const slidesRef = useRef(null);

  const skills = [
    "Java",
    "React",
    "IoT",
    "AI",
    "Firebase",
    "HTML",
    "CSS",
    "C++",
  ];

  const slides = [
    {
      year: "2023",
      title: "Academic Launch",
      text: "Started my B.Tech in Computer Science and began my coding journey.",
    },
    {
      year: "2024",
      title: "First Innovation",
      text: "Built my IoT-based Smart Fire Detection System using Arduino.",
    },
    {
      year: "2025",
      title: "AI & Vision",
      text: "Created ESP32-CAM Smart Object Announcer for visually impaired users.",
    },
    {
      year: "Future",
      title: "The Next Orbit",
      text: "Expanding my path into AI, robotics, and interplanetary tech vision.",
    },
  ];

  // 🌍 Orbit Animation
  useEffect(() => {
    const interval = setInterval(() => {
      skillRefs.current.forEach((el, index) => {
        if (el) {
          const angle = Date.now() / 800 + index * 1.5;
          const radius = 110 + index * 12;
          el.style.transform = `translate(${Math.cos(angle) * radius}px, ${
            Math.sin(angle) * radius
          }px)`;
        }
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // 🌞 Auto Slide Transition
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #ffdd55, #ff6a3d, #0a0a0a)",
        color: "#f8f8f8",
        fontFamily: "Poppins, sans-serif",
        textAlign: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* 🌌 Rotating Galaxy Aura */}
      <div
        style={{
          position: "absolute",
          width: "180vw",
          height: "180vw",
          top: "-40%",
          left: "-40%",
          borderRadius: "50%",
          background:
            "conic-gradient(from 0deg, rgba(255,255,100,0.1), rgba(255,0,0,0.1), rgba(255,255,255,0.1))",
          animation: "rotateGalaxy 40s linear infinite",
          zIndex: 0,
        }}
      ></div>

      {/* 🌞 Hero Section */}
      <section style={{ padding: "40px 20px 10px", position: "relative", zIndex: 2 }}>
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            textShadow: "0 0 35px #ffae42",
          }}
        >
          Welcome to the Solar Core ☀️
        </h1>
        <p style={{ fontSize: "19px", marginTop: "10px", opacity: 0.9 }}>
          I’m <b>Suresh</b>, the energy that powers this universe of innovation.
        </p>
        <button
          onClick={() =>
            document.getElementById("fusion-lab").scrollIntoView({ behavior: "smooth" })
          }
          style={{
            marginTop: "25px",
            padding: "12px 24px",
            borderRadius: "25px",
            border: "none",
            background: "linear-gradient(90deg, #ffae42, #ff512f)",
            color: "#111",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 0 25px #ffae42",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.07)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1.0)")}
        >
          Begin Fusion →
        </button>
      </section>

      {/* ☀️ Solar Fusion Core */}
      <section
        id="fusion-lab"
        style={{
          position: "relative",
          margin: "20px auto 0",
          width: "310px",
          height: "310px",
          borderRadius: "50%",
          background: "radial-gradient(circle at center, #ffce54, #ff512f, #000)",
          boxShadow: "0 0 80px 15px #ffae42 inset, 0 0 40px 10px #ffae42",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "visible",
          zIndex: 2,
        }}
      >
        {/* 🌞 Rotating Halo */}
        <div
          style={{
            position: "absolute",
            width: "440px",
            height: "440px",
            borderRadius: "50%",
            border: "2px dashed rgba(255,200,50,0.5)",
            animation: "rotateRing 20s linear infinite",
          }}
        ></div>

        {/* 🔊 Solar Pulse */}
        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            animation: "pulseRing 3s ease-in-out infinite",
            boxShadow: "0 0 60px 15px rgba(255,255,120,0.3)",
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            color: "#111",
            background: "#fff",
            padding: "10px 20px",
            borderRadius: "20px",
            fontWeight: "bold",
            fontSize: "16px",
            boxShadow: "0 0 25px #ffae42",
          }}
        >
          My Fusion Skills
        </div>

        {skills.map((skill, index) => (
          <div
            key={index}
            ref={(el) => (skillRefs.current[index] = el)}
            style={{
              position: "absolute",
              background: "#fff",
              color: "#111",
              padding: "6px 14px",
              borderRadius: "20px",
              fontWeight: "600",
              fontSize: "13px",
              boxShadow: "0 0 15px #ffae42",
              transition: "transform 0.3s, background 0.3s, color 0.3s",
              animation: "pulse 2s infinite alternate",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#ffae42";
              e.target.style.color = "#111";
              e.target.style.boxShadow = "0 0 30px #ffae42";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#fff";
              e.target.style.color = "#111";
              e.target.style.boxShadow = "0 0 15px #ffae42";
            }}
          >
            {skill}
          </div>
        ))}
      </section>

      {/* 🚀 Journey Slideshow */}
      <section style={{ margin: "10px auto 0", textAlign: "center", zIndex: 2, position: "relative" }}>
       <h2
          style={{
            color: "#fff",
            fontSize: "28px",
            textShadow: "0 0 25px #ffe600",
            marginBottom: "15px",
          }}
        >
          Journey in Motion 🚀
        </h2>

        {/* glowing trail */}
        <div
          style={{
            width: "340px",
            height: "4px",
            background: "linear-gradient(90deg,#ffeb3b,#ff512f)",
            margin: "0 auto 10px",
            boxShadow: "0 0 15px #ffeb3b",
            animation: "trailMove 4s linear infinite",
          }}
        ></div>

        <div
          style={{
            width: "340px",
            margin: "0 auto",
            overflow: "hidden",
            borderRadius: "20px",
            boxShadow: "0 0 25px #ff9500",
            background: "rgba(255,180,50,0.7)",
          }}
        >
          <div
            ref={slidesRef}
            style={{
              display: "flex",
              transition: "transform 1s ease-in-out",
              transform: `translateX(-${slideIndex * 100}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                style={{
                  flex: "0 0 100%",
                  padding: "30px",
                  color: "rgba(255, 255, 255, 0.95)",
                  animation: index === slideIndex ? "glowPulse 1.5s ease-in-out" : "none",
                }}
              >
                <h3 style={{ color: "#000", marginBottom: "8px" }}>{slide.year}</h3>
                <h4 style={{ marginBottom: "10px" }}>{slide.title}</h4>
                <p style={{ opacity: 0.9 }}>{slide.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌟 Animated Quote */}
      <section
  style={{
    marginTop: "5px",
    marginBottom: "10px",
    fontStyle: "italic",
    animation: "fadeInOut 6s ease-in-out infinite",
  }}
>
        <p style={{ fontSize: "22px", textShadow: "0 0 20px #ffae42" }}>
          “Even in darkness, I burn to create light.”
        </p>
      </section>

      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: "4px",
            height: "4px",
            background: "#fff",
            borderRadius: "50%",
            opacity: Math.random() * 0.7,
            animation: `float ${3 + Math.random() * 5}s ease-in-out infinite alternate`,
          }}
        ></div>
      ))}

      {/* Back Button */}
      <div style={{ marginTop: "10px", marginBottom: "15px", zIndex: 2, position: "relative" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "12px 24px",
            borderRadius: "25px",
            border: "none",
            background: "linear-gradient(90deg, #ff512f, #ffae42)",
            color: "#111",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 0 25px #ffae42",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.07)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1.0)")}
        >
          ⬅ Back to Universe
        </button>
      </div>
      {/* 👨‍🚀 Floating Astronaut */}
<img
  src="/astronaut.png"
  alt="astronaut"
  style={{
    position: "absolute",
    right: "10%",
    top: "40%",
    width: "120px",
    animation: "floatAstronaut 4s ease-in-out infinite",
    filter: "drop-shadow(0 0 10px #00eaff)",
    zIndex: 10,
  }}
/>


      {/* 🔧 Animations */}
      <style>
        {`
          @keyframes pulse {
            from { box-shadow: 0 0 15px #ffae42; }
            to { box-shadow: 0 0 30px #ffae42; }
          }

          @keyframes rotateGalaxy {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes rotateRing {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes pulseRing {
            0% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.2); opacity: 0.4; }
            100% { transform: scale(1); opacity: 0.7; }
          }

          @keyframes float {
            from { transform: translateY(0px); opacity: 0.9; }
            to { transform: translateY(-20px); opacity: 0.4; }
          }

          @keyframes glowPulse {
            0% { box-shadow: 0 0 0px #fff; transform: scale(0.98); }
            50% { box-shadow: 0 0 30px #ffea00; transform: scale(1.03); }
            100% { box-shadow: 0 0 0px #fff; transform: scale(1); }
          }

          @keyframes fadeInOut {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 1; }
          }

          @keyframes trailMove {
            0% { filter: brightness(0.8); }
            50% { filter: brightness(1.3); }
            100% { filter: brightness(0.8); }
          }
            @keyframes floatAstronaut {
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(3deg); }
  100% { transform: translateY(0px) rotate(0deg); }
}
`
          }
      </style>
    </div>
  );
};

export default Sun;
