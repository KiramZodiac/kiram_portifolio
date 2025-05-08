
import React from 'react';
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projectData = [
    {
      title: "Yomovies App –",
      description: "A movie browsing app built with Next.js, featuring dynamic routing, movie previews, and responsive design.",
      image: "/yomovies.png",
      tags: ["React", "Next.js", "Supabase", "Tailwind CSS"],
      liveUrl: "https://yomovies.vercel.app/",
      githubUrl: "https://github.com/KiramZodiac/movie-site"
    },

    {
      title: "Nail Palour Saloon Website",
      description:"A modern and responsive website for a nail parlour, featuring service listings, an easy-to-use booking system, and contact details. Designed to provide a smooth user experience on all devices.",
      image: "/nails.png",
      tags: ["React","Vite", "Tailwind CSS","nodemailer"],
      liveUrl: "https://naildrip.netlify.app/",
      githubUrl: "#"
    },
    {
      title: " ChefKiram Recipe App ",
      description: "A full-stack recipe application where users can browse, add, and search recipes",
      image: "/recipes.png",
      tags: ["React", "Next.js", "Supabase", "Tailwind CSS"],
      liveUrl: "https://chefkiram.netlify.app/",
      githubUrl: "https://github.com/KiramZodiac/next-recipe-app"
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product management, cart functionality, and payment integration using React, Next.js, and Supabase.",
      image: "/ecom.png",
      tags: ["React", "Next.js", "Supabase", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, user authentication, and team workspaces.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Health & Fitness Tracker",
      description: "A mobile application for tracking fitness activities, nutrition, and health metrics with personalized insights.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      tags: ["React Native", "Node.js", "MongoDB", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Real Estate Listing Platform",
      description: "A comprehensive real estate platform with property listings, advanced search, and agent management.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "PostgreSQL", "Google Maps API"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "A dashboard for managing social media accounts with analytics, content scheduling, and performance metrics.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Redux", "Express", "D3.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
 
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-4">
          My <span className="text-gradient">Projects</span>
        </h2>
        <div className="h-1 w-20 bg-portfolio-primary mx-auto mb-12"></div>
        
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16">
          Here are some of my recent projects that showcase my skills and experience.
          Each project reflects my passion for creating intuitive and performant applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button className="bg-portfolio-primary hover:bg-portfolio-secondary text-lg px-8 py-6">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
