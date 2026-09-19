"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    label: "Languages",
    skills: ["TypeScript", "Python", "Dart", "JavaScript", "HTML/CSS"],
  },
  {
    label: "Frameworks & Runtimes",
    skills: ["Next.js", "React", "Flutter", "Node.js", "FastAPI"],
  },
  {
    label: "AI & ML",
    skills: ["Gemini API", "OpenAI API", "Ollama", "LangChain", "RAG"],
  },
  {
    label: "Security & Cryptography",
    skills: ["PQC", "QKC", "Quantum-Safe Crypto", "Web Security"],
  },
  {
    label: "Backend & Data",
    skills: ["Firebase", "Supabase", "PostgreSQL", "REST APIs", "WebSockets"],
  },
  {
    label: "Tools & Platforms",
    skills: ["Vercel", "Git", "GitHub", "VS Code", "Docker"],
  },
];

const techTicker = [
  "TypeScript",
  "Python",
  "Next.js",
  "Flutter",
  "AI Engineering",
  "Quantum Cryptography",
  "Full-Stack",
  "REST APIs",
  "Firebase",
  "Framer Motion",
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <>
      {/* Ticker */}
      <div className="ticker-wrap" aria-hidden="true">
        <div className="ticker-inner">
          {[...techTicker, ...techTicker].map((item, i) => (
            <div key={i} className="ticker-track">
              <span className="ticker-item">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <section id="skills" className="section skills-section" ref={ref}>
        <div className="container">
          <motion.p
            className="section-index"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            03 — Skills
          </motion.p>

          <motion.h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              fontStyle: "italic",
              letterSpacing: "-0.02em",
              marginBottom: "var(--space-4)",
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            Technologies I build with.
          </motion.h2>

          <div className="skills-grid">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.label}
                className="skill-group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + gi * 0.06,
                  ease: "easeOut",
                }}
              >
                <h3>{group.label}</h3>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
