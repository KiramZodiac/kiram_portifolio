'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Intro() {


  return (
    <div className=" flex flex-col items-center justify-center ">
        <div className="text-center mb-10 max-sm:pt-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Hey,</h1>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          I{"'"}m <span className="text-blue-500">Akram Mageye.</span>
        </h1>
        <h2 className="text-2xl text-gray-700">A Software Developer</h2>
      </div>

      <div className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-lg mb-8 max-sm:items-center">
        <Image
          src="/akram.jpg"
          alt="kiram"
          width={300}
          height={300}
         className="w-full h-full object-cover"
        />
      </div>
      
      <Button  className=" bg-blue-500 mb-10 mt-10 transition"><Link href={'tel:+256751214095'}>Connect</Link></Button>

    </div>
  );
}

export default Intro;
