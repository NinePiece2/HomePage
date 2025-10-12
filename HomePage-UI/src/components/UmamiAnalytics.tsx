"use client";

import Script from "next/script";

interface UmamiAnalyticsProps {
  websiteId?: string;
  src?: string;
}

export default function UmamiAnalytics({
  websiteId = "6ece8859-1100-434a-8b17-a7183239ac63",
  src = "https://analytics.romitsagu.com/script.js",
}: UmamiAnalyticsProps) {
  if (!src || !websiteId) return null;

  return (
    <Script
      async
      defer
      src={src}
      data-website-id={websiteId}
    />
  );
}