import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    { name: "Eato App", description: "A food ordering platform with a beautiful UI.", link: "#" },
    { name: "Drone Farming System", description: "A smart drone solution for agriculture.", link: "#" },
    { name: "InfusedAI Analytics", description: "AI-powered video analytics for manufacturers.", link: "#" },
    { name: "Portfolio Website", description: "A personal portfolio showcasing my work.", link: "#" },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project <FaExternalLinkAlt />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
