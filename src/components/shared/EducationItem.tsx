
import Image from 'next/image';
import type { Education } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CalendarDays } from 'lucide-react';

interface EducationItemProps {
  education: Education;
}

export function EducationItem({ education }: EducationItemProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
      <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-4">
        {education.logoUrl && (
            <Image
              src={education.logoUrl}
              alt={`${education.institution} logo`}
              width={60}
              height={60}
              className="rounded-md object-contain border p-1"
              data-ai-hint={education.logoHint || 'university logo'}
            />
        )}
        <div className="flex-1">
          <CardTitle className="text-xl font-headline">{education.institution}</CardTitle>
          <CardDescription className="text-md text-primary">{education.degree}</CardDescription>
          <div className="text-sm text-muted-foreground mt-1 flex items-center">
            <CalendarDays className="mr-2 h-4 w-4" />
            Graduated: {education.graduationDate}
          </div>
        </div>
      </CardHeader>
      {education.details && education.details.length > 0 && (
        <CardContent>
          <ul className="list-disc list-outside space-y-1 text-muted-foreground text-sm pl-5">
            {education.details.map((detail, index) => {
              const isSpecialHeader =
                detail.startsWith('Activities and societies:') ||
                detail.startsWith('Coursework:') ||
                detail.startsWith('Key Highlights:') ||
                detail.startsWith('Skills:');

              if (isSpecialHeader) {
                return (
                  <li key={index} className="font-semibold text-foreground list-none -ml-5 mt-3 mb-1">
                    {detail}
                  </li>
                );
              } else {
                return (
                  <li key={index}>
                    {detail}
                  </li>
                );
              }
            })}
          </ul>
        </CardContent>
      )}
    </Card>
  );
}

