'use client';

import Link from "next/link";
import Follow from "../Follow";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

interface SkillsProps {
  title: string;
  value: number;
}

const Skills = ({ title, value }: SkillsProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="py-2">
      <div className="flex items-center justify-between space-x-4 border-b pb-2">
        <span className="text-lg font-semibold text-gray-800">{title}</span>
        <Progress value={progress || 0} className="w-3/5" />
      </div>
    </div>
  );
};

const projects = [
  {href:"https://yomovies.vercel.app/",
    label:"Movies App"
  },

  {
    href: "https://chefkiram.netlify.app",
    label: "Food Recipe App",
  },
  {
    href: "https://akramtodo.netlify.app/",
    label: "To-Do List App",
  },
 
  {
    href: "https://github.com/KiramZodiac/Calculator_App",
    label: "Calculator JS App",
  },
  {
    href: "https://github.com/zonaster/zonaster-mobile-application/tree/feature/zon-14-create-homescreen",
    label: "Zonaster Events App",
  },

  
];

function Page() {
  return (
    <div className="flex flex-col items-center  min-h-screen bg-gray-50">
      <header className="py-6 pt-20">
        <h1 className="text-4xl font-bold text-gray-900">My Skills</h1>
      </header>

      <main className="w-full max-w-3xl ">
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Skills</h2>
          <div className="space-y-4">
            <Skills title="HTML 5" value={95} />
            <Skills title="CSS 5" value={90} />

            <Skills title="TAILWIND CSS" value={90} />
            <Skills title="JAVASCRIPT" value={90} />
            <Skills title="REACT" value={90} />
            <Skills title="NEXT JS" value={90} />
            <Skills title="REACT-NATIVE" value={80} />
            <Skills title="PYTHON" value={70} />
            <Skills title="GIT & GITHUB" value={95} />
            <Skills title="OOP-PROGRAMMING" value={95} />
          </div>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Projects</h2>
          <ul className="space-y-2">
            {projects.map((project) => (
              <li
                key={project.href}
                className="text-blue-600 hover:text-blue-800 hover:underline transition"
              >
                <Link href={project.href} target="_blank">
                  {project.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 mt-4">
            And many more in development! Please feel free to reach out to discuss opportunities or share ideas.
          </p>
        </section>
      </main>

      <footer className="py-8">
        <Follow />
      </footer>
    </div>
  );
}

export default Page;
