import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("light"); // Default to "light" initially
  const [isMounted, setIsMounted] = useState(false); // Ensure the component is mounted
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Ensure this runs only on the client side
    setIsMounted(true);

    // Get the saved theme from localStorage
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!isMounted) {
    // Prevent rendering until the component is mounted
    return null;
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="logo">MyPortfolio</a>
        <ul className="navbar-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#contact" className="hire-button">Hire Me</a></li>
        </ul>
      </div>
    </nav>
  );
}
