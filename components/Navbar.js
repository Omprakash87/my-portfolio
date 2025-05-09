import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Get the saved theme from localStorage or default to light
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="logo">MyPortfolio</a>
        <ul className="navbar-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
    </nav>
  );
}
