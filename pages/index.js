import Navbar from '../components/Navbar'; // Adjust the path based on the file structure
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Research from '../components/sections/Research';
import Certificates from '../components/sections/Certificates'; // Import Certificates section
import Contact from '../components/sections/Contact';
import Image from 'next/image';

export default function Hero() {
  return (
    <div>
      

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hello, I'm OM</h1>
            <p>Electrical and Computer Engineer at UAB</p>
            <a href="#about" className="cta">Learn More</a>
          </div>
          <div className="hero-image">
            <Image src="/profile.jpeg" alt="OM" width={280} height={280} />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="about parallax">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am an Electrical and Computer Engineer at the University of Alabama at Birmingham (UAB). 
            Passionate about cutting-edge technology, software development, and embedded systems, 
            I specialize in designing intelligent solutions for real-world challenges.
          </p>
          <p>
            My expertise lies in machine learning, full-stack development, and UI/UX design. 
            I love working on innovative projects that merge software and hardware to enhance user experience.
          </p>
        </div>
        <div className="about-image">
          <img src="/embedded.jpeg" alt="OM" />
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Certificates Section */}
      <section id="certificates" className="certificates">
        <h2>Certificates</h2>
        <div className="certificates-grid">
          <div className="certificate-card">
            <h3>Certified Embedded Systems Engineer</h3>
            <p>Comprehensive certification covering embedded systems design and development.</p>
            <a href="https://example.com/embedded-systems-certification" target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
          <div className="certificate-card">
            <h3>IoT Specialist Certification</h3>
            <p>Specialized certification in IoT protocols, devices, and cloud integration.</p>
            <a href="https://example.com/iot-certification" target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
          <div className="certificate-card">
            <h3>Python for Data Science Certification</h3>
            <p>Certification focused on Python programming for data analysis and visualization.</p>
            <a href="https://example.com/python-certification" target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
          <div className="certificate-card">
            <h3>RTOS Development Certification</h3>
            <p>Hands-on certification in RTOS development using FreeRTOS and Zephyr.</p>
            <a href="https://example.com/rtos-certification" target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
          <div className="certificate-card">
            <h3>Machine Learning on Embedded Systems Certification</h3>
            <p>Certification in deploying machine learning models on embedded devices.</p>
            <a href="https://example.com/ml-certification" target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Research Section */}
      <Research />

      {/* Contact Me Section */}
      <Contact />
    </div>
  );
}