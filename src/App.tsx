import "./App.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Prenota from "./pages/Prenota";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Home />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Menu />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Prenota />
      </motion.div>
    </div>
  );
}

export default App;
