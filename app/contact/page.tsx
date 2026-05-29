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
      form.append("from_name", "GrabIt Contact Form");

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
    <div className="min-h-screen py-16 sm:py-24 bg-white relative overflow-hidden font-inter">
      {/* Dot grid background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1.5px,transparent_1.5px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-70" />
      </div>

      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        <Button asChild variant="ghost" size="sm" className="mb-8 hover:bg-ash-gray border border-cloud-gray rounded-lg text-steel-gray hover:text-jet-black">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </Button>

        <div className="mb-8 space-y-2">
          <h1 className="text-3xl font-heading font-bold tracking-tight text-jet-black">Contact Us</h1>
          <p className="text-sm text-steel-gray">Have a question or feedback? We'd love to hear from you.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info Side */}
          <div className="md:col-span-2 space-y-4">
            <Card className="border border-cloud-gray bg-white shadow-subtle rounded-xl overflow-hidden">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-ember-glow/10 flex items-center justify-center text-ember-glow shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-jet-black uppercase tracking-wider">Email Support</h3>
                  <p className="text-xs text-steel-gray mt-0.5">We respond within 24-48 hours.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-cloud-gray bg-ash-gray/60 shadow-subtle rounded-xl overflow-hidden">
              <CardContent className="p-5 space-y-3">
                <h3 className="text-xs font-bold text-jet-black uppercase tracking-wider">Before contacting us:</h3>
                <ul className="text-xs text-steel-gray space-y-2.5">
                  <li className="flex items-start gap-1">
                    <span>•</span>
                    <span>Check our <Link href="/faq" className="text-jet-black hover:text-ember-glow font-medium underline underline-offset-2">FAQ page</Link> for quick answers.</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <span>•</span>
                    <span>Review our <Link href="/terms" className="text-jet-black hover:text-ember-glow font-medium underline underline-offset-2">Terms of Service</Link>.</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <span>•</span>
                    <span>Read our <Link href="/privacy" className="text-jet-black hover:text-ember-glow font-medium underline underline-offset-2">Privacy Policy</Link>.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Form Side */}
          <div className="md:col-span-3">
            <Card className="border border-cloud-gray bg-white shadow-subtle rounded-xl overflow-hidden">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-xs font-bold text-jet-black uppercase tracking-wider">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      disabled={isSubmitting}
                      className="bg-white border border-cool-gray text-jet-black placeholder-steel-gray focus:border-ember-glow focus:ring-ember-glow/20 h-11 text-sm rounded-lg"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-xs font-bold text-jet-black uppercase tracking-wider">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      disabled={isSubmitting}
                      className="bg-white border border-cool-gray text-jet-black placeholder-steel-gray focus:border-ember-glow focus:ring-ember-glow/20 h-11 text-sm rounded-lg"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="subject" className="text-xs font-bold text-jet-black uppercase tracking-wider">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      disabled={isSubmitting}
                      className="bg-white border border-cool-gray text-jet-black placeholder-steel-gray focus:border-ember-glow focus:ring-ember-glow/20 h-11 text-sm rounded-lg"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-xs font-bold text-jet-black uppercase tracking-wider">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      disabled={isSubmitting}
                      rows={5}
                      className="bg-white border border-cool-gray text-jet-black placeholder-steel-gray focus:border-ember-glow focus:ring-ember-glow/20 text-sm rounded-lg"
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full h-11 bg-ember-glow hover:bg-ember-glow/95 disabled:bg-steel-gray text-white font-semibold rounded-lg shadow-subtle border-0 flex items-center justify-center gap-2 mt-2">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Message</span>
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
