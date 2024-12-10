import React from "react";
import Image from "next/image";
import Follow from "../Follow";

function AboutPage() {
  return (
    <div className="flex flex-col justify-center p-10 bg-gradient-to-b from-white to-gray-100 min-h-screen">
      {/* Heading */}
      <div className="text-center mb-10 max-sm:pt-10">
        <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Image Section */}
        <div className="rounded-lg overflow-hidden shadow-lg max-w-md">
          <Image
            alt="Akram Mageye"
            src="/ki3.jpeg"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="max-w-2xl text-center md:text-left">
          <p className="text-gray-700 text-lg leading-relaxed">
            Hello! I{"'"}m{" "}
            <span className="font-bold text-blue-600">Akram Mageye</span>, a
            passionate and dedicated software developer with a knack for
            creating innovative and efficient solutions. With a solid foundation
            in{" "}
            <span className="font-semibold text-blue-500">
              various programming languages
            </span>
            , I specialize in web development, mobile app development, backend
            development, and more.
          </p>
          <p className="mt-5 text-gray-700 text-lg leading-relaxed">
            My journey in software development began three years ago, and since
            then, I{"'"}ve been committed to honing my skills and staying
            updated with the latest industry trends. I strive to bring value to
            every project I undertake and look forward to contributing to
            meaningful software solutions.
          </p>
        </div>
      </div>

      {/* Follow Section */}
      <div className="mt-10 max-sm:mt-0">
        <Follow />
      </div>
    </div>
  );
}

export default AboutPage;
