'use client';

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import Follow from "../Follow";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="py-2"
    >
      <div className="flex items-center justify-between space-x-4 border-b pb-2">
        <span className="text-lg font-semibold text-gray-800">{title}</span>
        <Progress value={progress || 0} className="w-3/5" />
      </div>
    </motion.div>
  );
};

function Page() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      {/* Header */}
      <header className="py-6 pt-20">
        <h1 className="text-4xl font-bold text-gray-900">My Skills</h1>
      </header>

      {/* Skills Section */}
      <main className="w-full max-w-3xl px-4 md:px-0">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white shadow-md rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Technical Skills</h2>
          <div className="space-y-4">
            <Skills title="HTML5" value={95} />
            <Skills title="CSS3" value={90} />
            <Skills title="Tailwind CSS" value={90} />
            <Skills title="JavaScript" value={90} />
            <Skills title="React" value={90} />
            <Skills title="Next.js" value={90} />
            <Skills title="React Native" value={80} />
            <Skills title="Python" value={70} />
            <Skills title="Git & GitHub" value={95} />
            <Skills title="OOP Programming" value={95} />
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="py-10">
        <Follow />
      </footer>
    </div>
  );
}

export default Page;
