import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import UmamiAnalytics from "@/components/UmamiAnalytics";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

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
        <UmamiAnalytics />
      </head>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
