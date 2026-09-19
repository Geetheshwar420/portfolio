"use client";

import { useState, useRef, useEffect } from "react";

const resumes = [
  {
    label: "Developer Resume",
    desc: "Full-Stack & Software",
    file: "/Geetheshwar%20Resume%20developer.pdf",
    icon: "⌨",
  },
  {
    label: "AI Developer Resume",
    desc: "AI / ML Engineering",
    file: "/Geetheshwar%20Resume%20AI%20Developer.pdf",
    icon: "◈",
  },
  {
    label: "Designer Resume",
    desc: "UI/UX & Product Design",
    file: "/Geetheshwar%20Resume%20Designer.pdf",
    icon: "◎",
  },
];

export default function ResumeDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close on Escape
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="resume-dropdown" ref={ref}>
      <button
        className="btn-secondary resume-trigger"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        id="resume-trigger"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M6 2v6M3 6l3 3 3-3M2 10h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Resume
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          aria-hidden="true"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 200ms ease",
            marginLeft: "2px",
          }}
        >
          <path d="M1 2.5l3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div
          className="resume-menu"
          role="menu"
          aria-labelledby="resume-trigger"
        >
          <p className="resume-menu-label">Choose resume type</p>
          {resumes.map((r) => (
            <a
              key={r.file}
              href={r.file}
              download={`${r.label}.pdf`}
              className="resume-menu-item"
              role="menuitem"
              onClick={() => setOpen(false)}
              aria-label={`Download ${r.label}`}
            >
              <span className="resume-menu-icon" aria-hidden="true">
                {r.icon}
              </span>
              <span className="resume-menu-text">
                <span className="resume-menu-title">{r.label}</span>
                <span className="resume-menu-desc">{r.desc}</span>
              </span>
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M6 2v6M3 6l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
