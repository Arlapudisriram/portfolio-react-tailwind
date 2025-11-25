
import { Home,User,Code,Briefcase,Mail,Moon,Sun } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("/");
   const [theme, setTheme] = useState("light");

  useEffect(() => {
    setActiveSection(window.location.pathname);


     const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

   const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };


  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Skills", href: "/skills", icon: Code },
    { name: "Projects", href: "/projects", icon: Briefcase },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <nav className="text-lg w-full  px-6 py-4 flex items-center justify-end gap-8">

      
      {navItems.map((item) => {
        const isActive = activeSection === item.href;

        return (
          <a
            key={item.name}
            href={item.href}
            aria-label={item.name}
            className={`transition-colors flex flex-col items-center justify-center 
            ${isActive 
              ? "text-blue-500 font-semibold underline decoration-blue-500 decoration-2 underline-offset-4"
              : "text-gray-600 hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-400"
            }`}
          >
    
            <item.icon className="w-5 h-5" />
            <span className="text-xs mt-1 hidden md:block">{item.name}</span>
            
          </a>
          
        );
      })}
      <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
        >
          {theme === "light" ? (
            <Moon className="w-5 h-5 text-gray-800 " />
          ) : (
            <Sun className="w-5 h-5 text-yellow-400" />
          )}
        </button>
        
    </nav>
  );
};

export default Navbar;






