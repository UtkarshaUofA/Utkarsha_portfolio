import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { PageTitle } from '@/components/shared/PageTitle';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skills } from '@/data/mock';
import Link from 'next/link';
import { Download, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function AboutMePage() {
  return (
    <Container>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="md:col-span-1 flex justify-center">
          <Image
            src="/Profile_picture.jpeg"
            alt="Profile Picture"
            width={300}
            height={300}
            className="rounded-full shadow-lg object-cover aspect-square transform scale-125 -translate-y-4"
            data-ai-hint="profile photo"
          />
        </div>
        <div className="md:col-span-2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">Hi, I'm Your Name Here</h1>
          <p className="text-xl text-primary font-semibold mb-4">Aspiring Software Engineer</p>
          <p className="text-lg text-muted-foreground mb-6">
            I am a recent graduate (May 2025) from the University of Arizona with a passion for creating innovative and user-friendly software solutions. I'm eager to apply my skills in a challenging role and contribute to impactful projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/resume.pdf" target="_blank" download> {/* Replace with actual resume link */}
                Download Resume <Download className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <section className="mt-16 md:mt-24">
        <PageTitle title="My Skills" />
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skills.map((skill) => (
                <div key={skill.id} className="flex flex-col items-center text-center p-4 bg-card hover:shadow-md transition-shadow rounded-lg border">
                  {skill.icon && <skill.icon className="h-10 w-10 mb-3 text-primary" />}
                  <p className="font-semibold text-sm mb-1">{skill.name}</p>
                  {skill.level && <Badge variant="secondary" className="text-xs">{skill.level}</Badge>}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </Container>
  );
}
