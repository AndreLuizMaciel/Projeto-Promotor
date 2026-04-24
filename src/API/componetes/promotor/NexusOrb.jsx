import React from "react";
import { motion } from "framer-motion";

export default function NexusOrb() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
      {/* Outer glow */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full bg-primary/20 blur-3xl"
      />
      {/* Mid ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 rounded-full border border-primary/30"
      />
      {/* Inner ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-10 rounded-full border border-accent/30"
      />
      {/* Core */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
      >
        <span className="text-primary-foreground font-black text-2xl md:text-3xl tracking-wider">N</span>
      </motion.div>
      {/* Orbiting dots */}
      {[0, 90, 180, 270].map((deg, i) => (
        <motion.div
          key={i}
          animate={{ rotate: [deg, deg + 360] }}
          transition={{ duration: 12 + i * 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
          style={{ transformOrigin: "center" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
        </motion.div>
      ))}
    </div>
  );
}
