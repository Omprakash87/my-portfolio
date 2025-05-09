export default function Certificates() {
  const certificates = [
    {
      title: "Certified Embedded Systems Engineer",
      description: "Comprehensive certification covering embedded systems design and development.",
      image: "/images/certificates/embedded-systems.jpg", // Replace with your image path
      link: "https://example.com/embedded-systems-certification", // Replace with the actual link
    },
    {
      title: "IoT Specialist Certification",
      description: "Specialized certification in IoT protocols, devices, and cloud integration.",
      image: "/images/certificates/iot-specialist.jpg",
      link: "https://example.com/iot-certification",
    },
    {
      title: "Python for Data Science Certification",
      description: "Certification focused on Python programming for data analysis and visualization.",
      image: "/images/certificates/python-data-science.jpg",
      link: "https://example.com/python-certification",
    },
    {
      title: "RTOS Development Certification",
      description: "Hands-on certification in RTOS development using FreeRTOS and Zephyr.",
      image: "/images/certificates/rtos-certification.jpg",
      link: "https://example.com/rtos-certification",
    },
    {
      title: "Machine Learning on Embedded Systems Certification",
      description: "Certification in deploying machine learning models on embedded devices.",
      image: "/images/certificates/ml-embedded.jpg",
      link: "https://example.com/ml-certification",
    },
  ];

  return (
    <section id="certificates" className="certificates">
      <h2>Certificates</h2>
      <div className="certificates-grid">
        {certificates.map((certificate, index) => (
          <div key={index} className="certificate-card">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="certificate-image"
            />
            <h3>{certificate.title}</h3>
            <p>{certificate.description}</p>
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-link"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}