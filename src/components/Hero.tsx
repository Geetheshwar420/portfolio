"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ResumeDropdown from "@/components/ResumeDropdown";

export default function Hero() {
  return (
    <section className="hero section">
      {/* Background grid lines */}
      <div className="hero-grid-lines" aria-hidden="true" />
      {/* Ambient glow */}
      <div className="hero-ambient" aria-hidden="true" />

      <div className="container hero-content">
        <div className="hero-inner">
          {/* Text side */}
          <div className="hero-text">
            <motion.p
              className="hero-eyebrow"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              Full-Stack Developer &amp; AI Engineer
            </motion.p>

            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            >
              Geetheshwar
              <br />
              Sri Ranga Sai
            </motion.h1>

            <motion.p
              className="hero-role"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            >
              Building <em>intelligent systems</em>, quantum-safe applications, and
              AI-powered products — from mobile to the cloud.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            >
              <a href="#projects" className="btn-primary">
                View Work
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <ResumeDropdown />

              <a
                href="https://github.com/Geetheshwar420"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                aria-label="GitHub profile"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58 0-.28-.01-1.03-.02-2.03-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
            </motion.div>
          </div>

          {/* Portrait side */}
          <motion.div
            className="hero-portrait-wrap"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            aria-hidden="true"
          >
            <div className="hero-portrait-frame">
              <Image
                src="/geetheshwar-hero.jpg"
                alt="Geetheshwar Sri Ranga Sai Gadamsetty"
                fill
                sizes="(max-width: 900px) 0px, 380px"
                priority
                quality={80}
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
              {/* Amber edge glow overlay */}
              <div className="hero-portrait-glow" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </div>

      <p className="hero-scroll-hint" aria-hidden="true">Scroll</p>
    </section>
  );
}
