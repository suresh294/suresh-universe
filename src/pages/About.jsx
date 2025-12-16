import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  const isMobile = window.innerWidth < 768;
  

const glassCard = {
  background: "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
  border: "1px solid rgba(255,255,255,0.18)",
  borderRadius: "26px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.45)",
  backdropFilter: "blur(8px)", // SAFE blur
  WebkitBackdropFilter: "blur(8px)",
};



  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: isMobile ? "20px" : "40px",
      }}
    >
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  style={{
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "360px 1fr",
    gap: isMobile ? "30px" : "55px",
    maxWidth: "1150px",
    width: "100%",
    padding: isMobile ? "30px 20px" : "55px",
    willChange: "transform",
    ...glassCard,
  }}
>

        {/* LEFT / TOP */}
        <div style={{ textAlign: "center" }}>
          {/* PHOTO */}
          <motion.div
          whileHover={{
  boxShadow: "0 0 35px rgba(0,255,255,1)",
}}
transition={{ duration: 0.12 }}
            style={{
              position: "relative",
              width: isMobile ? "180px" : "240px",
              margin: "0 auto",
            }}
          >
            
            <img
              src="/profile.jpg"
              alt="Sureshkumar A"
              style={{
                width: isMobile ? "160px" : "220px",
                height: isMobile ? "160px" : "220px",
                borderRadius: "00%",
                objectFit: "cover",
                border: "4px solid #00ffff",
                boxShadow: "0 0 px rgba(0,255,255,0.6)",
                position: "relative",
                zIndex: 2,
              }}
            />
          </motion.div>

          {/* ACTION BUTTONS */}
          <div style={{ marginTop: "28px" }}>
  {[
    { label: "🚀 View Projects", path: "/projects" },
    { label: "📄 View Resume", path: "/resume" },
  ].map((btn, i) => (
   <motion.div
  whileHover={{
    scale: 1.04,
    boxShadow: "0 0 22px rgba(0,255,255,0.9)",
  }}
  transition={{
    scale: { type: "spring", stiffness: 300, damping: 20 },
    boxShadow: { duration: 0.12, ease: "easeOut" },
  }}
      key={i}
      onClick={() => navigate(btn.path)}
      whileTap={{ scale: 0.95 }}
     style={{
  margin: "10px auto",
  padding: "14px",
  borderRadius: "14px",
  background: "rgba(255,255,255,0.12)",
  border: "1px solid rgba(255,255,255,0.25)",
  color: "#00ffff",
  cursor: "pointer",
  textAlign: "center",
  boxShadow: "0 8px 18px rgba(0,0,0,0.35)",
  willChange: "transform, box-shadow",
}}

    >
      {btn.label}
    </motion.div>
  ))}
</div>


          {/* SOCIALS */}
          <div
  style={{
    marginTop: "22px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    fontSize: "1.6rem",
  }}
>
  {[
    {
      icon: <FaGithub />,
      link: "https://github.com/suresh294",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/sureshkumar242006/",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/sures_245/",
    },
    {
      icon: <FaEnvelope />,
      link: "mailto:suresharumugam020@gmail.com",
    },
  ].map((item, index) => (
    <motion.a
      key={index}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
   whileHover={{
  scale: 1.2,
  filter: "drop-shadow(0 0 12px #00ffff)",
}}
transition={{ duration: 0.12 }}

      style={{
        color: "#00ffff",
        textShadow: "0 0 10px #00ffff",
        willChange: "transform, box-shadow",
        filter: "drop-shadow(0 0 6px rgba(0,255,255,0.6))",

      }}
    >
      {item.icon}
    </motion.a>
  ))}
</div>

        </div>

        {/* RIGHT / BOTTOM */}
        <div>
          <h1
            style={{
              fontSize: isMobile ? "2.1rem" : "2.8rem",
              color: "#00ffff",
              textShadow: "0 0 14px #00ffff",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            Sureshkumar A
          </h1>

          <p
            style={{
              marginTop: "20px",
              color: "#e0f7ff",
              lineHeight: "1.9",
              willChange: "transform",
              fontSize: isMobile ? "1rem" : "1.12rem",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            I’m a passionate <strong>Computer Science student</strong> and
            <strong> Full-Stack Developer</strong> who enjoys building modern,
            scalable, and intelligent digital experiences.
            <br /><br />
            I specialize in transforming ideas into high-quality applications
            using <strong>MERN, Java, AI systems</strong>, and interactive UI
            design.
          </p>

          {/* INFO GRID */}
          <div
            style={{
              marginTop: "30px",
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
              gap: "16px",
            }}
          >
            {[
              ["💻 Role", "Full Stack Developer"],
              ["⚙️ Stack", "MERN | Java | AI"],
              ["📍 Location", "India"],
              ["🚀 Goal", "Impactful Products"],
            ].map(([title, value], i) => (
              <motion.div
                key={i}
                whileHover={{
  y: -6,
  boxShadow: "0 0 20px rgba(0,255,255,0.5)",
}}style={{
  padding: "16px",
  borderRadius: "16px",
  background: "rgba(255,255,255,0.10)",
  border: "1px solid rgba(255,255,255,0.18)",
  boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
  color: "#e0f7ff",
  textAlign: "center",
  willChange: "transform",
}}

              >
                <strong style={{ color: "#00ffff" }}>{title}</strong>
                <br />
                {value}
              </motion.div>
            ))}
          </div>

          {/* BACK BUTTON */}
          <motion.button
           whileHover={{
    scale: 1.04,
    boxShadow: "0 0 22px rgba(0,255,255,0.9)",
  }}
  transition={{
    scale: { type: "spring", stiffness: 300, damping: 20 },
    boxShadow: { duration: 0.12, ease: "easeOut" },
  }}

            onClick={() => navigate("/")}
            style={{
  margin: "10px auto",
  padding: "14px",
  borderRadius: "14px",
  background: "rgba(255,255,255,0.12)",
  border: "1px solid rgba(255,255,255,0.25)",
  color: "#00ffff",
  cursor: "pointer",
  textAlign: "center",
  boxShadow: "0 8px 18px rgba(0,0,0,0.35)",
  willChange: "transform, box-shadow",
  
}}

          >
            🌌 Back to Universe
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
