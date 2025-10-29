import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-gradient-to-tr from-fuchsia-500/30 via-violet-500/30 to-sky-500/30 blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            Liquid glass aesthetics with precision
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            I blend motion design, 3D, and crisp interfaces to deliver experiences that feel alive. Smooth, intentional animations guide users through stories.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Motion & Interactions', desc: 'Micro‑interactions, parallax, depth and fluid transitions.' },
            { title: 'Brand & Identity', desc: 'Tone‑setting visuals, premium typography, and color systems.' },
            { title: '3D & Visuals', desc: 'Spline scenes, shaders, and subtle volumetric lighting.' },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl p-6 border border-white/20 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-2xl shadow-[0_10px_40px_-10px_rgba(100,100,255,0.25)]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 via-violet-500/10 to-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <h3 className="relative z-10 font-semibold text-neutral-900 dark:text-white">
                {card.title}
              </h3>
              <p className="relative z-10 mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
