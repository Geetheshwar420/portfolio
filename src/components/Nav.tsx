"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <a href="#" className="nav-logo" aria-label="Geetheshwar home">
          GSG
        </a>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="nav-cta" aria-label="Let's talk">
          Let&apos;s Talk
        </a>

        <button
          className="nav-mobile-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            style={
              menuOpen ? { transform: "rotate(45deg) translate(4px, 4px)" } : {}
            }
          />
          <span style={menuOpen ? { opacity: 0 } : {}} />
          <span
            style={
              menuOpen
                ? { transform: "rotate(-45deg) translate(4px, -4px)" }
                : {}
            }
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            background: "rgba(10,10,10,0.97)",
            backdropFilter: "blur(12px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "1.25rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--clr-text)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--clr-accent)",
              border: "1px solid var(--clr-accent)",
              padding: "0.75rem 2rem",
              marginTop: "1rem",
            }}
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
    </>
  );
}
