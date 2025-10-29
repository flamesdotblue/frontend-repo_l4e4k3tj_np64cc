import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-white/20 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-2xl p-8 sm:p-12"
        >
          <div className="absolute -inset-16 bg-gradient-to-tr from-fuchsia-500/20 via-violet-500/20 to-sky-500/20 blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
              Let’s build something visionary
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300 max-w-2xl">
              Open for collaborations, freelance opportunities, and full‑time roles. Reach out and let’s craft an experience that stands out.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:scale-[1.02] transition-transform"
              >
                <Mail size={18} /> Email me
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-neutral-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl text-neutral-900 dark:text-white hover:scale-[1.02] transition-transform"
              >
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>
        </motion.div>
        <p className="mt-8 text-center text-xs text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} NeoPortfolio. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
