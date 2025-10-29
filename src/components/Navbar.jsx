import React from 'react';
import { Sun, Moon, Rocket } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/50 dark:bg-black/30 border-b border-white/20 dark:border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="p-2 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-sky-500 text-white shadow-lg shadow-fuchsia-500/30 group-hover:scale-105 transition-transform">
            <Rocket size={18} />
          </span>
          <span className="font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            NeoPortfolio
          </span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">Contact</a>
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="ml-2 inline-flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white/60 dark:bg-neutral-900/60 shadow-sm hover:scale-105 transition-transform"
          >
            {theme === 'dark' ? (
              <Sun className="text-amber-300" size={18} />
            ) : (
              <Moon className="text-violet-600" size={18} />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
