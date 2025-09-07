"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { BookOpen, Globe, ArrowLeft } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import "../markdown-styles.css";
import { ProjectData } from "@/types/types";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
} as Variants;

export default function ProjectPage() {
  const router = useRouter();
  const pathname = usePathname();
  const projectName = useMemo(() => pathname.split("/").pop(), [pathname]);

  const [projectData, setProjectData] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjectData = useCallback(async () => {
    if (!projectName) {
      setError("Project name not found in URL.");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`/api/proxy/Projects/${projectName}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: ProjectData = await response.json();
      setProjectData(data);
      setError(null);
    } catch (err) {
      console.error("Failed to fetch project data:", err);
      setError("Failed to load project data. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, [projectName]);

  useEffect(() => {
    fetchProjectData();
  }, [fetchProjectData]);

  useEffect(() => {
    if (!projectData) return;

    const hash = window.location.hash?.substring(1);
    if (!hash) return;

    const scrollToHash = () => {
        const el = document.getElementById(hash);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });

            const yOffset = -80;
            const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });

            return true;
        }
        return false;
    };


    // try immediately
    if (scrollToHash()) return;

    // otherwise watch for DOM changes
    const observer = new MutationObserver(() => {
        if (scrollToHash()) {
        observer.disconnect();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });

    return () => observer.disconnect();
    }, [projectData]);


  const renderContent = () => {
    if (loading) {
      return (
        <motion.div
          key="loading"
          className="min-h-screen bg-[#151515] flex items-center justify-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <p className="flex items-center gap-2 text-lg animate-pulse">
            <BookOpen size={24} className="text-emerald-500" />
            Loading project details...
          </p>
        </motion.div>
      );
    }

    if (error) {
      return (
        <motion.div
          key="error"
          className="min-h-screen bg-[#151515] flex flex-col items-center justify-center text-red-400 text-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <p className="text-xl font-semibold">Error: {error}</p>
          <p className="mt-2 text-sm text-red-300">
            Could not retrieve project information.
          </p>
          <button
            onClick={() => router.back()}
            className="mt-6 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
          >
            Go Back
          </button>
        </motion.div>
      );
    }

    if (!projectData) return null;

    return (
      <motion.div
        key="project-content"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        className="relative"
      >
        <nav className="absolute top-8 left-6 md:left-12 ">
          <motion.button
            onClick={() => router.push("/Projects")}
            className="flex items-center gap-2 text-gray-400 hover:text-emerald-500 transition-colors cursor-pointer"
            aria-label="Go back to the previous page"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft size={20} />
            <span className="hidden md:inline">Overview</span>
          </motion.button>
        </nav>

        <div className="flex items-center justify-center gap-4 mb-8">
          <motion.div variants={iconVariants}>
            <BookOpen size={48} className="text-emerald-500" />
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent text-center">
            {projectData.projectName || projectName}
          </h1>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          {projectData.projectGithubLink && (
            <motion.a
              href={projectData.projectGithubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${projectData.projectName} on GitHub`}
              className="text-gray-400 hover:text-emerald-500 transition-colors flex items-center gap-2"
              whileHover={{ y: -3 }}
            >
              <GithubIcon className="w-6 h-6" />
              <span className="text-sm font-medium hidden md:inline">GitHub</span>
            </motion.a>
          )}
          {projectData.projectApplicationLink && (
            <motion.a
              href={projectData.projectApplicationLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View the live application for ${projectData.projectName}`}
              className="text-gray-400 hover:text-emerald-500 transition-colors flex items-center gap-2"
              whileHover={{ y: -3 }}
            >
              <Globe size={24} />
              <span className="text-sm font-medium hidden md:inline">Live Site</span>
            </motion.a>
          )}
        </div>

        <div className="markdown-container shadow-2xl">
          <div
            dangerouslySetInnerHTML={{
              __html: projectData.projectReadmeContent,
            }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <main className="min-h-screen bg-[#151515] text-gray-200 font-sans relative transition-colors duration-500 py-24 px-6 md:px-12">
      <section className="max-w-5xl mx-auto">
        <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
      </section>
    </main>
  );
}
