import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function StatCounter({ value, suffix = "", label, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const numericValue = parseInt(value, 10);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = numericValue / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, numericValue, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-black text-gradient-purple">
        {count}{suffix}
      </div>
      <p className="text-sm text-muted-foreground mt-2 font-medium">{label}</p>
    </motion.div>
  );
}
