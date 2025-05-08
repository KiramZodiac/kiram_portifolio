'use client'
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        'fixed w-full top-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/95 shadow-md backdrop-blur-sm py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="#home" className="text-2xl font-bold font-heading text-portfolio-primary">
          Akram<span className="text-portfolio-secondary">.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="px-3 py-2 rounded-md text-sm font-medium hover:text-portfolio-primary transition-colors"
            >
              {link.title}
            </Link>
          ))}
          <Link href={'/resum.pdf'}  download={true}>
          <Button className="ml-4">
            Resume
          </Button>
          
          </Link>
       
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-portfolio-dark p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white border-t mt-2 py-3">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="px-3 py-2 block rounded-md text-sm font-medium hover:bg-muted transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link href={'/resum.pdf'} download={true} className="mt-2 w-screen">
              <Button className=' w-1/2'>Resume</Button>
            </Link >
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
