
"use server";

import { z } from 'zod';
// fs and path imports removed as they are no longer needed for local file writing

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

  // Log to console (can be useful for debugging)
  console.log("Contact form submitted (data is now logged but not saved to a file):");
  console.log("Name:", parsed.data.name);
  console.log("Email:", parsed.data.email);
  console.log("Message:", parsed.data.message);

  // The logic for saving to a text file has been removed.
  // You would add your Firestore saving logic here.
  // For example:
  // try {
  //   const { getFirestore } = await import('firebase-admin/firestore'); // Or your Firebase client SDK setup
  //   const db = getFirestore(); // Ensure Firebase Admin is initialized elsewhere
  //   await db.collection('contactSubmissions').add({
  //     name: parsed.data.name,
  //     email: parsed.data.email,
  //     message: parsed.data.message,
  //     timestamp: new Date(),
  //   });
  //   console.log('Contact form submission saved to Firestore.');
  // } catch (error) {
  //   console.error('Failed to save contact form submission to Firestore:', error);
  //   return {
  //     message: "Your message was received, but there was an issue saving it. Please try again later.",
  //     success: false,
  //   };
  // }

  return {
    message: "Thank you for your message! I'll get back to you soon.",
    success: true,
  };
}
