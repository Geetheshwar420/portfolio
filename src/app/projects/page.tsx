"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="projects-page">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: "var(--space-8)" }}
          >
            <Link
              href="/"
              className="btn-secondary"
              style={{ padding: "0.5rem 1rem", fontSize: "0.75rem", display: "inline-flex" }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" style={{ transform: "rotate(180deg)" }}>
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            className="projects-page-header"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1>All Projects</h1>
            <p>A comprehensive view of my deployed applications, tools, and experiments.</p>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, index) => {
              const link = project.live || project.github;
              return (
                <motion.a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-preview-card"
                  key={project.id}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                >
                  <div className="project-preview-image">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="project-preview-overlay">
                      <span className="project-preview-cta">
                        {project.live ? "Visit Live Site" : "View Source"} ↗
                      </span>
                    </div>
                  </div>
                  <div className="project-preview-content">
                    <div className="project-preview-meta">
                      <span className="project-category">{project.category}</span>
                    </div>
                    <h2 className="project-title">{project.title}</h2>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.tech.map((t) => (
                        <span key={t} className="tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
