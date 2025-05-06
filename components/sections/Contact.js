import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      await emailjs.send(
        'service_c55y2xv', // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
        formData,
        'JnWLPwgkyhgWGsXFm' // Replace with your EmailJS Public Key
      );
      setStatus('Message Sent Successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out if you have any questions or collaboration opportunities!</p>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Omprakash indla"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Omprakashindla54@gmail.com"
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
