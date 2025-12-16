import React, { useEffect, useState, Suspense, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { OrbitControls, Line, Html, useTexture } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
import { TextureLoader } from "three";
import { useSpring } from "@react-spring/three";
import FloatingAIChat from "./components/FloatingAIChat";

// 🌍 Import planet pages
import About from "./pages/About";
import Projects from "./pages/Projects";
import CertificationsAndSkills from "./pages/CertificationsAndSkills";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import SunPage from "./pages/Sun";

// 🌌 Floating Stars
function FloatingStars({ count = 600 }) {
  const pointsRef = useRef();
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 400;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 400;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 400;
  }
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.02;
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t;
      pointsRef.current.rotation.x = t / 2;
    }
  });
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={positions.length / 3} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.3} sizeAttenuation />
    </points>
  );
}

// 🌞 Sun
function Sun({ onClick }) {
  const ref = useRef();
  const tex = useTexture("/textures/sun.jpg");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.rotation.y += 0.002;
    const scale = 1 + Math.sin(t * 2) * 0.03;
    ref.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={ref} onClick={onClick}>
      <sphereGeometry args={[4, 48, 48]} />
      <meshStandardMaterial map={tex} emissive="#ffae00" emissiveIntensity={2.5} />
      <pointLight intensity={3} distance={100} color="#ffdd55" />
      <mesh>
        <sphereGeometry args={[5, 48, 48]} />
        <meshBasicMaterial color="#ffbb33" transparent opacity={0.15} />
      </mesh>
    </mesh>
  );
}

// 🪐 Planet
function Planet({ texture, size, distance, speed, label, icon, onClick }) {
  const ref = useRef();
  const tex = useTexture(texture);
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState([0, 0, 0]);

  const isMobile = window.innerWidth < 768;
  const startAngle = useRef(Math.random() * Math.PI * 2).current;

  // Orbit points for Line
  const points = Array.from({ length: 60 }, (_, i) => {
    const angle = (i / 60) * 2 * Math.PI;
    return [Math.cos(angle) * distance, 0, Math.sin(angle) * distance];
  });

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + startAngle;
    const x = Math.sin(t) * distance;
    const z = Math.cos(t) * distance;
    ref.current.position.set(x, 0, z);
    ref.current.rotation.y += 0.005;
    setPos([x, size + 2.8, z]);
  });

  const handleClick = () => {
    if (isMobile && !active) {
      setActive(true); // first tap shows label
    } else {
      onClick(); // second tap navigates
    }
  };

  return (
    <group>
      {/* Orbit Ring */}
      <Line
        points={points}
        color="#ffffffff"
        lineWidth={1.5}
        opacity={0.2}
        transparent
        closed // important to complete the ring
      />

      <mesh
        ref={ref}
        onClick={handleClick}
        onPointerOver={() => !isMobile && setActive(true)}
        onPointerOut={() => !isMobile && setActive(false)}
        scale={active ? 1.1 : 1}
      >
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          map={tex}
          emissive={active ? "#00ffff" : "#222"}
          emissiveIntensity={active ? 0.9 : 0.4}
        />
      </mesh>

      {active && (
        <Html position={pos} center>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              color: "#00ffff",
              background: "rgba(0,0,0,0.65)",
              padding: "6px 12px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 600,
              whiteSpace: "nowrap",
              textShadow: "0 0 10px #00ffff",
              pointerEvents: "none",
            }}
          >
            {icon} {label}
          </motion.div>
        </Html>
      )}
    </group>
  );
}



// 🎥 Smooth Camera Controller
function CameraController({ targetPosition }) {
  const { camera } = useThree();
  const { pos } = useSpring({ pos: targetPosition, config: { mass: 1.8, tension: 140, friction: 18 } });
  useFrame(() => {
    pos.get((p) => camera.position.set(p[0], p[1], p[2]));
    camera.lookAt(0, 0, 0);
  });
  return null;
}

// 🌌 Universe (Scene)
function Universe({ onSelect }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <FloatingStars />
      <Sun onClick={() => onSelect("sun")} />
      <Planet texture="/textures/earth.jpg" size={2.5} distance={10} speed={0.15} label="About" icon="🌍" onClick={() => onSelect("about")} />
      <Planet texture="/textures/mars.jpg" size={2.2} distance={15} speed={0.12} label="Projects" icon="🚀" onClick={() => onSelect("projects")} />

      <Planet texture="/textures/jupiter.jpg" size={3} distance={20} speed={0.09} label="Certifications & Skills" icon="🪐" onClick={() => onSelect("certifications")}/>

      <Planet texture="/textures/saturn.jpg" size={3.2} distance={25} speed={0.07} label="Resume" icon="📜" onClick={() => onSelect("resume")} />
      <Planet texture="/textures/neptune.jpg" size={2} distance={30} speed={0.05} label="Contact" icon="📞" onClick={() => onSelect("contact")} />
    </>
  );
}

