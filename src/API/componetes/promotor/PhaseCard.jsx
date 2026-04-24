import React from "react";
import { motion } from "framer-motion";

export default function PhaseCard({ number, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass-card rounded-xl p-6 lg:p-8 group hover:border-primary/20 transition-all duration-500 relative overflow-hidden"
    >
      <div className="absolute -top-4 -right-4 text-[120px] font-black text-primary/5 leading-none select-none group-hover:text-primary/10 transition-colors duration-500">
        {number}
      </div>
      <div className="relative z-10">
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-3">
          Fase {number}
        </span>
        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
