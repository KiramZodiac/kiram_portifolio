
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-portfolio-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">
              Akram<span className="text-portfolio-secondary">.dev</span>
            </h2>
            <p className="mt-2 text-gray-400 max-w-md">
              Creating elegant, functional and performant web solutions for businesses and individuals.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex flex-col items-center md:items-end">
            <a href="#home" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-portfolio-primary hover:bg-portfolio-secondary transition-colors">
              <ArrowUp size={20} />
            </a>
            <p className="mt-4 text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Akram Mageye. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
