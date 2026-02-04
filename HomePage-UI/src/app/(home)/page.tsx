"use client";

import { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";
import dynamic from "next/dynamic";

// Critical components - load immediately
import HeroSection from "@/components/Home/HeroSection";
import Navbar from "@/components/Home/Navbar";

// Secondary components - lazy load with ssr: false for better TBT
const MobileNav = dynamic(() => import("@/components/Home/MobileNav"), {
  ssr: false,
  loading: () => null,
});

// Heavy animation components - lazy load
const AboutSection = dynamic(() => import("@/components/Home/AboutSection"), {
  ssr: true,
});
const SkillsSection = dynamic(() => import("@/components/Home/SkillsSection"), {
  ssr: true,
});
const ExperienceSection = dynamic(
  () => import("@/components/Home/ExperienceSection"),
  { ssr: true },
);
const CertificatesSection = dynamic(
  () => import("@/components/Home/CertificatesSection"),
  { ssr: true },
);
const ProjectsSection = dynamic(
  () => import("@/components/Home/ProjectsSection"),
  { ssr: true },
);
const TestimonialsSection = dynamic(
  () => import("@/components/Home/TestimonialsSection"),
  { ssr: true },
);
const SignatureProjectSection = dynamic(
  () => import("@/components/Home/SignatureProjectSection"),
  { ssr: true },
);
const ContactSection = dynamic(
  () => import("@/components/Home/ContactSection"),
  { ssr: true },
);
const LocationSection = dynamic(
  () => import("@/components/Home/LocationSection"),
  { ssr: true },
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
    // Debounce observer to prevent excessive updates
    let timeoutId: NodeJS.Timeout;
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
              setActiveSection(entry.target.id);
            }, 50);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.5 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => {
      clearTimeout(timeoutId);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <main className="w-full min-h-screen bg-[#151515] text-gray-200 font-sans relative transition-colors duration-500 overflow-x-hidden">
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
          aria-label="Open navigation menu"
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
        <SignatureProjectSection />
        <ContactSection />
        <LocationSection />
      </main>
    </>
  );
}
