import { useState } from "react";
import type { Mode } from "./data/site";
import About from "./component/About";
import Contact from "./component/Contact";
import Hero from "./component/Hero";
import Highlights from "./component/Highlights";
import Navbar from "./component/Navbar";
import Skills from "./component/Skills";
import Stats from "./component/Stats";
import LightRays from "./component/LightRays";
import Services from "./component/Services";

export default function App()  {
const [mode, setMode] = useState<Mode>("edit");
  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-linear-to-b from-[#080808] via-[#000000] to-[#070707]">

      {/* Background Effects */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Light Rays */}
        <div className="absolute inset-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#6adc99"
            raysSpeed={2}
            lightSpread={5}
            rayLength={10}
            followMouse={true}
            mouseInfluence={1}
            noiseAmount={0.05}
            distortion={0.1}
            className="custom-rays"
            pulsating={false}
            fadeDistance={3}
            saturation={0.8}
          />
        </div>

        {/* Floating Purple Glow */}
        <div className="animate-float absolute -left-24 top-20 h-96 w-96 rounded-full bg-[#5b3df5]/20 blur-3xl" />

        {/* Floating Blue Glow */}
        <div className="animate-float-slow absolute -right-24 top-1/3 h-28rem w-28rem rounded-full bg-[#12b5ff]/15 blur-3xl" />

        {/* Bottom Purple Glow */}
        <div className="animate-float absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-[#7c3aed]/20 blur-3xl" />
      </div>

      {/* Main Website Content */}
      <div className="relative z-10">
        <Navbar onSelectMode={setMode} />

        <main>
          <Hero />
          <Highlights />
          <Services mode={mode} onModeChange={setMode}/>
          <About />
          <Stats />
          <Skills />
          <Contact />
        </main>
      </div>

    </div>
  );
}





