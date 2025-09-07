"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MenuIcon, X } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);

  const pathname = usePathname();

  const projectLinks = [
    { name: "Overview", link: "/Projects" },
    { name: "Home Cloud Server", link: "/Projects/HomeServer" },
    { name: "Artiface FaceGen", link: "/Projects/Facegen" },
    { name: "CDN", link: "/Projects/CDN" },
    { name: "Cache Controller", link: "/Projects/CacheController" },
    { name: "VGA Controller", link: "/Projects/VGAController" },
    { name: "LanCache UI", link: "/Projects/LanCacheUI" },
    { name: "MRI Brain Tumor Detection", link: "/Projects/MRIBrainTumorDetection" },
    { name: "Smart Traffic Control System", link: "/Projects/SmartTrafficControlSystem" },
  ];

  return (
    <div>
      <header className="fixed w-full z-50 bg-[#151515]/80 backdrop-blur-md top-0">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-12">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-400 bg-clip-text text-transparent cursor-pointer">
            Romit Sagu
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="cursor-pointer transition-colors text-gray-400 hover:text-emerald-400">
              Home
            </Link>
            
            <div className="relative">
              <button
                onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
                className="flex items-center gap-1 cursor-pointer transition-colors text-gray-400 hover:text-emerald-400"
              >
                Projects <ChevronDown size={16} className={`transform transition-transform ${isProjectsDropdownOpen ? "rotate-180" : "rotate-0"}`} />
              </button>
              
              {isProjectsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-[#1a1a1a] rounded-md shadow-lg py-1 ring-1 ring-gray-700 focus:outline-none"
                >
                  {projectLinks.map((project) => {
                    const isActive = pathname === project.link;
                    return (
                      <Link
                        key={project.name}
                        href={project.link}
                        className={`block px-4 py-2 text-sm transition-colors
                          ${isActive 
                            ? "bg-emerald-500/20 text-emerald-400 font-bold"
                            : "text-gray-400 hover:bg-emerald-500/20 hover:text-emerald-400"
                          }`}
                        onClick={() => setIsProjectsDropdownOpen(false)}
                      >
                        {project.name}
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </div>

            <Link href="/Contact" className="cursor-pointer transition-colors text-gray-400 hover:text-emerald-400">
              Contact
            </Link>

            <div className="flex items-center space-x-4">
              <a href="https://github.com/NinePiece2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <GithubIcon className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/romit-sagu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <LinkedinIcon className="w-6 h-6" />
              </a>
            </div>
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsNavOpen(true)} className="p-2 text-gray-400">
              <MenuIcon size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-[#151515] p-6 md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-12">
              <Link href="/" onClick={() => setIsNavOpen(false)} className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-400 bg-clip-text text-transparent cursor-pointer">
                Romit Sagu
              </Link>
              <button onClick={() => setIsNavOpen(false)} className="p-2 text-gray-400">
                <X size={24} />
              </button>
            </div>
            <ul className="flex flex-col space-y-6 text-center">
              <li>
                <Link href="/" onClick={() => setIsNavOpen(false)} className="text-2xl font-semibold text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Projects" onClick={() => setIsNavOpen(false)} className="text-2xl font-semibold text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer">
                  Projects
                </Link>
              </li>
              {projectLinks.map((project) => {
                const isActive = pathname === project.link;
                return (
                  <li key={project.name}>
                    <Link
                      href={project.link}
                      onClick={() => setIsNavOpen(false)}
                      className={`text-xl font-medium transition-colors cursor-pointer ml-4
                        ${isActive
                          ? "text-emerald-400 font-bold"
                          : "text-gray-500 hover:text-emerald-400"
                        }`}
                    >
                      {project.name}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link href="/contact" onClick={() => setIsNavOpen(false)} className="text-2xl font-semibold text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer">
                  Contact
                </Link>
              </li>
              <li className="flex justify-center space-x-6 mt-8">
                <a href="https://github.com/NinePiece2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <GithubIcon className="w-8 h-8" />
                </a>
                <a href="https://linkedin.com/in/romit-sagu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <LinkedinIcon className="w-8 h-8" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-13">
        {children}
      </main>

      <footer className="py-8 text-center text-gray-500 dark:text-gray-500 bg-[#111111]">
        <p>&copy; {new Date().getFullYear()} Romit Sagu. All rights reserved.</p>
      </footer>
    </div>
  );
}