import { Container } from '@/components/layout/Container';
import { PageTitle } from '@/components/shared/PageTitle';
import { ExperienceItem } from '@/components/shared/ExperienceItem';
import { experiences } from '@/data/mock';
import { Briefcase } from 'lucide-react';

export default function ExperiencePage() {
  return (
    <Container>
      <PageTitle 
        title="Work Experience" 
        subtitle="My professional journey and key contributions in various roles."
        icon={<Briefcase size={48} strokeWidth={1.5}/>}
      />
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp) => (
          <ExperienceItem key={exp.id} experience={exp} />
        ))}
      </div>
    </Container>
  );
}