import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Holographic Commerce',
    desc: 'A neon‑infused storefront with fluid glass UI and parallax product reveals.',
    img: 'https://images.unsplash.com/photo-1607603750909-408e19386854?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Echo Studio',
    desc: 'A creator platform with ambient motion and dimensional navigation.',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Nebula Labs',
    desc: 'A research hub featuring Spline scenes and reactive shaders.',
    img: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1600&auto=format&fit=crop',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 mb-10"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/20 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-2xl"
            >
              <img src={p.img} alt={p.title} className="w-full h-56 object-cover" />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
                  <ArrowRight className="text-violet-500 group-hover:translate-x-1 transition-transform" size={18} />
                </div>
                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{p.desc}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-fuchsia-500/10 via-violet-500/10 to-sky-500/10" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
