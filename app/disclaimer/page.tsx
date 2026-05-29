import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Disclaimer - GrabIt',
  description: 'Disclaimer for GrabIt social media downloader service',
};

export default function DisclaimerPage() {
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
          <h1 className="text-3xl font-heading font-bold tracking-tight text-jet-black">Disclaimer</h1>
          <p className="text-sm text-steel-gray">Please read our disclaimer policy regarding service usage.</p>
        </div>

        <Card className="border border-cloud-gray bg-white shadow-subtle rounded-xl overflow-hidden">
          <CardContent className="p-6 sm:p-8 space-y-6 text-sm text-steel-gray leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">General Information</h2>
              <p>
                GrabIt is a downloader utility that allows users to access and save publicly available content from social media platforms. By using our service, you acknowledge and agree to this disclaimer.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">Content Ownership</h2>
              <p>
                We do not host, store, or own any content downloaded through our service. All content belongs to their respective copyright holders. Users are responsible for ensuring they have the right to download and use any content.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">User Responsibility</h2>
              <p>
                Users must comply with all applicable laws and regulations, including copyright laws. We are not responsible for how users utilize downloaded content. You should only download content that you have permission to use or that is in the public domain.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">Service Availability</h2>
              <p>
                We strive to provide a reliable service but do not guarantee uninterrupted access. The service is provided "as is" without warranties of any kind, either express or implied.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">Third-Party Platforms</h2>
              <p>
                GrabIt is not affiliated with, endorsed by, or sponsored by Instagram, Meta, X (Twitter), or any other social media platform. All trademarks and registered trademarks are the property of their respective owners.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, GrabIt shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-jet-black border-b border-cloud-gray pb-2">Changes to Disclaimer</h2>
              <p>
                We reserve the right to modify this disclaimer at any time. Continued use of the service after changes constitutes acceptance of the modified disclaimer.
              </p>
            </section>

            <p className="text-xs text-steel-gray pt-4">Last updated: {new Date().toLocaleDateString()}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
