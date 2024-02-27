'use client'
import Image from "next/image";
import { Canvas } from 'react-three-fiber';
import { Suspense } from 'react';
import Model from './components/Model';
import { TypewriterEffectSmooth } from "./components/ui/type-writer-effect"; 
import { WavyBackground } from "./components/ui/wavy-background";
import { EvervaultCard } from "./components/ui/ever-vault-card"; 

export default function Home() {
  const words = [
    { text: "Hello", className: "text-red-500" },
    { text: "World", className: "text-green-500" },
  ];

  return (<>
    <div className="relative">
      
      <WavyBackground/>
      <div className="absolute top-0 left-0 w-1/2 h-80 md:h-screen z-10">
        <Canvas className="absolute inset-0">
          <Suspense fallback={null}>
            <ambientLight intensity={15} />
            <Model />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-80 md:h-screen z-10 flex items-center justify-center">
        <div className="text-center">
          <TypewriterEffectSmooth
            words={words}
            className="text-lg"
            cursorClassName="bg-gray-800"
          />
        </div>
      </div>
     
      <div className="h-screen bg-black">
        <div className=" h-fit w-fit ">
        <EvervaultCard/>
        <EvervaultCard/>
        </div>
        
      </div>
    </div>
    </>
  );
}