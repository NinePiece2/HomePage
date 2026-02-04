import {
  JavaIcon,
  CSharpIcon,
  LinkedinIcon,
  GithubIcon,
  SQLServerIcon,
  AzureIcon,
} from "@/components/icons";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiGit,
  SiKubernetes,
  SiGithubactions,
  SiDotnet,
  SiMysql,
  SiNginx,
  SiC,
  SiCloudflare,
  SiProxmox,
  SiTruenas,
  SiDependabot,
  SiMarkdown,
  SiTensorflow,
  SiLeetcode,
} from "react-icons/si";

import { Certificate } from "@/types/types";

export const skills = {
  "Frontend & Modern Web": [
    { name: "TypeScript", icon: <SiTypescript className="w-12 h-12" /> },
    { name: "React", icon: <SiReact className="w-12 h-12" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-12 h-12" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-12 h-12" /> },
  ],
  "Backend & Server-side": [
    { name: "Node.js", icon: <SiNodedotjs className="w-12 h-12" /> },
    { name: "Python", icon: <SiPython className="w-12 h-12" /> },
    { name: "Java", icon: <JavaIcon className="w-12 h-12" /> },
    { name: "C#", icon: <CSharpIcon className="w-12 h-12" /> },
    { name: ".NET", icon: <SiDotnet className="w-12 h-12" /> },
  ],
  "DevOps & Collaboration": [
    { name: "Git", icon: <SiGit className="w-12 h-12" /> },
    { name: "Docker", icon: <SiDocker className="w-12 h-12" /> },
    { name: "GitHub Actions", icon: <SiGithubactions className="w-12 h-12" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="w-12 h-12" /> },
    { name: "Nginx", icon: <SiNginx className="w-12 h-12" /> },
    { name: "Cloudflare", icon: <SiCloudflare className="w-12 h-12" /> },
    { name: "Azure", icon: <AzureIcon className="w-12 h-12" /> },
    { name: "Dependabot", icon: <SiDependabot className="w-12 h-12" /> },
  ],
  Other: [
    { name: "MySQL", icon: <SiMysql className="w-12 h-12" /> },
    { name: "SQL Server", icon: <SQLServerIcon className="w-12 h-12" /> },
    { name: "C", icon: <SiC className="w-12 h-12" /> },
    { name: "Proxmox", icon: <SiProxmox className="w-12 h-12" /> },
    { name: "TrueNAS", icon: <SiTruenas className="w-12 h-12" /> },
    { name: "TensorFlow", icon: <SiTensorflow className="w-12 h-12" /> },
    { name: "Markdown", icon: <SiMarkdown className="w-12 h-12" /> },
    { name: "LeetCode", icon: <SiLeetcode className="w-12 h-12" /> },
  ],
};

export const projects = [
  {
    title: "Home Cloud Server",
    desc: "A multi-node home server for self-hosting applications like Pi-hole, a media server, and personal cloud storage, managed with Docker and Kubernetes.",
    tags: ["Docker", "Linux", "Networking", "Kubernetes"],
    github: "https://github.com/NinePiece2/HomeCloudServer",
    live: "https://homecloudserver.romitsagu.com/",
    projectLink: "/Projects/HomeServer",
  },
  {
    title: "Artiface: Facial Art Synthesizer",
    desc: "A Generative Adversarial Network (GAN) trained on the CelebA dataset to generate unique, artificial human faces. Built with Python, TensorFlow, and Keras.",
    tags: ["Python", "TensorFlow", "Machine Learning", "GAN"],
    github: "https://github.com/Siddhant0701/ArtiFace",
    live: "https://facegen.romitsagu.com/",
    projectLink: "/Projects/Facegen",
  },
  {
    title: "Cache Controller",
    desc: "Designed and implemented a direct-mapped cache controller in VHDL. Synthesized and tested on a Spartan-3E FPGA, demonstrating hardware design principles.",
    tags: ["VHDL", "FPGA", "Hardware Design", "Digital Logic"],
    github: "https://github.com/NinePiece2/CacheController",
    live: null,
    projectLink: "/Projects/CacheController",
  },
];

