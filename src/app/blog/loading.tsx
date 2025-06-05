import { Container } from '@/components/layout/Container';
import { PageTitle } from '@/components/shared/PageTitle';
import { Skeleton } from '@/components/ui/skeleton';
import { Newspaper } from 'lucide-react';

export default function Loading() {
  return (
    <Container>
      <PageTitle 
        title="My Blog" 
        subtitle="Thoughts on technology, software development, and personal growth."
        icon={<Newspaper size={48} strokeWidth={1.5} />}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex flex-col space-y-3">
            <Skeleton className="h-[200px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
             <Skeleton className="h-8 w-1/3" />
          </div>
        ))}
      </div>
    </Container>
  );
}