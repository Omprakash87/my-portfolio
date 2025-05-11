import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [theme, setTheme] = useState('light'); // Define theme state

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    console.log('Sending form data:', formData); // Debugging: Log form data

    try {
      const response = await emailjs.send(
        'service_c55y2xv', // Replace with your EmailJS Service ID
        'template_ilv3zof', // Replace with your EmailJS Template ID
        {
          name: formData.name, // Ensure these match your EmailJS template placeholders
          email: formData.email,
          message: formData.message,
        },
        'JnWLPwgkyhgWGsXFm' // Replace with your EmailJS Public Key
      );
      console.log('EmailJS response:', response); // Debugging: Log response
      setStatus('Message Sent Successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error); // Debugging: Log error
      setStatus('Failed to send message. Please try again.');
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out if you have any questions or collaboration opportunities!</p>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="youremail@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      <p>{status}</p>
    </section>
  );
}
