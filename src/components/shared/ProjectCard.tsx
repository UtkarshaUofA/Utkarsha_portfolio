import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, CalendarDays } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="aspect-video relative w-full mb-4 rounded-t-md overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={project.imageHint}
          />
        </div>
        <CardTitle className="text-xl font-headline">{project.title}</CardTitle>
         <div className="flex items-center text-xs text-muted-foreground mt-1">
            <CalendarDays className="mr-1.5 h-3.5 w-3.5" />
            {project.date}
          </div>
        <CardDescription className="text-sm h-20 overflow-hidden text-ellipsis">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-0">
        {project.liveDemoUrl && (
          <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
            <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        )}
        {project.repoUrl && (
          <Button asChild variant="default" size="sm" className="w-full sm:w-auto">
            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> View Code
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}