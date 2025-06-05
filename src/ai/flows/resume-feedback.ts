// 'use server';

/**
 * @fileOverview Provides AI-powered feedback on resume quality and content.
 *
 * - getResumeFeedback - A function that processes a resume and returns feedback.
 * - ResumeFeedbackInput - The input type for the getResumeFeedback function.
 * - ResumeFeedbackOutput - The return type for the getResumeFeedback function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ResumeFeedbackInputSchema = z.object({
  resumeDataUri: z
    .string()
    .describe(
      'The resume document, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' // Corrected the expected format
    ),
});

export type ResumeFeedbackInput = z.infer<typeof ResumeFeedbackInputSchema>;

const ResumeFeedbackOutputSchema = z.object({
  feedback: z.string().describe('AI-powered feedback on how to improve the resume.'),
});

export type ResumeFeedbackOutput = z.infer<typeof ResumeFeedbackOutputSchema>;

export async function getResumeFeedback(input: ResumeFeedbackInput): Promise<ResumeFeedbackOutput> {
  return resumeFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'resumeFeedbackPrompt',
  input: {schema: ResumeFeedbackInputSchema},
  output: {schema: ResumeFeedbackOutputSchema},
  prompt: `You are a career advisor providing feedback on resumes. Review the resume content and give actionable advice on how to improve it. Focus on clarity, impact, and formatting.

Resume content: {{media url=resumeDataUri}}`,
});

const resumeFeedbackFlow = ai.defineFlow(
  {
    name: 'resumeFeedbackFlow',
    inputSchema: ResumeFeedbackInputSchema,
    outputSchema: ResumeFeedbackOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
