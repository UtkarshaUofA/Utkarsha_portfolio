import { Container } from '@/components/layout/Container';
import { PageTitle } from '@/components/shared/PageTitle';
import { BlogPostCard } from '@/components/shared/BlogPostCard';
import { blogPosts } from '@/data/mock';
import { Newspaper } from 'lucide-react';

export default function BlogPage() {
  return (
    <Container>
      <PageTitle 
        title="My Blog" 
        subtitle="Thoughts on technology, software development, and personal growth."
        icon={<Newspaper size={48} strokeWidth={1.5}/>}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </Container>
  );
}