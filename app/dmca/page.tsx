import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'DMCA Policy - grabit2me',
  description: 'DMCA Policy for grabit2me social media downloader service',
};

export default function DMCAPage() {
  return (
    <div className="min-h-screen py-16 sm:py-24 bg-background">
      <div className="container max-w-3xl mx-auto px-4">
        <Button asChild variant="outline" size="sm" className="mb-8">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">DMCA Policy</h1>
          <p className="text-sm text-muted-foreground mt-1">Our compliance guidelines for the Digital Millennium Copyright Act.</p>
        </div>

        <Card className="border border-border bg-card">
          <CardContent className="p-6 sm:p-8 space-y-6 text-sm text-muted-foreground leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">Digital Millennium Copyright Act Notice</h2>
              <p>
                grabit2me respects the intellectual property rights of others and expects our users to do the same. We comply with the provisions of the Digital Millennium Copyright Act (DMCA).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">Our Service</h2>
              <p>
                grabit2me is a tool that enables users to download publicly available content from social media platforms. We do not host, store, or control the content that users download. Our service merely facilitates access to content that is already publicly available.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">Copyright Infringement Notification</h2>
              <p>
                If you believe that your copyrighted work has been accessed through our service in a way that constitutes copyright infringement, please provide us with the following information:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>A physical or electronic signature of the copyright owner or authorized representative</li>
                <li>Identification of the copyrighted work claimed to have been infringed</li>
                <li>Identification of the material that is claimed to be infringing, with sufficient detail</li>
                <li>Your contact information (address, telephone number, email address)</li>
                <li>A statement that you have a good faith belief that the use is not authorized by the copyright owner</li>
                <li>A statement, under penalty of perjury, that the information in the notification is accurate</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">Counter-Notification</h2>
              <p>
                If you believe that content you posted was removed in error, you may submit a counter-notification with the following:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Your physical or electronic signature</li>
                <li>Identification of the material that has been removed</li>
                <li>A statement under penalty of perjury that you have a good faith belief that the material was removed by mistake</li>
                <li>Your name, address, and telephone number</li>
                <li>A statement consenting to jurisdiction of the federal court</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">Repeat Infringers</h2>
              <p>
                We may, in appropriate circumstances, disable or terminate access of users who are repeat infringers of copyright.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">Important Notice</h2>
              <p>
                Please note that grabit2me is a neutral service provider. We do not control or monitor the content that users choose to download. Content ownership remains with the original creators and platforms. Users are responsible for ensuring they have the right to download and use any content.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">Contact for DMCA Notices</h2>
              <p>
                Please send all DMCA notices and counter-notifications to our designated agent through our contact page. Include "DMCA Notice" in the subject line.
              </p>
            </section>

            <p className="text-xs text-muted-foreground pt-4">Last updated: {new Date().toLocaleDateString()}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
