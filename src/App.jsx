import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TechStack from "./components/TechStack";
import { motion } from "framer-motion";

function App() {
  const getTheme = () => {
    return JSON.parse(localStorage.getItem("darkMode")) || false;
  };
  const [darkMode, setDarkMode] = useState(getTheme());

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={darkMode && "dark min-h-screen"}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="bg-[#f9f9f9] dark:bg-gray-900 text-gray-900 dark:text-white">
        <Home />
        <About />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </motion.div>
  );
}
export default App;
