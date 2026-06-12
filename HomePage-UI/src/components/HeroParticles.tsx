"use client";

import React, { useEffect, useRef } from "react";
import { loadFull } from "tsparticles";
import { tsParticles } from "@tsparticles/engine";
import type { ISourceOptions } from "@tsparticles/engine";

let isLoadingFull = false;
let isFullLoaded = false;

export const particlesOptions: ISourceOptions = {
  fullScreen: { enable: false },
  particles: {
    number: { value: 117, density: { enable: true, width: 800, height: 800 } },
    color: { value: "#1c1c1c" },
    shape: { type: "circle" },
    opacity: { value: 0.1 },
    size: { value: { min: 1, max: 3 } },
    links: {
      enable: true,
      distance: 150,
      color: "#34d399",
      opacity: 0.4,
      width: 1,
    },
    move: { enable: true, speed: 2, outModes: { default: "out" } },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" },
      resize: { enable: true },
    },
    modes: { repulse: { distance: 90, duration: 0.4 }, push: { quantity: 4 } },
  },
  detectRetina: true,
};

const HeroParticlesComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initParticles = async () => {
      if (!containerRef.current) {
        return;
      }

      try {
        // Only load full plugins once globally
        if (!isFullLoaded && !isLoadingFull) {
          isLoadingFull = true;
          await loadFull(tsParticles);
          isFullLoaded = true;
          isLoadingFull = false;
        } else if (isLoadingFull) {
          // Wait for loadFull to complete if it's in progress
          while (isLoadingFull) {
            await new Promise(resolve => setTimeout(resolve, 10));
          }
        }
        
        await tsParticles.load({
          id: "tsparticles",
          options: particlesOptions,
        });
      } catch (error) {
        console.error("Failed to load particles:", error);
      }
    };

    initParticles();
  }, []);

  return (
    <div
      ref={containerRef}
      id="tsparticles"
      className="absolute inset-0 w-full h-full z-0"
    />
  );
};

export const HeroParticles = React.memo(HeroParticlesComponent);
HeroParticles.displayName = "HeroParticles";
