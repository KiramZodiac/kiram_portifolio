import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="h-1 w-20 bg-portfolio-primary mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute inset-0 transform translate-x-3 translate-y-3 bg-portfolio-primary rounded-lg"></div>
                <Image
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80" 
                  alt="Akram working" 
                  className="rounded-lg relative z-10 w-full h-auto object-cover"
                  width={400}
                  height={400}
                />
              </div>
            </div>

            <div className="md:col-span-3 space-y-6">
              <h3 className="text-2xl font-semibold">Software Developer with 4+ Years Experience</h3>
              
              <p className="text-gray-700">
                {`I'm Akram, a passionate software developer specializing in building beautiful, functional, and user-centered digital experiences. 
                With over 4 years of professional experience, I've developed a strong foundation in both frontend and backend technologies.`}
              </p>
              <p className="text-gray-700">
                My approach to development combines technical expertise with creative problem-solving. 
                I enjoy transforming complex challenges into elegant solutions that provide real value to users and businesses alike.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <h4 className="font-semibold">Name:</h4>
                  <p className="text-gray-700">Akram Mageye</p>
                </div>
                <div>
                  <h4 className="font-semibold">Email:</h4>
                  <p className="text-gray-700">kiramzodiac@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold">Location:</h4>
                  <p className="text-gray-700">Kampala-Uganda</p>
                </div>
                <div>
                  <h4 className="font-semibold">Availability:</h4>
                  <p className="text-portfolio-primary font-medium">Open to opportunities</p>
                </div>
              </div>

              <div className="pt-2">
                <Button className="bg-portfolio-primary hover:bg-portfolio-secondary">
                  Download Resume
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">My Journey</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-20 h-20 rounded-full bg-portfolio-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-portfolio-primary text-2xl font-bold">4+</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Years of Experience</h4>
                  <p className="text-gray-700">Working across various projects and teams, developing robust applications from concept to deployment.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-20 h-20 rounded-full bg-portfolio-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-portfolio-primary text-2xl font-bold">20+</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Projects Completed</h4>
                  <p className="text-gray-700">Delivered successful projects ranging from simple websites to complex web applications and mobile apps.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-20 h-20 rounded-full bg-portfolio-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-portfolio-primary text-2xl font-bold">10+</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Satisfied Clients</h4>
                  <p className="text-gray-700">Worked with clients across different sectors including e-commerce, finance, education, and healthcare.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
