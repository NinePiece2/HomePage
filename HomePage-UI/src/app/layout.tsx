import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import UmamiAnalytics from "@/components/UmamiAnalytics";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap", // Prevent font swapping delay
  preload: true,
});

export const metadata: Metadata = {
  title: "Romit Sagu | Software Engineering",
  description:
    "Portfolio of Romit Sagu, a Computer Engineering graduate specializing in full-stack development, cloud, and machine learning.",
  keywords:
    "Romit Sagu, Software Engineer, Portfolio, Next.js, React, Web Development, Computer Engineering, .NET, Toronto, Brampton, Vancouver",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <UmamiAnalytics />
      </head>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
