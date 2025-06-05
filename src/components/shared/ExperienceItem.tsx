import Image from 'next/image';
import type { Experience } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CalendarDays, Briefcase } from 'lucide-react';

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
      <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-4">
        {experience.logoUrl && (
            <Image
              src={experience.logoUrl}
              alt={`${experience.companyName} logo`}
              width={60}
              height={60}
              className="rounded-md object-contain border p-1"
              data-ai-hint={experience.logoHint || 'company logo'}
            />
        )}
        <div className="flex-1">
          <CardTitle className="text-xl font-headline">{experience.jobTitle}</CardTitle>
          <CardDescription className="text-md text-primary">{experience.companyName}</CardDescription>
          <div className="text-sm text-muted-foreground mt-1 flex items-center">
            <CalendarDays className="mr-2 h-4 w-4" />
            {experience.startDate} - {experience.endDate}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          {experience.summary.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}