export const experience = [
  {
    role: "Senior Backend Devloper",
    company: "CIBC",
    duration: "Feb 2026 - Present",
    logo: "/companyLogos/cibc.png",
    logoZoom: 1,
    description: [],
  },
  {
    role: "Co-Founder & Founding Engineer",
    company: "Three Dimensions",
    duration: "Aug 2025 - Jan 2026",
    logo: "/companyLogos/threedimensions.png",
    logoZoom: 1.2,
    description: [
      "Creating a 3D Printing Manufacturing Platform for Hobbyists and Cosplayers, delivering a seamless PaaS (Printing as a Service).",
      "Leading end to end technology operations from manufacturing workflows to customer facing systems and automations.",
    ],
  },
  {
    role: "Software Engineering Lead & Avionics Specialist",
    company: "Toronto Metropolitan Aero Design (TMAD)",
    duration: "May 2024 - Sept 2025",
    logo: "/companyLogos/tmad.png",
    logoZoom: 1,
    description: [
      "Reduced annual hosting costs by 96% by creating a React redux application deployed on GitHub Pages, with Cloudflare handling DNS, domain management and SSL encryption.",
      "Led a team of 4 developers in designing and developing a custom React application, built with maintainability in mind to enable long-term use and updates by non-technical stakeholders.",
      "Implemented CI/CD pipelines using GitHub Actions to automate testing and deployment, reducing manual deployment time by 90% and ensuring consistent code quality.",
    ],
  },
  {
    role: ".NET Developer Co-Op",
    company: "FGF Brands / Wonderbrands",
    duration: "Sept 2023 - Sept 2024",
    logo: "/companyLogos/fgfbrands.png",
    logoZoom: 1.2,
    description: [
      "Developed and supported .NET Core/Framework web applications and APIs, ensuring performance, scalability, and adaptability to business needs.",
      "Implemented CI/CD pipelines in Azure, reducing deployment times by 80% and boosting developer productivity.",
      "Built .NET Core apps with Microsoft Identity and a custom OAuth2/OpenID Connect provider for secure authentication.",
      "Automated workflows using Power Automate for data migration and Teams notifications, improving communication and efficiency, and created custom NuGet packages to streamline development processes.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Engineering, Computer Engineering Co-Op",
  school: "Toronto Metropolitan University",
  duration: "Sep 2020 - June 2025",
  logo: "/companyLogos/tmu.png",
  logoZoom: 1,
  description: [
    "Relevant Coursework: Data Structures & Algorithms, Software Design, Operating Systems, Machine Learning.",
    "Dean's Honours List: 2024-2025.",
    "Activities: Avionics Specialist - Toronto Metropolitan Aero Design (TMAD)",
  ],
};

export const testimonials = [
  {
    name: "Siddhant Mahajan",
    position: "SDE at AWS, Prev Apple",
    text: "I have had the privilege of working with Romit, and his work ethic, creativity, and problem-solving skills are outstanding. He has a rare ability to take complex engineering challenges and break them down into clear, manageable components that are both practical and innovative.",
    image: "/testimonialsPics/Sid.jpeg",
  },
  {
    name: "Alexander Samaroo",
    position: "App Consultant CIBC, Prev Ericsson",
    text: "Romit is someone dedicated to finding the most efficient solution that's easy-to-understand. Even if he has to go out of his way to make it from scratch, all by himself.",
    image: "/testimonialsPics/Alex.jpeg",
  },
];

export const blogPosts = [
  {
    title: "Demystifying Server-Side Rendering in Next.js",
    date: "Aug 20, 2025",
    excerpt:
      "A deep dive into why SSR is important and how to implement it efficiently in your Next.js applications.",
    link: "#",
  },
  {
    title: "Building a Scalable REST API with Node.js and TypeScript",
    date: "July 15, 2025",
    excerpt:
      "An end-to-end guide on creating a robust backend service with best practices for a software engineer.",
    link: "#",
  },
];

export const certificates: Certificate[] = [
  {
    title: "Docker Foundations Professional Certificate",
    company: "Docker, Inc",
    companyIcon: <SiDocker className="w-12 h-12" />,
    skills: ["Docker", "Docker Compose", "Containerization", "Kubernetes"],
    link: "https://www.linkedin.com/learning/certificates/5e823d03a0caf79afab646dcbdda8b651f51032670e9b84109f27ecf4c0afa8f",
  },
  {
    title: "Career Essentials in GitHub Professional Certificate",
    company: "GitHub",
    companyIcon: <GithubIcon className="w-12 h-12" />,
    skills: ["GitHub", "GitHub Actions", "GitHub Copilot"],
    link: "https://www.linkedin.com/learning/certificates/524a640b2ec9d380e9dc41d7725ddfe2fbb65708be7a9ac249723ea85948f7b0",
  },
  {
    title: "Getting Started with Kubernetes",
    company: "LinkedIn",
    companyIcon: <LinkedinIcon className="w-12 h-12" />,
    skills: ["Kubernetes", "Microservices"],
    link: "https://www.linkedin.com/learning/certificates/f2d6b200bab6ccc8710c55317736f850558525accffa5c8ea9d9503866d01493",
  },
];

export const projectData = {
  title: "Highlighted Project",
  projectName: "Public Library System",
  overview:
    "Most public libraries still maintain old systems that make it impossible to lend books to customers, renew books, or receive useful recommendations. The systems take a long time to process and are difficult to use and require a lot of human labor from staff.",
  technical:
    "Built with **Next.js** for its hybrid rendering, **Tailwind CSS** for rapid styling, and a **.NET Core** backend for authentication and database management. Then deployed using **Kubernetes** on my cloud server.",
  image: "/highlightedProject/publicLibSystemPic.png",
  imageAlt: "A screenshot of the Public Library System project",
  links: {
    code: "https://github.com/NinePiece2/Public-Library-System",
    demo: "https://public-library-system.romitsagu.com/",
    portfolio: null,
  },
};
