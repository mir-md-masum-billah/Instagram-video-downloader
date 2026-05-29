import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Privacy Policy - GrabIt',
  description: 'Privacy Policy for GrabIt social media downloader service',
};

export default function PrivacyPage() {
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
          <h1 className="text-3xl font-heading font-bold tracking-tight text-jet-black">Privacy Policy</h1>
          <p className="text-sm text-steel-gray">We respect your privacy and process minimal data.</p>
        </div>

        <Card className="border border-cloud-gray bg-white shadow-subtle rounded-xl overflow-hidden">
          <CardContent className="p-6 sm:p-8 space-y-6 text-sm text-steel-gray leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">1. Information We Collect</h2>
              <p>
                GrabIt is designed with privacy in mind. We collect minimal information necessary to provide our service:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>URLs you submit for processing (temporarily processed, never stored)</li>
                <li>Basic analytics data (anonymized page views)</li>
                <li>Technical information (browser type, device type)</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">2. How We Use Your Information</h2>
              <p>The information we collect is used to:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Process video download requests</li>
                <li>Improve service performance and reliability</li>
                <li>Analyze usage patterns (anonymized)</li>
                <li>Prevent abuse and ensure service security</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">3. Data Storage and Security</h2>
              <p>
                We do not store the videos or content you download. URLs are processed in real-time and not permanently stored. We implement appropriate security measures to protect against unauthorized access to our systems.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">4. Cookies and Tracking</h2>
              <p>
                We may use cookies and similar technologies for:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Essential service functionality</li>
                <li>Analytics to understand service usage</li>
                <li>Improving user experience</li>
              </ul>
              <p className="mt-2 text-xs">
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">5. Third-Party Services</h2>
              <p>
                Our service interacts with third-party platforms (Instagram, X, etc.) to retrieve publicly available content that you request. We are not responsible for the privacy practices of these platforms.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">6. Data Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share anonymized aggregate data for analytics purposes.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">7. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Access information we process about you</li>
                <li>Request deletion of your session logs</li>
                <li>Opt-out of analytics tracking</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">8. Children's Privacy</h2>
              <p>
                Our service is not directed to individuals under the age of 13. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">9. Changes to Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify users of significant changes by posting a notice on our website.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">10. Contact Us</h2>
              <p>
                If you have questions about this privacy policy or our practices, please contact us through our contact page.
              </p>
            </section>

            <p className="text-xs text-steel-gray pt-4">Last updated: {new Date().toLocaleDateString()}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
