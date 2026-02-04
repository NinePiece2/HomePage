"use client";
import { useState, useRef, useEffect } from "react";
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
  const projectsDropdownRef = useRef<HTMLDivElement>(null);

  const isProjectsActive = pathname.startsWith("/Projects");

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        projectsDropdownRef.current &&
        !projectsDropdownRef.current.contains(event.target as Node)
      ) {
        setIsProjectsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const projectLinks = [
    { name: "Overview", link: "/Projects" },
    { name: "Home Cloud Server", link: "/Projects/HomeServer" },
    { name: "Artiface FaceGen", link: "/Projects/Facegen" },
    { name: "CDN", link: "/Projects/CDN" },
    { name: "Cache Controller", link: "/Projects/CacheController" },
    { name: "VGA Controller", link: "/Projects/VGAController" },
    { name: "LanCache UI", link: "/Projects/LanCacheUI" },
    {
      name: "MRI Brain Tumor Detection",
      link: "/Projects/MRIBrainTumorDetection",
    },
    {
      name: "Smart Traffic Control System",
      link: "/Projects/SmartTrafficControlSystem",
    },
  ];

  return (
    <div>
      <header className="fixed w-full z-50 bg-[#151515]/80 backdrop-blur-md top-0">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-12">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-400 bg-clip-text text-transparent cursor-pointer"
          >
            Romit Sagu
          </Link>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="cursor-pointer transition-colors text-gray-400 hover:text-emerald-400"
            >
              Home
            </Link>

            <div className="relative">
              <button
                onClick={() =>
                  setIsProjectsDropdownOpen(!isProjectsDropdownOpen)
                }
                className={`
                  flex items-center gap-1 cursor-pointer transition-colors px-3 py-1 rounded-full
                  ${
                    isProjectsActive
                      ? "bg-emerald-500/20 text-emerald-400 font-bold"
                      : "text-gray-400 hover:text-emerald-400 hover:bg-gray-700/50"
                  }
                `}
              >
                Projects
                <ChevronDown
                  size={16}
                  className={`transform transition-transform ${isProjectsDropdownOpen ? "rotate-180" : "rotate-0"}`}
                />
              </button>

              {isProjectsDropdownOpen && (
                <motion.div
                  ref={projectsDropdownRef}
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
                          ${
                            isActive
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
            <Link
              href="/Contact"
              className="cursor-pointer transition-colors text-gray-400 hover:text-emerald-400"
            >
              Contact
            </Link>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/NinePiece2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <GithubIcon className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/romit-sagu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
            </div>
          </nav>
          {/* Mobile Nav */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsNavOpen(true)}
              className="p-2 text-gray-400"
            >
              <MenuIcon size={24} />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isNavOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsNavOpen(false)}
            />

            {/* Nav Drawer */}
            <motion.div
              className="fixed right-0 top-0 bottom-0 z-[100] w-full max-w-sm bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] shadow-2xl md:hidden overflow-y-auto"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Header */}
              <div className="sticky top-0 z-10 flex justify-between items-center p-6 border-b border-gray-800/50 bg-gradient-to-b from-[#1a1a1a] to-transparent">
                <Link
                  href="/"
                  onClick={() => setIsNavOpen(false)}
                  className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-400 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity"
                >
                  Romit Sagu
                </Link>
                <motion.button
                  onClick={() => setIsNavOpen(false)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <nav className="px-6 py-8">
                <motion.ul
                  className="flex flex-col space-y-2"
                  initial="hidden"
                  animate="visible"
                >
                  {/* Home Link */}
                  <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0, duration: 0.3 }}
                  >
                    <Link
                      href="/"
                      onClick={() => setIsNavOpen(false)}
                      className="block px-4 py-3 text-lg font-semibold rounded-lg transition-all duration-200 cursor-pointer text-gray-300 hover:text-white hover:bg-emerald-500/10"
                    >
                      Home
                    </Link>
                  </motion.li>

                  {/* Projects Link */}
                  <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05, duration: 0.3 }}
                    className="relative group"
                  >
                    <Link
                      href="/Projects"
                      onClick={() => setIsNavOpen(false)}
                      className={`block px-4 py-3 text-lg font-semibold rounded-lg transition-all duration-200 cursor-pointer relative group ${
                        isProjectsActive
                          ? "text-emerald-400"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      <span className="relative z-10">Projects</span>
                      {isProjectsActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                          layoutId="activeIndicator"
                          transition={{ type: "spring", bounce: 0.2 }}
                        />
                      )}
                      <div className="absolute inset-0 bg-emerald-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10" />
                    </Link>
                  </motion.li>

                  {/* Project Subitems */}
                  <motion.div className="pl-2 space-y-1">
                    {projectLinks.slice(1).map((project, index) => {
                      const isActive = pathname === project.link;
                      return (
                        <motion.div
                          key={project.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.1 + index * 0.03,
                            duration: 0.3,
                          }}
                        >
                          <Link
                            href={project.link}
                            onClick={() => setIsNavOpen(false)}
                            className={`block px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                              isActive
                                ? "text-emerald-400 bg-emerald-500/10"
                                : "text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/5"
                            }`}
                          >
                            {project.name}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </motion.div>

                  {/* Contact Link */}
                  <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.3 }}
                    className="pt-4"
                  >
                    <Link
                      href="/Contact"
                      onClick={() => setIsNavOpen(false)}
                      className="block px-4 py-3 text-lg font-semibold rounded-lg transition-all duration-200 cursor-pointer text-gray-300 hover:text-white hover:bg-emerald-500/10"
                    >
                      Contact
                    </Link>
                  </motion.li>
                </motion.ul>
              </nav>

              {/* Divider */}
              <div className="mx-6 h-px bg-gradient-to-r from-gray-800/0 via-gray-800 to-gray-800/0" />

              {/* Social Links */}
              <motion.div
                className="flex justify-center items-center space-x-8 p-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <motion.a
                  href="https://github.com/NinePiece2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-gray-800/50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GithubIcon className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/romit-sagu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-gray-800/50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <LinkedinIcon className="w-6 h-6" />
                </motion.a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <main className="pt-13">{children}</main>
      <footer className="py-8 text-center text-gray-500 dark:text-gray-500 bg-[#111111]">
        <p>
          &copy; {new Date().getFullYear()} Romit Sagu. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
