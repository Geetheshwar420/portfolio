"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { number: "37+", label: "Public Repositories" },
  { number: "8+", label: "Projects Shipped" },
  { number: "5+", label: "Tech Stacks" },
  { number: "2021", label: "Coding Since" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <motion.p
          className="section-index"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          01 — About
        </motion.p>

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <h2>
              Builder at the
              <br />
              intersection of
              <br />
              AI &amp; security.
            </h2>

            <p>
              I&apos;m <strong>Geetheshwar Sri Ranga Sai Gadamsetty</strong> — a
              Full-Stack Developer and AI Engineer who builds systems that are
              not just functional, but forward-looking.
            </p>

            <p>
              From <strong>quantum-safe cryptography</strong> to{" "}
              <strong>context-aware AI engines</strong>, I work across the full
              stack — TypeScript, Python, Flutter — to ship products that solve
              real problems with genuine technical depth.
            </p>

            <p>
              I care about the craft: clean architecture, purposeful UX, and
              code that scales. Every project is an opportunity to push the
              boundary of what&apos;s possible.
            </p>

            <div style={{ marginTop: "var(--space-8)", display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
              <a
                href="https://github.com/Geetheshwar420"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ fontSize: "0.75rem" }}
              >
                github.com/Geetheshwar420
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 2h8v8M10 2 2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/geetheshwar-g-12262a255"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ fontSize: "0.75rem" }}
              >
                LinkedIn
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 2h8v8M10 2 2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
              {/* DESIGN_PORTFOLIO_LINK */}
              <a
                href="https://drive.google.com/drive/folders/1pqflH-LYLu3SbRmPzvH0__VeACrSGR6Y"
                target="_blank"
                rel="noopener noreferrer"
                className="design-portfolio-link"
                aria-label="View design portfolio"
              >
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <rect x="1.5" y="1.5" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M4 6h4M4 4h2M4 8h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
                Design Portfolio ↗
              </a>
            </div>
          </motion.div>

          <motion.div
            className="about-right"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* About portrait */}
            <div className="about-portrait-wrap">
              <Image
                src="/geetheshwar-about.jpg"
                alt="Geetheshwar — developer portrait"
                fill
                sizes="(max-width: 900px) 100vw, 420px"
                quality={75}
                loading="lazy"
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
              <div className="about-portrait-overlay" aria-hidden="true" />
            </div>

            <div className="about-aside">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="about-stat"
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + i * 0.08,
                    ease: "easeOut",
                  }}
                >
                  <div className="about-stat-number">{stat.number}</div>
                  <div className="about-stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
