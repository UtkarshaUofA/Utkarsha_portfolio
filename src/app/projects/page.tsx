import { Container } from '@/components/layout/Container';
import { PageTitle } from '@/components/shared/PageTitle';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { projects } from '@/data/mock';
import { FolderKanban } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <Container>
      <PageTitle 
        title="My Projects" 
        subtitle="A selection of projects I've worked on, showcasing my skills and passion for development."
        icon={<FolderKanban size={48} strokeWidth={1.5} />}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Container>
  );
}