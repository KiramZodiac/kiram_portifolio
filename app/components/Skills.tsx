'use client'
import React, { useEffect, useMemo, useState } from 'react';
import { Progress } from "@/components/ui/progress";
import { Code2, FileType, Database, Code, Github, Figma, Laptop } from 'lucide-react';
import { cn } from '@/lib/utils';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});

  const frontendSkills = useMemo(()=> [
    { name: "HTML/CSS", level: 95, icon: FileType, color: "bg-orange-500" },
    { name: "JavaScript", level: 90, icon: Code, color: "bg-yellow-500" },
    { name: "React", level: 92, icon: Code2, color: "bg-blue-500" },
    { name: "Tailwind CSS", level: 88, icon: FileType, color: "bg-cyan-500" },
    { name: "Figma", level: 85, icon: Figma, color: "bg-purple-500" },
  ],[])

  const backendSkills = useMemo(()=> [
    { name: "Node.js", level: 85, icon: Code, color: "bg-green-600" },
    { name: "Next.js", level: 88, icon: Code2, color: "bg-black" },
    { name: "Supabase", level: 82, icon: Database, color: "bg-emerald-500" },
    { name: "GitHub", level: 90, icon: Github, color: "bg-gray-700" },
    { name: "App Development", level: 78, icon: Laptop, color: "bg-indigo-600" },
  ],[])



  useEffect(() => {
    // Initialize animated values to 0
    const initialValues: { [key: string]: number } = {};
    [...frontendSkills, ...backendSkills].forEach(skill => {
      initialValues[skill.name] = 0;
    });

    setAnimatedValues(initialValues);

    // Function to check if element is in viewport
    const handleScroll = () => {
      const element = document.getElementById('skills');
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
      
      if (isInView && !isVisible) {
        setIsVisible(true);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible,backendSkills,frontendSkills]);

  // Animate progress bars when visible

  useEffect(() => {
    if (!isVisible) return;
  
    const allSkills = [...frontendSkills, ...backendSkills];
    const newAnimatedValues: { [key: string]: number } = {};
  
    allSkills.forEach((skill, index) => {
      const delay = index * 100; // delay each animation
      setTimeout(() => {
        let current = 0;
        const step = () => {
          current += 1;
          newAnimatedValues[skill.name] = current;
          setAnimatedValues((prev) => ({ ...prev, [skill.name]: current }));
  
          if (current < skill.level) {
            requestAnimationFrame(step);
          }
        };
        requestAnimationFrame(step);
      }, delay);
    });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  const renderSkillList = (skills: { name: string; level: number; icon: React.ComponentType<{ size: number }>; color: string }[]) => (
    <div className="space-y-6">
      {skills.map((skill, index) => (
        <div 
          key={skill.name} 
          className={`group transition-transform duration-300 hover:-translate-y-1 ${
            isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
          }`} 
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110", skill.color)}>
                <div className="group-hover:animate-bounce">
                  <skill.icon size={18} />
                </div>
              </div>
              <span className="font-medium">{skill.name}</span>
            </div>
            <span className="text-sm text-gray-600">{animatedValues[skill.name]}%</span>
          </div>
          <Progress 
            value={animatedValues[skill.name]} 
            className="h-2 transition-all duration-300 group-hover:h-3" 
          />
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-4 animate-fade-in">
          My <span className="text-gradient">Skills</span>
        </h2>
        <div className="h-1 w-20 bg-portfolio-primary mx-auto mb-12 animate-scale-in"></div>
        
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16 animate-slide-up" style={{ animationDelay: '200ms' }}>
      {`    With 4+ years of experience in software development, I've developed expertise in a wide range of technologies and tools.
          Here are some of the key skills I bring to the table:`}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md card-hover transform transition-all duration-500 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-6 text-center">Frontend Development</h3>
            {renderSkillList(frontendSkills)}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md card-hover transform transition-all duration-500 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-6 text-center">Backend Development</h3>
            {renderSkillList(backendSkills)}
          </div>
        </div>

        <div className="mt-20 bg-white p-8 rounded-lg shadow-md max-w-5xl mx-auto transform transition-all duration-500 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-6 text-center">Other Skills & Tools</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {["TypeScript", "Redux", "Jest", "SASS", "Git", "CI/CD", "GraphQL", "MongoDB", "Firebase", "Docker", "RESTful APIs", "AWS"].map((skill, index) => (
              <div 
                key={skill} 
                className="bg-gray-50 p-4 rounded card-hover transform transition-all duration-300 hover:bg-portfolio-primary hover:text-white"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s ease ${index * 0.1}s`
                }}
              >
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
