"use client";

import { useState, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { analyzeResumeAction } from '@/lib/actions/resumeActions';
import { UploadCloud, FileText, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <UploadCloud className="mr-2 h-4 w-4" />}
      {pending ? 'Analyzing...' : 'Get Feedback'}
    </Button>
  );
}

export function ResumeFeedbackForm() {
  const [resumeDataUri, setResumeDataUri] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const initialState = { success: false, feedback: undefined, error: undefined };
  const [state, formAction] = useFormState(analyzeResumeAction, initialState);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
          variant: "destructive",
          title: "File too large",
          description: "Please upload a resume smaller than 5MB.",
        });
        setResumeDataUri(null);
        setFileName(null);
        if(fileInputRef.current) fileInputRef.current.value = "";
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        setResumeDataUri(e.target?.result as string);
        setFileName(file.name);
      };
      reader.readAsDataURL(file);
    } else {
      setResumeDataUri(null);
      setFileName(null);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl">Resume Feedback</CardTitle>
        <CardDescription>Upload your resume (PDF or DOCX, max 5MB) to get AI-powered feedback.</CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-6">
          <div>
            <Label htmlFor="resumeFile" className="mb-2 block font-medium">Upload Resume</Label>
            <div className="flex items-center justify-center w-full">
                <label htmlFor="resumeFile" className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-card hover:bg-muted transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        {fileName ? <FileText className="w-10 h-10 mb-3 text-primary" /> : <UploadCloud className="w-10 h-10 mb-3 text-muted-foreground" />}
                        <p className="mb-2 text-sm text-muted-foreground">
                          {fileName ? <span className="font-semibold">{fileName}</span> : <span><span className="font-semibold">Click to upload</span> or drag and drop</span>}
                        </p>
                        <p className="text-xs text-muted-foreground">PDF, DOC, DOCX (MAX. 5MB)</p>
                    </div>
                    <Input 
                      id="resumeFile" 
                      name="resumeFile" 
                      type="file" 
                      className="hidden" 
                      ref={fileInputRef}
                      accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      onChange={handleFileChange} 
                    />
                </label>
            </div>
            {resumeDataUri && <input type="hidden" name="resumeDataUri" value={resumeDataUri} />}
          </div>

          {state?.error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{state.error}</AlertDescription>
            </Alert>
          )}

          {state?.success && state.feedback && (
            <Alert variant="default" className="bg-primary/10 border-primary/50">
              <CheckCircle className="h-4 w-4 text-primary" />
              <AlertTitle className="text-primary">Feedback Received</AlertTitle>
              <AlertDescription>
                <h3 className="font-semibold mt-2 mb-1">AI Feedback:</h3>
                <div className="prose prose-sm max-w-none whitespace-pre-wrap bg-background p-4 rounded-md border">
                  {state.feedback}
                </div>
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          <SubmitButton />
        </CardFooter>
      </form>
    </Card>
  );
}