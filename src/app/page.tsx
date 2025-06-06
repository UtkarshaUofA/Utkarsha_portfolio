
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { PageTitle } from '@/components/shared/PageTitle';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { skills, education } from '@/data/mock';
import Link from 'next/link';
import { Download, ArrowRight, GraduationCap, Brain } from 'lucide-react';
import { EducationItem } from '@/components/shared/EducationItem';

export default function AboutMePage() {
  return (
    <Container>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="md:col-span-1 flex justify-center">
          <Image
            src="/new.jpeg"
            alt="Profile Picture of Utkarsha Patil"
            width={300}
            height={300}
            className="rounded-full shadow-lg object-cover aspect-square"
            data-ai-hint="profile photo"
          />
        </div>
        <div className="md:col-span-2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">Hi, I'm Utkarsha Patil</h1>
          <p className="text-xl text-primary font-semibold mb-4">Data Science Professional</p>
          <p className="text-lg text-muted-foreground mb-6">
            Data Science professional with 3+ years of experience in Python, SQL, and Tableau, specializing in data analysis, visualization, and predictive modeling. Earned a Master’s in Data Science from the University of Arizona (May 2025), with hands-on experience in applying analytical techniques to real-world problems. Skilled in collaborating with cross-functional teams across industries such as healthcare and banking to uncover trends, generate insights, and support data-driven decision-making. Proven ability to translate complex data into strategic solutions that drive business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/Utkarsha Patil Data Science.pdf" target="_blank" download>
                Download Resume <Download className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-8 lg:gap-12">
        <section className="md:col-span-1">
          <PageTitle title="Education" icon={<GraduationCap size={36} strokeWidth={1.5}/>} className="mb-6 md:mb-8" />
          <div className="space-y-6">
            {education.map((edu) => (
              <EducationItem key={edu.id} education={edu} />
            ))}
          </div>
        </section>

        <section className="md:col-span-2">
          <PageTitle title="Skills" icon={<Brain size={36} strokeWidth={1.5}/>} className="mb-6 md:mb-8" />
          <Card className="shadow-lg h-full">
            <CardContent className="px-4 pt-4 pb-2">
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div key={skill.id} className="flex flex-col items-center text-center p-2 bg-card hover:shadow-md transition-shadow rounded-lg border">
                    {skill.icon && <skill.icon className="h-6 w-6 mb-2 text-primary" />}
                    <p className="font-semibold text-sm mb-1">{skill.name}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </Container>
  );
}
