"use client";

import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { submitContactForm, type ContactFormState } from "@/lib/actions/contactActions";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2, AlertCircle, CheckCircle } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
       {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export function ContactForm() {
  const initialState: ContactFormState = { message: "", success: false };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Success!" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
    }
  }, [state, toast]);
  
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl">Get In Touch</CardTitle>
        <CardDescription>Have a question or want to work together? Fill out the form below.</CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" placeholder="Your Name" required defaultValue={state.fields?.name} />
            {state.issues && state.issues.find(issue => issue.toLowerCase().includes('name')) && (
                 <p className="text-sm text-destructive">{state.issues.find(issue => issue.toLowerCase().includes('name'))}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" type="email" placeholder="your.email@example.com" required defaultValue={state.fields?.email}/>
             {state.issues && state.issues.find(issue => issue.toLowerCase().includes('email')) && (
                 <p className="text-sm text-destructive">{state.issues.find(issue => issue.toLowerCase().includes('email'))}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Your message here..." rows={5} required defaultValue={state.fields?.message}/>
            {state.issues && state.issues.find(issue => issue.toLowerCase().includes('message')) && (
                 <p className="text-sm text-destructive">{state.issues.find(issue => issue.toLowerCase().includes('message'))}</p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton />
        </CardFooter>
      </form>
    </Card>
  );
}