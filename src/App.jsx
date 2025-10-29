import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('light');

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle('dark', stored === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  return (
    <div className="scroll-smooth bg-gradient-to-br from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 min-h-screen">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Floating animated accents */}
      <div className="pointer-events-none fixed right-[-10rem] top-32 w-[28rem] h-[28rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none fixed left-[-10rem] top-72 w-[28rem] h-[28rem] rounded-full bg-sky-500/20 blur-3xl" />

      <main>
        <Hero theme={theme} />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
