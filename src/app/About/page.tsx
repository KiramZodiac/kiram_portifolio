'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Follow from '../Follow';

function AboutPage() {
  return (
    <div className="min-h-screen px-6 md:px-20 py-16 bg-gradient-to-b from-white to-gray-100">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12"
      >
        About Me
      </motion.h1>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden shadow-xl w-80 h-80 md:w-[400px] md:h-[400px]"
        >
          <Image
            src="/ki3.jpeg"
            alt="Akram Mageye"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left max-w-2xl"
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Hello! I{"'"}m <span className="font-bold text-blue-600">Akram Mageye</span>, a passionate software developer with a love for building beautiful, functional, and efficient digital products.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            With strong experience in <span className="font-semibold text-blue-500">web & mobile development</span>, I specialize in React, Next.js, Node.js, Supabase, and modern tools. My focus is on solving real-world problems with clean, scalable code and continuous learning.
          </p>
        </motion.div>
      </div>

      {/* Follow Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-16 text-center"
      >
        <Follow />
      </motion.div>
    </div>
  );
}

export default AboutPage;
