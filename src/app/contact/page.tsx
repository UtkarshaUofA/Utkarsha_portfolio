import { Container } from '@/components/layout/Container';
import { PageTitle } from '@/components/shared/PageTitle';
import { ContactForm } from '@/components/forms/ContactForm';
import { Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <Container>
      <PageTitle 
        title="Contact Me" 
        subtitle="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions."
        icon={<Mail size={48} strokeWidth={1.5} />}
      />
      <ContactForm />
    </Container>
  );
}