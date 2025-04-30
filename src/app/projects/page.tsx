'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'Recipe App',
    description: 'A full-stack recipe application built with Next.js, Supabase, and Tailwind CSS.',
    image: '/recipes.png',
    link: 'https://chefkiram.netlify.app',
  },
  {
    title: 'Movies App',
    description: 'A movie discovery platform using The Movie Database API, built with React and Tailwind CSS.',

    image: '/yomovies.png',
    link: 'https://yomovies.vercel.app/',
  },
  {
    title: 'E-commerce Site',
    description: 'A platform where users can buy, sell, and bid on products. Built with Next.js and PostgreSQL.',
    image: '/gulawano.png',
    link: 'https://your-ecommerce-app.com',
  },
  {
    title: 'Real-time Chat App',
    description: 'A web chat application using WebSockets, Node.js, and Supabase for real-time messaging.',
    image: '/chat.jpeg',
    link: 'https://your-chat-app.com',
  },
  {
    title: 'To-Do List App',
    description: 'A simple to-do list application built with Nextjs and Tailwind CSS.',
    image: '/toDo.png',
    link: 'https://akramtodo.netlify.app/',
  },




];

export default function ProjectsPage() {
  return (
    <section className="min-h-screen p-6 md:p-12 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">My Projects</h1>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <Link
                href={project.link}
                target="_blank"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
