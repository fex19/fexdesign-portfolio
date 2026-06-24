'use client';

import { motion } from 'framer-motion';

export default function DroneStats() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 rounded-[28px] p-6"
      >
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,rgba(163,230,53,0.15),transparent_70%)]" />

        <h3 className="relative z-10 text-4xl md:text-5xl font-black text-lime-400 mb-2">
          +120
        </h3>

        <p className="relative z-10 text-white/60 uppercase tracking-[0.25em] text-[11px]">
          Vuelos realizados
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 rounded-[28px] p-6"
      >
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,rgba(163,230,53,0.15),transparent_70%)]" />

        <h3 className="relative z-10 text-4xl md:text-5xl font-black text-lime-400 mb-2">
          +500
        </h3>

        <p className="relative z-10 text-white/60 uppercase tracking-[0.25em] text-[11px]">
          Horas de grabación
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 rounded-[28px] p-6"
      >
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,rgba(163,230,53,0.15),transparent_70%)]" />

        <h3 className="relative z-10 text-4xl md:text-5xl font-black text-lime-400 mb-2">
          +50
        </h3>

        <p className="relative z-10 text-white/60 uppercase tracking-[0.25em] text-[11px]">
          Proyectos entregados
        </p>
      </motion.div>

    </div>
  );
}