import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CalendarDays, Clock } from 'lucide-react';

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
       <Link href={post.url} target={post.url.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="block group">
        <div className="aspect-video relative w-full rounded-t-md overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={post.imageHint}
          />
        </div>
      </Link>
      <CardHeader>
        <CardTitle className="text-xl font-headline">
          <Link href={post.url} target={post.url.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </CardTitle>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mt-1">
          <div className="flex items-center">
            <CalendarDays className="mr-1.5 h-3.5 w-3.5" />
            {post.date}
          </div>
          {post.author && (
            <div className="flex items-center">
              By {post.author}
            </div>
          )}
          {post.readingTime && (
             <div className="flex items-center">
                <Clock className="mr-1.5 h-3.5 w-3.5" />
                {post.readingTime}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm h-20 overflow-hidden text-ellipsis">{post.excerpt}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="p-0 h-auto text-primary hover:text-accent">
          <Link href={post.url} target={post.url.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}