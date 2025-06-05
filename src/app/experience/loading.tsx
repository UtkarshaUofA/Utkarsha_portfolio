import { Container } from '@/components/layout/Container';
import { PageTitle } from '@/components/shared/PageTitle';
import { Skeleton } from '@/components/ui/skeleton';
import { Briefcase } from 'lucide-react';

export default function Loading() {
  return (
    <Container>
      <PageTitle 
        title="Work Experience" 
        subtitle="My professional journey and key contributions in various roles."
        icon={<Briefcase size={48} strokeWidth={1.5} />}
      />
      <div className="max-w-3xl mx-auto space-y-8">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex flex-col space-y-3 border p-6 rounded-lg">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-md" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-1/3" />
              </div>
            </div>
            <div className="space-y-2 pt-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}