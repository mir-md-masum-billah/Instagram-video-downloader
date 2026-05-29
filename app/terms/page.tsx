import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Terms of Service - GrabIt',
  description: 'Terms of Service for GrabIt social media downloader service',
};

export default function TermsPage() {
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
          <h1 className="text-3xl font-heading font-bold tracking-tight text-jet-black">Terms of Service</h1>
          <p className="text-sm text-steel-gray">Please read our terms before using the service.</p>
        </div>

        <Card className="border border-cloud-gray bg-white shadow-subtle rounded-xl overflow-hidden">
          <CardContent className="p-6 sm:p-8 space-y-6 text-sm text-steel-gray leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">1. Acceptance of Terms</h2>
              <p>
                By accessing and using GrabIt, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">2. Use License</h2>
              <p>
                Permission is granted to temporarily download videos through GrabIt for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">3. User Obligations</h2>
              <p>You agree to:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Only download content you have rights to access</li>
                <li>Respect copyright and intellectual property rights</li>
                <li>Not use the service for commercial purposes without permission</li>
                <li>Not abuse or attempt to circumvent service limitations</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">4. Prohibited Uses</h2>
              <p>You may not use GrabIt to:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Download copyrighted content without permission</li>
                <li>Violate any laws or regulations</li>
                <li>Infringe on others' rights</li>
                <li>Distribute malware or harmful code</li>
                <li>Interfere with the service's operation</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">5. Service Modifications</h2>
              <p>
                We reserve the right to modify, suspend, or discontinue the service at any time without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">6. Disclaimer of Warranties</h2>
              <p>
                The service is provided "as is" without any warranties, expressed or implied. We do not warrant that the service will be uninterrupted, secure, or error-free.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">7. Limitation of Liability</h2>
              <p>
                GrabIt shall not be liable for any damages arising from the use or inability to use the service, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">8. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless GrabIt from any claims, damages, losses, liabilities, and expenses arising from your use of the service or violation of these terms.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">9. Changes to Terms</h2>
              <p>
                We reserve the right to revise these terms at any time. By continuing to use the service after changes are posted, you agree to be bound by the revised terms.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">10. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us through our contact page.
              </p>
            </section>

            <p className="text-xs text-steel-gray pt-4">Last updated: {new Date().toLocaleDateString()}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
