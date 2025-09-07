import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Romit Sagu | Software Engineer",
  description: "Portfolio of Romit Sagu, a Computer Engineering student specializing in full-stack development, cloud, and machine learning.",
  keywords: "Romit Sagu, Software Engineer, Portfolio, Next.js, React, Web Development, Computer Engineering, .NET, Toronto, Brampton, Vancouver",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}