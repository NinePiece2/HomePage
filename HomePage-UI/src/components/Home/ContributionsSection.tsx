"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink, GitPullRequest } from "lucide-react";
import Link from "next/link";
import { OssContribution } from "@/types/types";

function ContributionCard({ contribution }: { contribution: OssContribution }) {
  return (
    <article className="flex flex-col rounded-2xl border border-white/10 bg-neutral-950/50 p-6 transition-all duration-300 hover:border-emerald-500">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            {contribution.contributionType}
          </p>
          <h3 className="text-xl font-bold">{contribution.title}</h3>
        </div>
        <GitPullRequest className="shrink-0 text-emerald-400" size={22} />
      </div>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-400">
        {contribution.description}
      </p>
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300">
          {contribution.repositoryName}
        </span>
        {contribution.technologies
          ?.split(",")
          .map((technology) => technology.trim())
          .filter(Boolean)
          .map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-400"
            >
              {technology}
            </span>
          ))}
      </div>
      <div className="mt-5 flex items-center gap-4 border-t border-white/10 pt-4 text-sm">
        <a
          href={contribution.commitUrl ?? contribution.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-gray-400 transition-colors hover:text-emerald-400"
        >
          {contribution.commitUrl ? "View commit" : "View repository"}
          <ExternalLink size={14} />
        </a>
      </div>
    </article>
  );
}

export default function ContributionsSection() {
  const [contributions, setContributions] = useState<OssContribution[]>([]);

  useEffect(() => {
    fetch("/api/proxy/Contributions/Latest?limit=3")
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        return response.json();
      })
      .then(setContributions)
      .catch((error) => console.error("Failed to fetch contributions:", error));
  }, []);

  return (
    <section id="contributions" className="bg-[#111111] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <div>
            <h2 className="mb-3 text-4xl font-bold">Open Source Contributions</h2>
            <p className="text-gray-400">
              A few of my latest contributions to open source projects.
            </p>
          </div>
          <Link
            href="/Contributions"
            className="inline-flex items-center rounded-full border border-emerald-500 px-6 py-3 font-medium text-emerald-400 transition-colors hover:bg-emerald-500 hover:text-white"
          >
            View all contributions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        {contributions.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {contributions.map((contribution) => (
              <ContributionCard key={contribution.id} contribution={contribution} />
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-white/10 p-8 text-center text-gray-400">
            Contributions will appear here soon.
          </p>
        )}
      </div>
    </section>
  );
}
