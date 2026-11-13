"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ExternalLink, GitPullRequest } from "lucide-react";
import Link from "next/link";
import { OssContribution } from "@/types/types";

export default function ContributionsPage() {
  const [contributions, setContributions] = useState<OssContribution[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/proxy/Contributions/TableData")
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        return response.json();
      })
      .then(setContributions)
      .catch((fetchError) => {
        console.error("Failed to fetch contributions:", fetchError);
        setError("Could not load contribution data.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-[#151515] px-6 py-24 text-gray-200">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-emerald-400"
        >
          <ArrowLeft size={18} /> Back home
        </Link>
        <div className="mb-12">
          <h1 className="mb-3 flex items-center gap-3 text-4xl font-bold text-emerald-400">
            <GitPullRequest size={34} />
            Open Source Contributions
          </h1>
          <p className="max-w-2xl text-gray-400">
            Contributions to open source projects, including the repository,
            contribution type, technologies, and links to the relevant commit.
          </p>
        </div>

        {loading && <p className="text-gray-400">Loading contributions...</p>}
        {error && <p className="text-red-400">{error}</p>}
        {!loading && !error && contributions.length === 0 && (
          <p className="rounded-2xl border border-white/10 p-8 text-center text-gray-400">
            No contributions have been added yet.
          </p>
        )}
        {!loading && !error && contributions.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contributions.map((contribution) => (
              <article
                key={contribution.id}
                className="flex flex-col rounded-2xl border border-white/10 bg-neutral-950/50 p-6 transition-colors hover:border-emerald-500"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    {contribution.contributionType}
                  </span>
                  <time className="text-xs text-gray-500" dateTime={contribution.contributedAt}>
                    {new Date(contribution.contributedAt).toLocaleDateString()}
                  </time>
                </div>
                <h2 className="mb-3 text-xl font-bold">{contribution.title}</h2>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-400">
                  {contribution.description}
                </p>
                <p className="mb-4 text-sm font-medium text-gray-300">
                  {contribution.repositoryName}
                </p>
                {contribution.technologies && (
                  <div className="mb-5 flex flex-wrap gap-2">
                    {contribution.technologies.split(",").map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-white/5 px-2 py-1 text-xs text-gray-400"
                      >
                        {technology.trim()}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex gap-4 border-t border-white/10 pt-4 text-sm">
                  <a
                    href={contribution.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-400 hover:underline"
                  >
                    Repository <ExternalLink size={14} />
                  </a>
                  {contribution.commitUrl && (
                    <a
                      href={contribution.commitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-400 hover:underline"
                    >
                      Commit <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
