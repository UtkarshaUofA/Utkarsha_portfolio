import { Container } from '@/components/layout/Container';
import { PageTitle } from '@/components/shared/PageTitle';
import { ResumeFeedbackForm } from '@/components/forms/ResumeFeedbackForm';
import { Bot } from 'lucide-react';

export default function ResumeFeedbackPage() {
  return (
    <Container>
      <PageTitle 
        title="AI Resume Reviewer" 
        subtitle="Get instant, AI-powered feedback to improve your resume and land your dream job."
        icon={<Bot size={48} strokeWidth={1.5}/>}
      />
      <ResumeFeedbackForm />
    </Container>
  );
}