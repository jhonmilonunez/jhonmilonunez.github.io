import { useEffect, useRef, useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Work from './components/Work/Work';
import ResumeCTA from './components/ResumeCTA/ResumeCTA';
import Footer from './components/Footer/Footer';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  const rootRef = useRef(null);
  const [active, setActive] = useState(null);

  // Scroll reveal: hide elements that start below the fold, reveal on entry.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const vh = window.innerHeight || 800;
    const queue = [];
    root.querySelectorAll('[data-reveal]').forEach((el) => {
      if (el.getBoundingClientRect().top > vh * 0.8) {
        el.setAttribute('data-reveal', 'hidden');
        el.style.transitionDelay = `${el.getAttribute('data-delay') || '0'}ms`;
        queue.push(el);
      }
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-reveal', '');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
    );
    queue.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Scroll spy: highlight the nav link for the section in view.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const sections = NAV.map((item) => root.querySelector(`#${item.id}`)).filter(Boolean);
    if (!sections.length) return;

    const ratios = {};
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0;
        });
        let best = null;
        let bestRatio = 0;
        Object.keys(ratios).forEach((id) => {
          if (ratios[id] > bestRatio) {
            bestRatio = ratios[id];
            best = id;
          }
        });
        setActive(best);
      },
      { threshold: [0, 0.2, 0.4, 0.6, 0.8, 1], rootMargin: '-25% 0px -45% 0px' },
    );
    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={rootRef} className={styles.root}>
      <div className={`${styles.blob} ${styles.blob1}`} aria-hidden="true" />
      <div className={`${styles.blob} ${styles.blob2}`} aria-hidden="true" />
      <div className={`${styles.blob} ${styles.blob3}`} aria-hidden="true" />

      <div className={styles.layer}>
        <Header nav={NAV} active={active} />
        <main>
          <Hero />
          <About />
          <Work />
          <ResumeCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
