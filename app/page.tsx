'use client'
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import { TypewriterEffectSmooth } from "./components/ui/type-writer-effect"; 
import { WavyBackground } from "./components/ui/wavy-background";
import { EvervaultCard } from "./components/ui/ever-vault-card";
import { FooterWithSocialLinks } from "./components/ui/footer";

export default function Home() {
  const words = [
    { text: "Hello", className: "text-red-500" },
    { text: "World", className: "text-green-500" },
  ];

  const numbers = Array.from({ length: 20 }, (_, index) => index + 1);

  return (<>
    <div className="relative w-screen h-screen overflow-hidden bg-[#0d112b]">
    <div>
      <Spline
        className="absolute inset-0 w-full h-full"
        scene="https://prod.spline.design/k99HVzraHEeIFQii/scene.splinecode"
      />
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

     
      <div className="h-screen bg-[#0d112b]">
        <div className="grid grid-cols-5 gap-4 bg-[#0d112b]">
        {numbers.map((number) => (
        <EvervaultCard key={number} text={number.toString()} />
      ))}
      
      <div className=" w-lvw"> 
          <FooterWithSocialLinks/>
        </div>    
        </div>
              
      </div>
        
   </div>

    
    </>
  );
}
