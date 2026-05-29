'use client';

import * as React from 'react';
import { useState } from 'react';
import { ArrowLeft, Loader2, Mail, Send } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new FormData();
      form.append("access_key", "ac79758c-6137-4a96-aed7-d26d3a16e1f3");
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("subject", formData.subject);
      form.append("message", formData.message);
      form.append("from_name", "grabit2me Contact Form");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for reaching out! We'll get back to you soon.");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || "Form submission failed");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-16 sm:py-24 bg-background">
      <div className="container max-w-4xl mx-auto px-4">
        <Button asChild variant="outline" size="sm" className="mb-8">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">Contact Us</h1>
          <p className="text-sm text-muted-foreground mt-1">Have a question or feedback? We'd love to hear from you.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info Side */}
          <div className="md:col-span-2 space-y-4">
            <Card className="border border-border bg-card">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-none bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider">Email Support</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">We respond within 24-48 hours.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-muted/30">
              <CardContent className="p-5 space-y-3">
                <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider">Before contacting us:</h3>
                <ul className="text-xs text-muted-foreground space-y-2">
                  <li>
                    • Check our <Link href="/faq" className="text-foreground hover:underline">FAQ page</Link> for quick answers.
                  </li>
                  <li>
                    • Review our <Link href="/terms" className="text-foreground hover:underline">Terms of Service</Link>.
                  </li>
                  <li>
                    • Read our <Link href="/privacy" className="text-foreground hover:underline">Privacy Policy</Link>.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Form Side */}
          <div className="md:col-span-3">
            <Card className="border border-border bg-card">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      disabled={isSubmitting}
                      className="bg-background border border-input h-10 text-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      disabled={isSubmitting}
                      className="bg-background border border-input h-10 text-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      disabled={isSubmitting}
                      className="bg-background border border-input h-10 text-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      disabled={isSubmitting}
                      rows={5}
                      className="bg-background border border-input text-xs"
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full h-10 text-xs font-semibold mt-2">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
