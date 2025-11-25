
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <div
      className="
        min-h-screen w-full
        bg-gradient-to-br 
        from-gray-50 via-white/40 to-gray-100/10
        dark:bg-gradient-to-br 
        dark:from-[#0a0a0a] 
        dark:via-[#0f0f0f]/70 
        dark:to-[#1a1a1a]/40
        text-black dark:text-white
        transition-colors duration-300
      "
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
