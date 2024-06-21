import React, { useRef } from "react";
import "./App.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Prenota from "./pages/Prenota";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const prenotaRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement>) => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col h-full">
      <Navbar
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToMenu={() => scrollToSection(menuRef)}
        scrollToPrenota={() => scrollToSection(prenotaRef)}
      />
      <div ref={homeRef}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Home />
        </motion.div>
      </div>
      <div ref={menuRef}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Menu />
        </motion.div>
      </div>
      <div ref={prenotaRef}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Prenota />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
