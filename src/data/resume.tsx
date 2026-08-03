import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import type { ReactNode } from "react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { SSVPSLogo } from "@/components/ui/svgs/ssvps";
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss";
import { Figma } from "@/components/ui/svgs/figma";
import { Framer } from "@/components/ui/svgs/framer";
import { UIUX } from "@/components/ui/svgs/uiux";
import { Cpp } from "@/components/ui/svgs/cpp";
import SSC from "../assets/scc.png";
import NMU from "../assets/nmu.png";
import Sumago from ".././assets/sumago.png";
import Acmegrade from '../assets/acmegrade.png'

export const DATA = {
  name: "Uday Ahire",
  initials: "UA",
  url: "https://github.com/udayahire2",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Passionate Frontend Developer dedicated to building intuitive, high-performance web experiences with modern architecture.",

  animatedRoles: [
    "Frontend Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Student",
  ],

  descriptionSuffix:
    "focused on building responsive web applications and practical digital products.",

  summary:
    "I am a frontend developer driven by the challenge of creating seamless digital products. With a deep focus on React, Next.js, and the modern web ecosystem, I bridge the gap between complex backend logic and pixel-perfect user interfaces.\n\nI believe in writing clean, scalable code and building components that are as beautiful under the hood as they are on the screen. My goal is always to deliver value through performance and exceptional user experience.\n\nCurrently building NMU STUDY HUB - a university-based study platform designed to help students access academic resources more efficiently. Leveraging modern frontend architecture, performance optimization, and exceptional UX to deliver a seamless educational experience.",
  avatarUrl: "https://avatars.githubusercontent.com/u/166685625?v=4",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Framer Motion", icon: Framer },
    { name: "TailwindCSS", icon: Tailwindcss },
    { name: "Figma", icon: Figma },
    { name: "UI/UX Design", icon: UIUX },
    { name: "C++", icon: Cpp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@udayahire.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/udayahire2",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/uday-ahire-0855b22b4",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/uday_ahire",
        icon: Icons.x,
        navbar: true,
      },

      Monkeytype: {
        name: "Monkeytype",
        url: "https://monkeytype.com/profile/uday_ahire",
        icon: Icons.monkeytype,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:auday248@outlook.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  internships: [
    {
      company: "Sumago Infotech Pvt. Ltd.",
      href: "https://sumagoinfotech.com/home",
      badges: [],
      location: "Remote",
      title: "Web Developement",
      logoUrl: Sumago,
      start: "Aug 2024",
      end: "Nov 2024",
      description:
        "Learned and applied core web development concepts including HTML, CSS, JavaScript, and PHP. Built basic web pages and dynamic components, gaining hands-on experience in frontend styling, form handling, and server-side scripting.",
    },
    {
      company: "Acmegrade PVT",
      href: "https://example.com",
      badges: [],
      location: "Remote",
      title: "Web Developement MERN",
      logoUrl: Acmegrade,
      start: "March 2026",
      end: "Present",
      description:
        "Currently learning and implementing MERN stack technologies (MongoDB, Express.js, React, Node.js). Working on building full-stack applications, understanding REST APIs, and developing reusable frontend components.",
    },
  ],
  education: [
    {
      school: "SSC",
      href: "https://mahahsscboard.in/",
      degree: "10th",
      logo: SSC,
      logoWrapperClassName: "bg-white p-0.5",
      logoClassName: "scale-110 object-cover",
      start: "2021",
      end: "2022",
    },
    {
      school: "SSVPS Polytechnic",
      href: "https://www.ssvpspoly.ac.in/",
      degree: "Diploma in Computer Engineering",
      logo: SSVPSLogo,
      logoWrapperClassName: "bg-background p-1.5",
      logoClassName: "scale-[1.15]",
      start: "2022",
      end: "2025",
    },
    {
      school: "North Maharashtra University",
      href: "https://nmu.ac.in/",
      degree: "Computer Engineering",
      logo: NMU,
      logoWrapperClassName: "bg-white p-1",
      start: "2025",
      end: "present",
    }
  ],
  projects: [

    {
      title: "NMU STUDY HUB",
      href: "https://github.com/udayahire2/nmu",
      dates: "June 2025 - Present",
      active: true,
      description:
        "Currently building a comprehensive university-based study platform for North Maharashtra University students. Focused on organizing academic resources, simplifying content discovery, and creating an intuitive interface for accessing study materials, notes, and educational content.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "MongoDB Atlas"
      ],
      links: [
        {
          type: "Website",
          href: "https://nmustudyhub.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/udayahire2/nmu",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },

    {
      title: "Local Govern Panchayat Management",
      href: "https://github.com/udayahire2/uday-portfolio",
      dates: "June 2025 - Nov 2025",
      active: false,
      description:
        "A web-based management system designed to help local village administration manage records and services such as taxes, certificates, government schemes, and citizen information more efficiently.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "MYSQL",

      ],
      links: [

        {
          type: "Source",
          href: "https://github.com/udayahire2/gram-panchayat",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    }
  ],
  design: [
    {
      title: "UDX UI Kit",
      href: "#",
      dates: "December 2025 - Present",
      active: true,
      description:
        "A modern Navigation Thats look Premium and calm supports dark and light mode.",
      technologies: [
        "Figma",

      ],
      links: [
        {
          type: "Prototype",
          href: "#Live",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "File",
          href: "#file",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Portfolio Landing Page",
      href: "#source",
      dates: "March 2026 - Present ",
      active: true,
      description:
        "Beautiful Light theme Portfolio Desinged for Design Engineer.",
      technologies: [
        "Figma",
        "React"
      ],
      links: [
        {
          type: "Prototype",
          href: "#live",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "file",
          href: "#file",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },

  ],
} as const;
