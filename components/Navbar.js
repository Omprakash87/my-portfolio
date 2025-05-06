import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("light"); // Default to "light" initially
  const [isMounted, setIsMounted] = useState(false); // Ensure the component is mounted

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

  if (!isMounted) {
    // Prevent rendering until the component is mounted
    return null;
  }

  return (
    <nav className="navbar">
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#research">Research</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#contact" className="hire-button">Hire Me</a></li>
      </ul>
    </nav>
  );
}
