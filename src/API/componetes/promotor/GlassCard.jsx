import React from "react";
import { motion } from "framer-motion";

export default function GlassCard({ icon: Icon, title, description, index = 0, accent = "primary" }) {
  const accentClasses = {
    primary: "text-primary border-primary/20",
    accent: "text-accent border-accent/20",
    gold: "text-gold border-gold/20",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`glass-card rounded-xl p-6 lg:p-8 hover:border-primary/20 transition-all duration-500 group ${accentClasses[accent]}`}
    >
      {Icon && (
        <div className={`w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}
