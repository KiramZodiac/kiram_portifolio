
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-lg md:text-xl font-medium text-portfolio-secondary mb-2">
                {`Hello, I'm  `}
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4">
                Akram Mageye
              </h1>
              <div className="h-1 w-20 bg-portfolio-primary mb-6"></div>
              <h3 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
                Software Developer
              </h3>
              <p className="text-lg text-gray-600 max-w-xl">
                With 4+ years of experience building exceptional web and mobile applications
                that combine elegant interfaces with powerful functionality.
              </p>
            </div>
            
            <div className="flex  gap-4">
            <Link href={'#projects'}>     <Button className=" hover:bg-portfolio-secondary text-lg px-6 py-6 cursor-pointer">
             View Projects
              </Button></Link>
              <Link href={'#contact'}>
              <Button variant="outline" className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10 text-lg px-6 py-6">
                Contact Me
              </Button>
              </Link>
             
            </div>
          </div>
          
          <div className="relative hidden lg:flex justify-center animate-fade-in">
            
            <div className="relative w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-portfolio-primary to-portfolio-secondary p-1">
              <div className="w-full h-full rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                
                <Image
                  src="/pic.JPG" 
                  alt="Akram Mageye" 
                  className="w-full h-full object-cover rounded-full"
                  width={500}
                  height={500}
                />

              </div>
            </div>
            
            {/* Tech circles */}
            <div className="absolute -top-5 -right-5 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
              <span className="text-2xl">⚛️</span> {/* React */}
            </div>
            <div className="absolute bottom-10 -right-10 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
              <span className="text-2xl">🚀</span> {/* Next.js */}
            </div>
            <div className="absolute top-10 -left-10 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
              <span className="text-2xl">💻</span> {/* Frontend */}
            </div>
            <div className="absolute -bottom-5 left-10 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
              <span className="text-2xl">🔥</span> {/* Firebase */}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-portfolio-primary">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
