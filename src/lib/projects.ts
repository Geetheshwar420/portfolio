export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  featured: boolean;
  category: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "project-ageis",
    title: "ProjectAgeis",
    description:
      "A quantum-safe chat application implementing Post-Quantum Cryptography (PQC) and Quantum Key Cryptography (QKC). Built to be resilient against quantum computing attacks — securing communication for the post-quantum era.",
    tech: ["Python", "PQC", "QKC", "Cryptography", "Vercel"],
    github: "https://github.com/Geetheshwar420/ProjectAgeis",
    live: "https://project-ageis.vercel.app",
    featured: true,
    category: "Security",
    image: "/projects/project-ageis.svg",
  },
  {
    id: "medconnect",
    title: "MedConnect",
    description:
      "A full-stack medical platform connecting patients and healthcare providers. Built with TypeScript and Next.js, featuring real-time appointment scheduling, patient records management, and secure data handling.",
    tech: ["TypeScript", "Next.js", "React", "Healthcare"],
    github: "https://github.com/Geetheshwar420/MedConnect",
    featured: true,
    category: "Full-Stack",
    image: "/projects/medconnect.svg",
  },
  {
    id: "odyssey",
    title: "Odyssey",
    description:
      "A context-aware city discovery engine that understands where you are, what time it is, and what you need — surfacing hyper-relevant local experiences. Built with TypeScript for intelligent, real-time city exploration.",
    tech: ["TypeScript", "Context API", "Geolocation", "AI"],
    github:
      "https://github.com/Geetheshwar420/Odyssey-Context-Aware-City-Discovery-Engine",
    featured: true,
    category: "AI / Discovery",
    image: "/projects/odyssey.svg",
  },
  {
    id: "product-pulse",
    title: "ProductPulse",
    description:
      "A product analytics and tracking platform built with TypeScript. Provides real-time insights into product performance, user behavior analytics, and actionable metrics for product teams.",
    tech: ["TypeScript", "React", "Analytics", "Dashboard"],
    github: "https://github.com/Geetheshwar420/ProductPulse",
    featured: true,
    category: "Full-Stack",
    image: "/projects/product-pulse.svg",
  },
  {
    id: "pathfinder-ai",
    title: "PathFinderAI",
    description:
      "An AI-powered career guidance application that maps your skills to the right career paths. Built in Flutter/Dart, it delivers personalized learning roadmaps and job recommendations.",
    tech: ["Flutter", "Dart", "AI", "Career Tech"],
    github: "https://github.com/Geetheshwar420/PathFinderAI",
    featured: true,
    category: "Mobile / AI",
    image: "/projects/pathfinder-ai.svg",
  },
  {
    id: "quantum-shield",
    title: "QuantumSheild",
    description:
      "A JavaScript security tool providing quantum-resistant encryption and shielding for web applications. Deployed live as a working demonstration of next-generation cryptographic defense.",
    tech: ["JavaScript", "Cryptography", "Security", "Web"],
    github: "https://github.com/Geetheshwar420/QuantumSheild",
    live: "https://quantum-sheild-sigma.vercel.app",
    featured: false,
    category: "Security",
    image: "/projects/quantum-shield.svg",
  },
  {
    id: "scilab-test",
    title: "Scilab Test Platform",
    description:
      "An interactive testing and assessment platform built in JavaScript, deployed on Vercel. Provides a structured environment for scientific computing tests and evaluations.",
    tech: ["JavaScript", "Web", "Testing", "Vercel"],
    github: "https://github.com/Geetheshwar420/scilab-test",
    live: "https://scilab-test.vercel.app",
    featured: false,
    category: "Web",
    image: "/projects/scilab-test.svg",
  },
  {
    id: "python-quiz",
    title: "Python Quiz",
    description:
      "An interactive Python quiz application that tests programming knowledge through progressive challenges. A clean, effective learning tool for developers leveling up their Python skills.",
    tech: ["Python", "Quiz", "Education"],
    github: "https://github.com/Geetheshwar420/python-quiz",
    featured: false,
    category: "Education",
    image: "/projects/python-quiz.svg",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
