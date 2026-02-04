"use client";

import { toPng } from "html-to-image";
import { useRef } from "react";

export default function RSPage() {
  const ref = useRef(null);

  const handleDownloadImage = () => {
    if (ref.current === null) {
      return;
    }
    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "rs-logo.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-transparent">
      <div ref={ref}>
        <h1 className="text-9xl sm:text-[15rem] md:text-[20rem] font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-300 bg-clip-text text-transparent">
            RS
          </span>
        </h1>
      </div>
      <button
        onClick={handleDownloadImage}
        className="mt-8 px-6 py-3 border border-gray-700 rounded-full text-white hover:border-emerald-500 transition-all"
      >
        Download as PNG
      </button>
    </div>
  );
}
