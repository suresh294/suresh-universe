import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
 
  {
    title: "Hotel Booking System",
    desc: "Java-based hotel management with reservation, billing, and admin control using Swing UI.",
    tech: "☕ Java | Swing | SQLite",
    link: "https://github.com/suresh294/HotelBookingSystem-Java-Swing-SQLite.git"
  },
  {
  title: "E-Commerce Management System",
  desc: "Java-based online shopping system with user authentication, product management, cart, and order processing.",
  tech: "☕ Java | JDBC | MySQL | JSP/Servlets",
  link: "https://github.com/suresh294/ecommerce.git"
},
 {
    title: "Smart Object Announcer",
    desc: "A wearable ESP32-CAM device that identifies objects and provides voice alerts for the visually impaired.",
    tech: "🧠 ESP32-CAM | ML | Audio | Edge Impulse",
    link: "Academic Project"

  },

];

export default function ProjectPage() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
       background: "linear-gradient(135deg, #b22234 0%, #411002 65%, #1b0702 100%)",
        overflow: "hidden",
        fontFamily: "Poppins, sans-serif"
      }}
    >
      {/* Floating Mars Stars */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0
        }}
      >
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              borderRadius: "50%",
              background: ["#fffad3", "#ff8a65", "#ff270f", "#ffd700"][i % 4],
              boxShadow: `0 0 ${Math.random() * 10 + 5}px ${
                ["#ff270f", "#fffad3", "#ff8a65"][i % 3]
              }`
            }}
          />
        ))}
      </div>

      {/* Main Section */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          paddingTop: "4vh"
        }}
      >
       
        {/* Title */}
       <h1
        style={{
        fontSize: "2.6rem",
        color: "#ffd166",
        WebkitTextStroke: "1.5px #ff6b4a",
        textShadow: "0 0 10px rgba(255,209,102,0.6)",
        padding: "0.6rem 1.2rem",
        borderRadius: "1rem",
  }}
>

          Projects 🚀
        </h1>
        <p
         style={{
         color: "#ffe8c2",
         fontSize: "1.1rem",
         marginBottom: "3vh",
         textShadow: "0 0 6px rgba(255,138,101,0.6)",
  }}
>

          Explore my Martian projects glowing with innovation.
        </p>

        {/* Project Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.2rem",
            width: "95vw",
            maxWidth: "1100px"
          }}
        >
          
          {projects.map((project, idx) => (
            <motion.div
    key={idx}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
              style={{
                padding: "1.8rem",
                borderRadius: "1.75rem",
                background: "rgba(30, 8, 4, 0.55)",
                border: "1.5px solid rgba(255, 120, 90, 0.25)",
                boxShadow: "0 10px 28px rgba(255, 39, 15, 0.25)",
                backdropFilter: "blur(12px)",
                color: "#fff",
                textShadow: "0 0 6px #ff8a65",
                marginBottom: "1rem",
                transition: "all 0.35s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 0 35px rgba(255, 39, 15, 0.7), 0 0 15px rgba(255, 200, 150, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 30px 0 rgba(255, 39, 15, 0.22)";
              }}
            >
              <h2
                style={{
                  color: "#ffd166",
                  textShadow: "0 0 8px rgba(255,209,102,0.7)",
                  fontSize: "1.5rem",
                  marginBottom: "0.5rem",
                 
                }}
              >
                {project.title}
              </h2>
              <p
                style={{
                 color: "#f5e6d3",
                 textShadow: "none",
                  marginBottom: "0.7rem"
                }}
              >
                {project.desc}
              </p>
              <p
                style={{
                  color: "#ffb703",
                  fontWeight: "600",
                  textShadow: "none",
                  marginBottom: "1rem"
                }}
              >
                {project.tech}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#ff6b4a",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,107,74,0.6)",
                  fontWeight: "bolder",
                  textShadow: "0 0 10px #e7e6dc"
                }}
                onMouseEnter={(e) => (e.target.style.color = "#ffd166")}
                onMouseLeave={(e) => (e.target.style.color = "#ff6b4a")}

              >
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          style={{
            background: "rgba(255, 39, 15, 0.3)",
            color: "#fffad3",
            border: "none",
            borderRadius: "2rem",
            padding: "0.75rem 2rem",
            fontWeight: "bold",
            fontSize: "1.15rem",
            cursor: "pointer",
            boxShadow: "0 0 22px #ff270f, 0 0 7px #fffad3",
            textShadow: "0 0 8px #ff8a65, 0 0 15px #ff270f",
            marginBottom: "2vh",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 0 35px #ff270f, 0 0 15px #ffd700";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 0 22px #ff270f, 0 0 7px #fffad3";
          }}
        >
          ⬅️ Back to Universe
        </button>

  
      </div>
         </div>
  );
}
