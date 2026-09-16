import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";

export const DATA = {
  name: "AbuLara",
  legalName: "Haider Alanisi",
  initials: "AL",
  url: "https://portfolio-ten-mauve-xbap89iflq.vercel.app",
  location: "Karbala, Iraq",
  locationLink: "https://www.google.com/maps/place/Karbala",
  avatarUrl: "https://avatars.githubusercontent.com/u/217343438?v=4",
  description:
    "Senior Backend & Full-Stack Engineer specializing in Node.js, TypeScript, and distributed microservices architectures.",
  summary:
    "Senior Software Engineer with extensive experience building high-throughput APIs, fault-tolerant transaction systems, and modern web architectures. Proven track record in asynchronous, remote-first environments. Also a multidisciplinary creative and intellectual professional with expertise in game development, motion graphics, cinematography, academic research, and classical Arabic literature.",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Java", icon: Java },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "haideralasady123@gmail.com",
    tel: "+9647828796140",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/abulara7",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abulara98",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/7h3io",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@an.d9?si=DpZ3si7GBRgriAnD",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:haideralasady123@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  // ===== DIMENSION 1: ENGINEERING =====
  work: [
    {
      company: "Autonomous Engineering Consultant",
      href: "https://www.linkedin.com/in/abulara98",
      badges: ["Remote"],
      location: "Remote",
      title: "Lead System Architect & Senior Full-Stack Engineer",
      logoUrl: "/icons/autonomous.svg",
      start: "2023",
      end: "Present",
      description:
        "Lead technical architecture and system design for distributed SaaS platforms, AI orchestrations, and immersive educational environments. Architect scalable backend microservices, real-time collaboration systems, and high-concurrency distributed systems.",
    },
    {
      company: "Freelance / Independent Consultant",
      href: "https://www.linkedin.com/in/abulara98",
      badges: ["Remote"],
      location: "Remote",
      title: "Senior Backend & Full-Stack Engineer",
      logoUrl: "/icons/consultant.svg",
      start: "2021",
      end: "Present",
      description:
        "Architected high-throughput backend services and modern web applications using Node.js, TypeScript, and Next.js. Delivered resilient distributed systems and API architectures for multiple enterprise clients.",
    },
    {
      company: "NextGen Software Solutions",
      href: "https://www.linkedin.com/in/abulara98",
      badges: ["Remote"],
      location: "Remote",
      title: "Senior Backend & Cloud Systems Engineer",
      logoUrl: "/icons/nextgen.svg",
      start: "2021",
      end: "2023",
      description:
        "Designed resilient, high-throughput REST and GraphQL APIs with strict concurrency handling. Optimized SQL query performance, reduced database indexing overhead by 40%, and secured high-traffic systems.",
    },
    {
      company: "Tech Development Hub",
      href: "https://www.linkedin.com/in/abulara98",
      badges: ["Remote"],
      location: "Remote",
      title: "Full-Stack Software Engineer",
      logoUrl: "/icons/techhub.svg",
      start: "2019",
      end: "2021",
      description:
        "Developed end-to-end full-stack web applications with React, Next.js, and Node.js. Built robust role-based access control (RBAC), third-party API integrations, and event-driven logging solutions.",
    },
  ],

  education: [
    {
      school: "University of Kufa",
      href: "https://uokufa.edu.iq/en/",
      degree: "Master of Science (M.Sc.) in Organic Chemistry — Faculty of Science",
      logoUrl: "/icons/kufa.svg",
      start: "2026",
      end: "2028",
    },
    {
      school: "University of Karbala",
      href: "https://uokerbala.edu.iq/en/",
      degree: "Bachelor of Science (B.Sc.) in Chemistry — Faculty of Science",
      logoUrl: "/icons/karbala.svg",
      start: "2020",
      end: "2024",
    },
    {
      school: "Al-Kafeel Super Speciality Hospital",
      href: "https://alkafeelhospital.org/",
      degree: "Excellence in Clinical Pathology & Biochemical Laboratory Diagnostics",
      logoUrl: "/icons/kafeel.svg",
      start: "2022",
      end: "2022",
    },
    {
      school: "Al-Safeer Surgical Hospital",
      href: "https://www.linkedin.com/in/abulara98",
      degree: "Clinical Operations & Diagnostic Laboratories Fellowship (Graduated with Distinction)",
      logoUrl: "/icons/safeer.svg",
      start: "2022",
      end: "2022",
    },
    {
      school: "Al-Israa Medical Workshop",
      href: "https://www.linkedin.com/in/abulara98",
      degree: "Emergency Medicine, First Aid & Critical Response Certification",
      logoUrl: "/icons/israa.svg",
      start: "2022",
      end: "2022",
    },
    {
      school: "Chemical Safety and Security Society (CSSS)",
      href: "https://www.linkedin.com/in/abulara98",
      degree: "Laboratory Biosafety, Quality Control & Chemical Security Specialist",
      logoUrl: "/icons/csss.svg",
      start: "2022",
      end: "2024",
    },
  ],

  projects: [
    {
      title: "Pixora AI",
      href: "https://pixora-artistry.lovable.app/",
      dates: "2024 - Present",
      active: true,
      description:
        "An advanced, all-in-one AI workspace integrating 40+ generative AI tools, dynamic workflows, and automated pipeline utilities in a unified high-speed dashboard.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "OpenAI API",
        "PostgreSQL",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://pixora.ai",
          icon: null,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Orbit System",
      href: "https://github.com/abulara7",
      dates: "2024 - In Development",
      active: true,
      description:
        "High-performance research platform featuring 3D dynamic virtual laboratories across scientific domains, a Clinical Center simulation, and 12 autonomous AI agents.",
      technologies: [
        "Node.js",
        "TypeScript",
        "Three.js / WebGL",
        "Microservices",
        "Redis",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/abulara7",
          icon: null,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "MuthTech Edu",
      href: "https://github.com/abulara7",
      dates: "2024 - In Development",
      active: true,
      description:
        "Enterprise multi-tenant digital educational network designed for distributed institutional tooling, real-time collaboration, and high-concurrency learning modules.",
      technologies: [
        "Next.js",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "WebRTC",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/abulara7",
          icon: null,
        },
      ],
      image: "",
      video:
        "https://flow.google.com/shared/video/2bcd30cd-0ff7-440e-8c1d-d0bae3aa16c1",
    },
  ],

  securityAndResearch: [
    {
      title: "HackerOne Bug Bounty Program",
      dates: "2016 - 2020",
      location: "Global / Remote",
      description:
        "Actively participated as an independent security researcher uncovering critical backend vulnerabilities, business logic flaws, and API authorization bypasses across enterprise-grade scopes.",
      links: [
        {
          title: "Platform",
          icon: Icons.globe,
          href: "https://www.hackerone.com",
        },
      ],
    },
    {
      title: "CTF & Exploit Research Challenges",
      dates: "2021 - 2022",
      location: "Online",
      description:
        "Solved advanced Capture The Flag (CTF) challenges specializing in web application exploitation, reverse engineering, and privilege escalation vectors.",
      links: [],
    },
    {
      title: "Responsible Disclosure & Vulnerability Reports",
      dates: "2023 - Present",
      location: "Remote",
      description:
        "Authored high-severity reports detailing Insecure Direct Object References (IDOR), Race Conditions, and Server-Side Request Forgery (SSRF) vulnerabilities under responsible disclosure guidelines.",
      links: [],
    },
    {
      title: "Zero-Trust Architecture & Threat Modeling",
      dates: "2023",
      location: "Independent Research",
      description:
        "Designed defense-in-depth threat mitigation models for multi-tenant backend ecosystems, implementing cryptographic verification, strict mTLS, and defense against data poisoning.",
      links: [],
    },
    {
      title: "Smart Contract & Web3 Security Review",
      dates: "2022",
      location: "Online Research",
      description:
        "Analyzed decentralized protocols and Solidity contracts for reentrancy bugs, integer overflows, and front-running risks, publishing internal test suites and mitigation guidelines.",
      links: [],
    },
  ],

  // ===== DIMENSION 2: CREATIVE =====
  creative: {
    gameDevelopment: {
      title: "Game Development & 3D",
      period: "2015 - Present",
      description:
        "Professional game development and interactive 3D systems experience across industry-standard engines.",
      engines: [
        {
          name: "Unity",
          description:
            "Gameplay systems, physics simulation, spatial logic, interactive environments, real-time rendering, technical prototyping.",
        },
        {
          name: "Unreal Engine 5",
          description:
            "High-fidelity interactive experiences, advanced 3D systems, spatial computing, cinematic real-time capabilities.",
        },
      ],
      capabilities: [
        "Gameplay Systems Architecture",
        "Physics & Simulation",
        "Spatial Logic & 3D Composition",
        "Interactive Environments",
        "Real-time Rendering Concepts",
        "Technical Prototyping",
      ],
    },
    graphicDesign: {
      title: "Graphic Design",
      period: "2015 - Present",
      description:
        "Professional visual design experience across brand identity, digital media, and creative art direction.",
      capabilities: [
        "Brand & Identity Design",
        "Digital Visual Design",
        "Composition & Layout",
        "Advanced Typography",
        "Visual Systems",
        "Advertising & Commercial Design",
        "Creative Art Direction",
        "Advanced Image Manipulation",
        "Editorial & Publication Design",
      ],
    },
    motionGraphics: {
      title: "Motion Graphics & Post Production",
      period: "2017 - Present",
      projectCount: 500,
      description:
        "Professional motion graphics and post-production with 500+ completed creative projects.",
      software: [
        {
          name: "DaVinci Resolve",
          specialization: "Color grading, compositing, finishing",
        },
        {
          name: "Adobe After Effects",
          specialization: "Motion graphics, visual effects, animation",
        },
        {
          name: "Adobe Premiere Pro",
          specialization: "Editing, timeline composition, post-production",
        },
      ],
      capabilities: [
        "Motion Graphics",
        "Visual Effects (VFX)",
        "Editing & Timeline",
        "Compositing",
        "Color Grading",
        "Cinematic Finishing",
        "Commercial Production",
      ],
    },
    cinematography: {
      title: "Cinematography & Photography",
      period: "2015 - Present",
      description:
        "Professional cinematography and photography with expertise in visual composition, lighting, and visual storytelling.",
      capabilities: [
        "Cinematography",
        "Photography",
        "Visual Composition",
        "Lighting Design",
        "Camera Work",
        "Visual Storytelling",
        "Commercial & Creative Production",
      ],
    },
    colorGrading: {
      title: "Cinematic Color Grading",
      period: "2023 - Present",
      software: "DaVinci Resolve",
      description:
        "Specialized cinematic color grading for film and video production with professional finishing expertise.",
      capabilities: [
        "Color Correction",
        "Creative Grading",
        "Cinematic Aesthetics",
        "HDR Workflows",
        "Finishing & Delivery",
      ],
    },
  },

  // ===== DIMENSION 3: INTELLECTUAL =====
  intellectual: {
    research: {
      title: "Scientific & Academic Research",
      period: "2015 - Present",
      description:
        "Comprehensive research support across B.Sc., M.Sc., and Ph.D.-level academic work.",
      expertise: [
        "Scientific Research Support",
        "Academic Research Consulting",
        "Bachelor's-level (B.Sc.) Research",
        "Master's-level (M.Sc.) Research",
        "Doctoral-level (Ph.D.) Research",
        "Scientific Report Writing",
        "Academic Seminars & Presentations",
        "Research Organization & Documentation",
        "Professional Academic Formatting",
      ],
      note: "Academic research consulting and support — not holding a Ph.D., but working extensively with Ph.D.-level research.",
    },
    productivity: {
      title: "Academic & Professional Workflows",
      description: "Expertise in productivity tools and academic document preparation.",
      tools: [
        "Microsoft Word",
        "Microsoft PowerPoint",
        "Microsoft Excel",
        "Professional Documentation",
        "Report Writing",
        "Presentation Design",
      ],
    },
    publicIntellectual: {
      title: "Scientific & Intellectual Writing",
      platforms: [
        {
          name: "Quora",
          url: "https://ar.quora.com/profile/Dr-Haider-Y",
          description:
            "Science, philosophy, religion, and complex interdisciplinary questions.",
          language: "Arabic & English",
        },
        {
          name: "YouTube",
          url: "https://youtube.com/@an.d9?si=DpZ3si7GBRgriAnD",
          description:
            "Scientific, Quranic, and philosophical content exploring interdisciplinary topics.",
          language: "Arabic & English",
        },
      ],
    },
  },

  // ===== DIMENSION 4: LITERATURE =====
  literature: {
    novels: [
      {
        titleArabic: "صدى العدم",
        titleEnglish: "Echoes of the Void",
        period: "2024 - Present",
        status: "In Progress",
        structure: {
          volumes: 2,
          partsPerVolume: 4,
          sectionsPerPart: 6,
        },
        description: "A long-form literary novel exploring existential themes.",
      },
      {
        titleArabic: "ما تبقى من الليل",
        titleEnglish: "Remnants of the Night",
        period: "2026 - Present",
        status: "In Progress",
        description: "An ongoing literary project.",
      },
    ],
    epicPoem: {
      titleArabic: "القصيدة الملحمية الكبرى",
      titleEnglish: "The Grand Epic Poem",
      verses: 1300,
      versesArabic: "ألف وثلاثمائة بيت",
      focus: "Centered on Ahl al-Bayt (The People of the Household)",
      description:
        "A major literary achievement representing the classical Arabic epic poetry tradition.",
      status: "Completed",
    },
    poetry: [
      {
        titleArabic: "نبأ الصمت",
        titleEnglish: "News of Silence",
        type: "Poetry Collection / Diwan",
      },
    ],
    poetryCollections: {
      muallaqat: "10+ Mu'allaqat (classical Arabic hanging poems)",
      additional: "Additional poetry collections and ongoing literary works",
    },
    social: [
      {
        platform: "Instagram",
        handle: "@7h3io",
        url: "https://instagram.com/7h3io",
      },
      {
        platform: "TikTok",
        handle: "@7h3io",
        url: "https://tiktok.com/@7h3io",
      },
    ],
  },
} as const;
