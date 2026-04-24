import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

export default function AuthorCard({ name, role, description, imageUrl, linkedinUrl, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group"
    >
      <div className="glass-card rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-500">
        <div className="aspect-square overflow-hidden relative">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-foreground">{name}</h3>
          <p className="text-sm text-primary font-medium mt-1">{role}</p>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{description}</p>
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
