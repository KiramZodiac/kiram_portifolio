'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Intro() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-white"
    >
      {/* Text Content */}
      <div className="space-y-3 mb-6 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Hey,
        </h1>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          I{"'"}m <span className="text-blue-600">Akram Mageye.</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 font-medium">
          A Software Developer
        </h2>
      </div>

      {/* Profile Image */}
      <div className="w-44 h-44 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
        <Image
          src="/real.JPG"
          alt="Akram Mageye"
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Connect Button */}
      <div className="mt-10">
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white text-base px-6 py-2 rounded-full transition duration-300"
        >
          <Link href="tel:+256751214095">Connect</Link>
        </Button>
      </div>
    </motion.section>
  );
}

export default Intro;
