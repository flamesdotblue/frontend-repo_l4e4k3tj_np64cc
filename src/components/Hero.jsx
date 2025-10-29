import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = ({ theme }) => {
  const lightPhoto =
    'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1600&auto=format&fit=crop';
  const darkPhoto =
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1600&auto=format&fit=crop';

  return (
    <section id="hero" className="relative min-h-[95vh] pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-white/0 dark:from-black/50 dark:via-black/40 dark:to-black/0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10 backdrop-blur-xl text-xs text-neutral-700 dark:text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for freelance projects
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-neutral-900 via-violet-700 to-fuchsia-600 dark:from-white dark:via-violet-300 dark:to-fuchsia-300">
            Futuristic, vibrant portfolio for the Gen Z era
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 max-w-xl">
            I craft immersive digital experiences with a focus on motion, depth, and delightful micro‑interactions.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-tr from-fuchsia-600 via-violet-600 to-sky-600 text-white shadow-lg shadow-fuchsia-500/30 hover:scale-[1.02] active:scale-[0.99] transition-transform"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-neutral-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl text-neutral-900 dark:text-white hover:scale-[1.02] transition-transform"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <div className="relative aspect-square w-full max-w-md mx-auto">
            <img
              src={theme === 'dark' ? darkPhoto : lightPhoto}
              alt="Profile"
              className="relative z-10 w-full h-full object-cover rounded-3xl border border-white/30 dark:border-white/10 shadow-2xl"
            />
            <div className="absolute -inset-6 bg-gradient-to-tr from-fuchsia-500/40 via-violet-500/40 to-sky-500/40 rounded-[2rem] blur-2xl" />
            <div className="absolute inset-0 rounded-3xl bg-white/10 dark:bg-white/5 backdrop-blur-2xl border border-white/20 dark:border-white/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
