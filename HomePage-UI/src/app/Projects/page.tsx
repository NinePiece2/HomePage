"use client";

import { useEffect, useState } from "react";
import { Application } from "@/types/types";
import { motion } from "framer-motion";
import { BookOpen, ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Projects() {
  const [projectsData, setProjectsData] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 12;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/proxy/Projects/TableData");
        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }
        const data: Application[] = await res.json();
        setProjectsData(data);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError("Could not load project data");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleSort = (key: string) => {
    setSortConfig((prev) => {
      if (prev?.key === key) {
        return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
      }
      return { key, direction: "asc" };
    });
    setCurrentPage(0);
  };

  const sortedData = [...projectsData].sort((a, b) => {
    if (!sortConfig) return 0;
    const key = sortConfig.key as keyof Application;
    const aValue = a[key];
    const bValue = b[key];

    if (aValue === null || aValue === undefined) return 1;
    if (bValue === null || bValue === undefined) return -1;

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortConfig.direction === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    return 0;
  });

  const startIndex = currentPage * pageSize;
  const paginatedData = sortedData.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(sortedData.length / pageSize);

  const LinkCell = ({
    value,
    text = "Link",
  }: {
    value?: string | null;
    text?: string;
  }) => {
    if (value) {
      return (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 hover:underline hover:opacity-80 transition-opacity"
        >
          {text}
        </a>
      );
    }
    return (
      <span className="text-[color:var(--color-muted-foreground)]">N/A</span>
    );
  };

  const SortHeader = ({
    label,
    sortKey,
  }: {
    label: string;
    sortKey: string;
  }) => (
    <button
      onClick={() => handleSort(sortKey)}
      className="flex items-center gap-2 hover:text-[color:var(--color-primary)] transition-colors duration-200 font-semibold text-sm uppercase tracking-wide"
    >
      {label}
      <ArrowUpDown
        size={16}
        className={`transition-all duration-200 ${
          sortConfig?.key === sortKey
            ? "text-[color:var(--color-primary)]"
            : "text-[color:var(--color-muted-foreground)]"
        }`}
      />
    </button>
  );

  if (loading) {
    return (
      <motion.div
        key="loading"
        className="min-h-screen bg-[#151515] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <p className="flex items-center gap-2 text-lg animate-pulse">
          <BookOpen size={24} className="text-emerald-500" />
          Loading projects table...
        </p>
      </motion.div>
    );
  }
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="bg-[#151515] min-h-[87vh]">
      <div className="container p-4 mx-auto">
        <div className="flex flex-col items-center justify-center min-h-[20vh] p-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="flex items-center justify-center gap-3 text-4xl font-extrabold tracking-tight text-emerald-400">
              <BookOpen size={36} className="text-emerald-500" />
              Projects
            </h1>
            <p className="mt-3 max-w-xl text-lg text-[color:var(--color-foreground)] leading-relaxed">
              Explore some of the bigger projects I’ve worked on. Each entry
              includes links to the GitHub repo, deployed app, and portfolio for
              more details.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <p className="text-sm text-[color:var(--color-muted-foreground)] mb-4 block sm:hidden text-center">
            👉 Swipe to see the rest of the table
          </p>

          <div className="overflow-x-auto rounded-4xl border border-[color:var(--color-border)] bg-[color:var(--color-card)]/5 max-w-4xl mx-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-[color:var(--color-border)] bg-[color:var(--color-card)]/20 hover:bg-[color:var(--color-card)]/30">
                  <TableHead className="text-[color:var(--color-primary)] py-2 px-4 text-center">
                    <SortHeader label="Name" sortKey="name" />
                  </TableHead>
                  <TableHead className="text-[color:var(--color-primary)] py-2 px-4 text-center">
                    GitHub
                  </TableHead>
                  <TableHead className="text-[color:var(--color-primary)] py-2 px-4 text-center">
                    App Link
                  </TableHead>
                  <TableHead className="text-[color:var(--color-primary)] py-2 px-4 text-center">
                    Portfolio
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedData.map((project, idx) => (
                  <motion.tr
                    key={idx}
                    className={`border-b border-[color:var(--color-border)]/50 transition-colors duration-150 ${
                      idx % 2 === 0 ? "bg-white/[0.02]" : ""
                    } hover:bg-[color:var(--color-primary)]/15`}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.02 }}
                  >
                    <TableCell className="text-[color:var(--color-foreground)] font-semibold py-2 px-4 text-center">
                      {project.name}
                    </TableCell>
                    <TableCell className="text-center py-2 px-4">
                      <LinkCell value={project.gitHubLink} text="GitHub" />
                    </TableCell>
                    <TableCell className="text-center py-2 px-4">
                      <LinkCell value={project.applicationLink} text="App" />
                    </TableCell>
                    <TableCell className="text-center py-2 px-4">
                      <LinkCell value={project.homePageLink} text="Portfolio" />
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-center mt-8 gap-3">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
              disabled={currentPage === 0}
              className="p-2 rounded-lg bg-[color:var(--color-primary)]/10 hover:bg-[color:var(--color-primary)]/20 disabled:bg-[color:var(--color-muted)]/20 disabled:cursor-not-allowed text-[color:var(--color-primary)] hover:opacity-80 disabled:text-[color:var(--color-muted-foreground)] transition-all duration-200 border border-[color:var(--color-primary)]/30 hover:border-[color:var(--color-primary)] disabled:border-[color:var(--color-border)]"
              aria-label="Previous page"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[color:var(--color-card)]/40 border border-[color:var(--color-border)]">
              <span className="text-sm text-[color:var(--color-muted-foreground)]">
                Page
              </span>
              <span className="font-bold text-[color:var(--color-primary)] text-lg">
                {currentPage + 1}
              </span>
              <span className="text-sm text-[color:var(--color-muted-foreground)]">
                of
              </span>
              <span className="font-bold text-[color:var(--color-primary)] text-lg">
                {totalPages}
              </span>
            </div>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
              }
              disabled={currentPage === totalPages - 1}
              className="p-2 rounded-lg bg-[color:var(--color-primary)]/10 hover:bg-[color:var(--color-primary)]/20 disabled:bg-[color:var(--color-muted)]/20 disabled:cursor-not-allowed text-[color:var(--color-primary)] hover:opacity-80 disabled:text-[color:var(--color-muted-foreground)] transition-all duration-200 border border-[color:var(--color-primary)]/30 hover:border-[color:var(--color-primary)] disabled:border-[color:var(--color-border)]"
              aria-label="Next page"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
