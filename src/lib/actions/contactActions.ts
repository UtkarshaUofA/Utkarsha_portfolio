
"use server";

import { z } from 'zod';
import fs from 'fs/promises';
import path from 'path';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data",
      fields: formData as Record<string, string>,
      issues: parsed.error.issues.map((issue) => issue.message),
      success: false,
    };
  }

  // Log to console
  console.log("Contact form submitted:");
  console.log("Name:", parsed.data.name);
  console.log("Email:", parsed.data.email);
  console.log("Message:", parsed.data.message);

  // Save to a text file in the public folder
  const submissionText = `Timestamp: ${new Date().toISOString()}\nName: ${parsed.data.name}\nEmail: ${parsed.data.email}\nMessage: ${parsed.data.message}\n--------------------------\n\n`;
  const filePath = path.join(process.cwd(), 'public', 'contact_submissions.txt');

  try {
    await fs.appendFile(filePath, submissionText, 'utf8');
    console.log('Contact form submission saved to file:', filePath);
  } catch (error) {
    console.error('Failed to save contact form submission to file:', error);
    // Optionally, you could modify the response to the user if file saving is critical.
    // For now, we'll still return a success message to the user.
    // return {
    //   message: "Your message was received, but there was an issue saving it. Please contact support.",
    //   success: false, 
    // };
  }

  return {
    message: "Thank you for your message! I'll get back to you soon.",
    success: true,
  };
}
