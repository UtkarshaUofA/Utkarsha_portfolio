"use server";
import { getResumeFeedback, type ResumeFeedbackInput, type ResumeFeedbackOutput } from '@/ai/flows/resume-feedback';
import { z } from 'zod';

const ResumeInputSchema = z.object({
  resumeDataUri: z.string().refine(val => val.startsWith('data:'), {
    message: "Resume data must be a valid data URI."
  }),
});

interface ActionResult {
  success: boolean;
  feedback?: string;
  error?: string;
}

export async function analyzeResumeAction(prevState: any, formData: FormData): Promise<ActionResult> {
  const resumeDataUri = formData.get('resumeDataUri') as string;

  const validatedFields = ResumeInputSchema.safeParse({ resumeDataUri });

  if (!validatedFields.success) {
    return {
      success: false,
      error: validatedFields.error.errors.map(e => e.message).join(', '),
    };
  }
  
  try {
    const input: ResumeFeedbackInput = { resumeDataUri: validatedFields.data.resumeDataUri };
    const result: ResumeFeedbackOutput = await getResumeFeedback(input);
    return { success: true, feedback: result.feedback };
  } catch (error) {
    console.error("Error analyzing resume:", error);
    return { success: false, error: "Failed to analyze resume. Please try again." };
  }
}
