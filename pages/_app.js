import '../styles/globals.css';
import Layout from '../components/Layout';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const revealSections = () => {
      const sections = document.querySelectorAll('.reveal');
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.85) {
          section.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', revealSections);
    revealSections();

    return () => window.removeEventListener('scroll', revealSections);
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
