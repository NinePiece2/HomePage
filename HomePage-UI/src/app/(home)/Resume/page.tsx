"use client";
import React from 'react';
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from 'next/navigation';

const Resume = () => {
  const pdfUrl = 'https://cdn.romitsagu.com/Files/Resume/Romit%20Sagu%20Resume.pdf';
  const router = useRouter();

  return (
    <div className="min-h-[92vh] bg-[#151515] flex items-center justify-center p-4 font-sans">
        <nav className="absolute top-8 left-6 md:left-12 ">
          <motion.button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-gray-400 hover:text-emerald-500 transition-colors cursor-pointer"
            aria-label="Go back to the previous page"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft size={20} />
            <span className="hidden md:inline">Home</span>
          </motion.button>
        </nav>
      <style>
        {`
          body {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>
      <div className="w-full max-w-6xl bg-[#111111] p-8 rounded-2xl shadow-lg text-white">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mb-6 text-center">
          Romit Sagu Resume
        </h1>
        
        <div className="w-full  bg-[#111111] rounded-lg overflow-hidden">
          <iframe
            src={pdfUrl}
            title="PDF Document"
            className="w-full h-[70vh] rounded-lg"
            style={{ border: 'none' }}
          >
            <p className="p-4 text-center text-gray-400">
              Your browser does not support embedded PDFs. You can download the file to view it:
              <a 
                href={pdfUrl} 
                className="text-emerald-400 hover:underline ml-2" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Download PDF
              </a>
            </p>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Resume;
