
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl
}) => {
  return (
    <Card className="overflow-hidden card-hover border border-gray-200 rounded-lg">
      <div className="h-60 overflow-hidden relative group">
        <Image
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-top transition-transform group-hover:scale-105"
          width={500}
          height={500}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 right-4 flex gap-3">
            {githubUrl && (
              <Link
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-portfolio-dark hover:bg-portfolio-primary hover:text-gray-500 transition-colors"
              >
                <Github size={18} />
              </Link>
            )}
            {liveUrl && (
              <Link
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-portfolio-dark hover:bg-portfolio-primary hover:text-gray-500 transition-colors"
              >
                <ExternalLink size={18} />
              </Link>
            )}
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-gray-100 text-portfolio-primary hover:bg-gray-200">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