// ☀️ Solar System (Main scene)
function SolarSystem() {
  const navigate = useNavigate();
  const [cameraPos, setCameraPos] = useState([0, 10, 50]);

  const positions = {
    sun: [0, 5, 15],
    about: [10, 2, 15],
    projects: [15, 2, 15],
    certifications: [20, 3, 20],
    resume: [25, 3, 25],
    contact: [30, 2, 25],
  };

  const handleSelect = (planet) => {
    setCameraPos(positions[planet]);
    setTimeout(() => navigate(`/${planet}`), 900);
  };

  return (
    <div style={{ height: "100vh", background: "black", position: "relative",paddingTop: window.innerWidth < 600 ? "30px" : "0", }}>
      <Suspense fallback={<div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',color:'white'}}>Loading scene...</div>}>
        <Canvas
  camera={{
    position: window.innerWidth < 600 ? [0, 15, 80] : cameraPos,
    fov: window.innerWidth < 600 ? 75 : 60,
  }}
>

          <Universe onSelect={handleSelect} />
          <CameraController targetPosition={cameraPos} />
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 10]} intensity={1} />

        </Canvas>
      </Suspense>

      <div style={{
  position: "absolute",
  top: 20,
  left: "50%",
  transform: "translateX(-50%)",
  color: "white",
  textAlign: "center",
  background: "rgba(0,0,0,0.6)",
  padding: window.innerWidth < 768 ? "8px 16px" : "12px 24px",
  borderRadius: 12,
  fontSize: window.innerWidth < 768 ? 14 : 22,
  fontWeight: 600,
  letterSpacing: 1,
  textShadow: "0 0 8px #00ffff",
  width: "90%",
  maxWidth: 500
}}>

        🚀 Welcome to <span style={{ color: "#00ffff" }}>Suresh Universe</span> ✨ <br />
        Click planets to explore my world
      </div>
    </div>
  );
}

// 🌈 Page Transition Wrapper
const PageTransition = ({ children, color }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, background: color }}
    exit={{ opacity: 0, scale: 1.05 }}
    transition={{ duration: 1.2 }}
    style={{ minHeight: "100vh" }}
  >
    {children}
  </motion.div>
);

// 🎬 Animated Routes (New Function)
const AnimatedRoutes = () => {
  const location = useLocation();
  const [bgColor, setBgColor] = useState("black");

  useEffect(() => {
  switch (location.pathname) {
    case "/projects": setBgColor("#1a0f0a"); break; // Mars reddish
    case "/about": setBgColor("#001a33"); break;
    case "/CertificationsAndSkills": setBgColor("#331a00"); break; // Jupiter theme (golden-brown)
    case "/resume": setBgColor("#1a1a1a"); break;
    case "/contact": setBgColor("#0a001a"); break;
    default: setBgColor("black"); break;
  }
}, [location.pathname]);


  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition color="black"><SolarSystem /></PageTransition>} />
        <Route path="/about" element={<PageTransition color={bgColor}><About /></PageTransition>} />
        <Route path="/projects" element={<PageTransition color={bgColor}><Projects /></PageTransition>} />
        <Route
  path="/certifications"
  element={<PageTransition color="#1a0f0a"> <CertificationsAndSkills /></PageTransition>}/>
        
        <Route path="/resume" element={<PageTransition color={bgColor}><Resume /></PageTransition>} />
        <Route path="/contact" element={<PageTransition color={bgColor}><Contact /></PageTransition>} />
        <Route path="/sun" element={<PageTransition color={bgColor}><SunPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};
function CinematicEntry({ onEnter }) {
    return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      style={{
        position: "fixed",
        inset: 0,
        background:
          "radial-gradient(circle at center, #021526 0%, #000814 60%, #000 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        color: "white",
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* PHOTO */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 30px rgba(0,255,255,0.3)",
              "0 0 55px rgba(0,255,255,0.55)",
              "0 0 30px rgba(0,255,255,0.3)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 140,
            height: 140,
            borderRadius: "50%",
            overflow: "hidden",
            margin: "0 auto 30px",
            border: "2px solid rgba(0,255,255,0.6)",
            backdropFilter: "blur(8px)",
          }}
        >
          <img
            src="/profile.jpg" // 👉 your photo
            alt="Suresh Kumar"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </motion.div>

        {/* NAME */}
        <h1
          style={{
            fontSize: "clamp(34px, 6vw, 64px)",
            letterSpacing: "0.12em",
            fontWeight: 600,
            marginBottom: 14,
            textTransform: "uppercase",
            textShadow:
              "0 0 25px rgba(0,255,255,0.4), 0 0 60px rgba(0,255,255,0.15)",
          }}
        >
          Suresh's Portfolio
        </h1>

        {/* TAGLINE */}
        <p
          style={{
            opacity: 0.85,
            marginBottom: 44,
            fontSize: "clamp(14px, 2vw, 18px)",
            letterSpacing: "0.06em",
          }}
        >
         🪐 Full-Stack Portfolio crafting scalable digital universes
        </p>

        {/* CTA */}
        <motion.button
          onClick={onEnter}
          whileHover={{
            scale: 1.1,
            boxShadow:
              "0 0 30px rgba(0,255,255,0.9), 0 0 90px rgba(0,255,255,0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              "0 0 18px rgba(0,255,255,0.4)",
              "0 0 32px rgba(0,255,255,0.6)",
              "0 0 18px rgba(0,255,255,0.4)",
            ],
          }}
          transition={{
            boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            padding: "16px 46px",
            fontSize: 16,
            letterSpacing: "0.14em",
            borderRadius: 40,
            border: "1px solid rgba(0,255,255,0.7)",
            background: "rgba(0,255,255,0.05)",
            color: "#bfffff",
            cursor: "pointer",
            textTransform: "uppercase",
          }}
        >
          View Universe
        </motion.button>
      </motion.div>
    </motion.div>
  );
}


// 🚀 Main App
export default function App() {
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    const utter = new SpeechSynthesisUtterance(
      "Welcome to Suresh Universe. Explore the galaxies of code and creation!"
    );
    utter.rate = 1;
    utter.pitch = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);

    setEntered(true);
  };

  return (
    <>
      {!entered && <CinematicEntry onEnter={handleEnter} />}

      <Router>
        <AnimatedRoutes />
        <FloatingAIChat />
      </Router>
    </>
  );
}
