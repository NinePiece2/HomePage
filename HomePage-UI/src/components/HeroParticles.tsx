"use client";

import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Container, ISourceOptions } from "@tsparticles/engine";

let particlesEngineInitialized = false;

export const particlesOptions: ISourceOptions = {
  fullScreen: { enable: false },
  particles: {
    number: { value: 117, density: { enable: true, width: 800, height: 800 } },
    color: { value: "#1c1c1c" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: { min: 1, max: 3 } },
    links: { enable: true, distance: 150, color: "#34d399", opacity: 0.4, width: 1 },
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
  const [engineInitialized, setEngineInitialized] = useState(particlesEngineInitialized);

  useEffect(() => {
    if (!particlesEngineInitialized) {
      initParticlesEngine(async (engine) => {
        await loadFull(engine);
      }).then(() => {
        particlesEngineInitialized = true; 
        setEngineInitialized(true);
      });
    }
  }, []);

//   const particlesLoaded = async (container?: Container): Promise<void> => {
//     console.log(container);
//   };

  if (!engineInitialized) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 w-full h-full z-0"
      options={particlesOptions}
    //   particlesLoaded={particlesLoaded}
    />
  );
};

export const HeroParticles = React.memo(HeroParticlesComponent);
HeroParticles.displayName = "HeroParticles";