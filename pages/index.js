import Navbar from '../components/Navbar'; // Adjust the path based on the file structure
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Research from '../components/sections/Research';
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

      <Skills />
      <Experience />
      <Projects />
      <Research />

      {/* Contact Me Section */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>Have a question or collaboration idea? Let’s talk!</p>
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}