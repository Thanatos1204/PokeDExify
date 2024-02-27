'use client'
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import { TypewriterEffectSmooth } from "./components/ui/type-writer-effect"; 
import { WavyBackground } from "./components/ui/wavy-background";
import { EvervaultCard } from "./components/ui/ever-vault-card";
import { FooterWithSocialLinks } from "./components/ui/footer";
import { div } from "three/examples/jsm/nodes/Nodes.js";

export default function Home() {
  const words = [
    { text: "Hello", className: "text-red-500" },
    { text: "World", className: "text-green-500" },
  ];

  const numbers = Array.from({ length: 20 }, (_, index) => index + 1);

  return (<div>
    <div className="relative w-screen  overflow-hidden bg-[#0d112b] flex flex-col">
      <div className="flex">
    <div>
      <Spline
        className=" inset-0 w-full h-full"
        scene="https://prod.spline.design/k99HVzraHEeIFQii/scene.splinecode"
      />
    </div>
      

    <div className="  w-1/2 h-80 md:h-screen z-10 flex items-center justify-center">
      <div className="text-center">
        <TypewriterEffectSmooth
          words={words}
          className="text-lg"
          cursorClassName="bg-gray-800"
        />
      </div>
    </div>
    </div>

     
      <div className="bg-[#0d112b]">
        <div className="grid grid-cols-5  bg-[#0d112b]">
        {numbers.map((number) => (
        <EvervaultCard key={number} text={number.toString()} />
      ))}
      </div>
      </div>
      
      <div className=""> 
          <FooterWithSocialLinks/>
        </div>    
        
              
      </div>
        


    
    </div>
  );
}
