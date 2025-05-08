
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-4">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <div className="h-1 w-20 bg-portfolio-primary mx-auto mb-12"></div>
        
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16">
         { `I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.`}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
               {`Feel free to reach out to me through any of the following channels. I'll get back to you as soon as possible.`}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-portfolio-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-portfolio-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:kiramzodiac@gmail.com" className="text-gray-600 hover:text-portfolio-primary">
                     kiramzodiac@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-portfolio-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-portfolio-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a href="tel:+11234567890" className="text-gray-600 hover:text-portfolio-primary">
                    +256 751-214-095
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-portfolio-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-portfolio-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-gray-600">Kampala-Uganda</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/KiramZodiac"
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-portfolio-primary hover:text-white hover:border-portfolio-primary transition-colors"
                >
                  <Github size={18} />
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/akram-mageye-78b292289/"
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-portfolio-primary hover:text-white hover:border-portfolio-primary transition-colors"
                >
                  <Linkedin size={18} />
                </Link>
                <Link 
                  href="#"
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-portfolio-primary hover:text-white hover:border-portfolio-primary transition-colors"
                >
                  <ExternalLink size={18} />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Enter your name" 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Enter subject" 
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Type your message here..." 
                    rows={6} 
                    className="w-full"
                  />
                </div>

                <Button type="submit" className="w-full hover:bg-portfolio-secondary text-white font-semibold py-2 px-4 rounded">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
