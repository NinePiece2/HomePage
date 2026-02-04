"use client";

import { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";
import dynamic from "next/dynamic";

// Import all the new components
const Navbar = dynamic(() => import("@/components/Home/Navbar"));
const MobileNav = dynamic(() => import("@/components/Home/MobileNav"));
const HeroSection = dynamic(() => import("@/components/Home/HeroSection"));
const AboutSection = dynamic(() => import("@/components/Home/AboutSection"));
const SkillsSection = dynamic(() => import("@/components/Home/SkillsSection"));
const ExperienceSection = dynamic(
  () => import("@/components/Home/ExperienceSection"),
);
const CertificatesSection = dynamic(
  () => import("@/components/Home/CertificatesSection"),
);
const ProjectsSection = dynamic(
  () => import("@/components/Home/ProjectsSection"),
);
const TestimonialsSection = dynamic(
  () => import("@/components/Home/TestimonialsSection"),
);
// const BlogSection = dynamic(() => import("@/components/Home/BlogSection"));
const SignatureProjectSection = dynamic(
  () => import("@/components/Home/SignatureProjectSection"),
);
const ContactSection = dynamic(
  () => import("@/components/Home/ContactSection"),
);
const LocationSection = dynamic(
  () => import("@/components/Home/LocationSection"),
);

const navLinks = [
  { name: "About", to: "about", id: "about" },
  { name: "Skills", to: "skills", id: "skills" },
  { name: "Experience", to: "experience", id: "experience" },
  { name: "Certificates", to: "certificates", id: "certificates" },
  { name: "Projects", to: "projects", id: "projects" },
  { name: "Testimonials", to: "testimonials", id: "testimonials" },
  // { name: "Blog", to: "blog", id: "blog" },
  { name: "Contact", to: "contact", id: "contact" },
];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.7 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <>
      <main className="min-h-screen bg-[#151515] text-gray-200 font-sans relative transition-colors duration-500">
        <Navbar activeSection={activeSection} navLinks={navLinks} />
        <MobileNav
          isNavOpen={isNavOpen}
          setIsNavOpen={setIsNavOpen}
          activeSection={activeSection}
          navLinks={navLinks}
        />
        <button
          onClick={() => setIsNavOpen(true)}
          className="fixed top-4 right-6 z-50 p-2 text-gray-400 md:hidden"
        >
          <MenuIcon size={24} />
        </button>

        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <CertificatesSection />
        <ProjectsSection />
        <TestimonialsSection />
        {/* <BlogSection /> */}
        <SignatureProjectSection />
        <ContactSection />
        <LocationSection />
      </main>
    </>
  );
}
