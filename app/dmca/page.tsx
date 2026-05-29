import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'DMCA Policy - GrabIt',
  description: 'DMCA Policy for GrabIt social media downloader service',
};

export default function DMCAPage() {
  return (
    <div className="min-h-screen py-16 sm:py-24 bg-white relative overflow-hidden font-inter">
      {/* Dot grid background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1.5px,transparent_1.5px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-70" />
      </div>

      <div className="container max-w-3xl mx-auto px-4 relative z-10">
        <Button asChild variant="ghost" size="sm" className="mb-8 hover:bg-ash-gray border border-cloud-gray rounded-lg text-steel-gray hover:text-jet-black">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </Button>

        <div className="mb-8 space-y-2">
          <h1 className="text-3xl font-heading font-bold tracking-tight text-jet-black">DMCA Policy</h1>
          <p className="text-sm text-steel-gray">Our compliance guidelines for the Digital Millennium Copyright Act.</p>
        </div>

        <Card className="border border-cloud-gray bg-white shadow-subtle rounded-xl overflow-hidden">
          <CardContent className="p-6 sm:p-8 space-y-6 text-sm text-steel-gray leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">Digital Millennium Copyright Act Notice</h2>
              <p>
                GrabIt respects the intellectual property rights of others and expects our users to do the same. We comply with the provisions of the Digital Millennium Copyright Act (DMCA).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">Our Service</h2>
              <p>
                GrabIt is a tool that enables users to download publicly available content from social media platforms. We do not host, store, or control the content that users download. Our service merely facilitates access to content that is already publicly available.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">Copyright Infringement Notification</h2>
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
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">Counter-Notification</h2>
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
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">Repeat Infringers</h2>
              <p>
                We may, in appropriate circumstances, disable or terminate access of users who are repeat infringers of copyright.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">Important Notice</h2>
              <p>
                Please note that GrabIt is a neutral service provider. We do not control or monitor the content that users choose to download. Content ownership remains with the original creators and platforms. Users are responsible for ensuring they have the right to download and use any content.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">Contact for DMCA Notices</h2>
              <p>
                Please send all DMCA notices and counter-notifications to our designated agent through our contact page. Include "DMCA Notice" in the subject line.
              </p>
            </section>

            <p className="text-xs text-steel-gray pt-4">Last updated: {new Date().toLocaleDateString()}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
