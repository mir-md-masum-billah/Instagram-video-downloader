import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'FAQ - GrabIt',
  description: 'Frequently asked questions about GrabIt social media downloader',
};

export default function FAQPage() {
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
          <h1 className="text-3xl font-heading font-bold tracking-tight text-jet-black">Frequently Asked Questions</h1>
          <p className="text-sm text-steel-gray">Find answers to common questions about using GrabIt.</p>
        </div>

        <Card className="border border-cloud-gray bg-white shadow-subtle rounded-xl overflow-hidden">
          <CardContent className="p-6 sm:p-8 space-y-6 text-sm text-steel-gray leading-relaxed">
            <section className="space-y-1.5">
              <h2 className="text-sm font-bold text-jet-black">How does GrabIt work?</h2>
              <p>
                Simply paste the URL of the media you want to download, click "Fetch", and once the media is processed, select your preferred quality/format to download. Our service processes publicly available content in real-time.
              </p>
            </section>

            <section className="space-y-1.5 pt-4 border-t border-cloud-gray">
              <h2 className="text-sm font-bold text-jet-black">Which platforms are supported?</h2>
              <p>
                Currently, we support Instagram and X (Twitter).
              </p>
            </section>

            <section className="space-y-1.5 pt-4 border-t border-cloud-gray">
              <h2 className="text-sm font-bold text-jet-black">Is GrabIt free to use?</h2>
              <p>
                Yes! GrabIt is completely free to use. No registration, no subscriptions, no hidden fees.
              </p>
            </section>

            <section className="space-y-1.5 pt-4 border-t border-cloud-gray">
              <h2 className="text-sm font-bold text-jet-black">Do I need to create an account?</h2>
              <p>
                No account is required. You can use GrabIt anonymously without signing up or logging in.
              </p>
            </section>

            <section className="space-y-1.5 pt-4 border-t border-cloud-gray">
              <h2 className="text-sm font-bold text-jet-black">Are there watermarks on downloaded videos?</h2>
              <p>
                No, we do not add any watermarks to downloaded videos or images. You get the original content as served by the social platform.
              </p>
            </section>

            <section className="space-y-1.5 pt-4 border-t border-cloud-gray">
              <h2 className="text-sm font-bold text-jet-black">Can I download private or restricted content?</h2>
              <p>
                No, our service only works with publicly available content. We cannot access private accounts or restricted/deleted posts.
              </p>
            </section>

            <section className="space-y-1.5 pt-4 border-t border-cloud-gray">
              <h2 className="text-sm font-bold text-jet-black">What video quality can I download?</h2>
              <p>
                We provide the highest quality versions available from the source post, and offer multiple resolution formats when served by the host platform API.
              </p>
            </section>

            <section className="space-y-1.5 pt-4 border-t border-cloud-gray">
              <h2 className="text-sm font-bold text-jet-black">Is it legal to download videos?</h2>
              <p>
                You should only download content that you own or have explicit permission to use. Always respect copyright laws and content creators' rights. We recommend using downloaded media for personal, non-commercial purposes only.
              </p>
            </section>

            <section className="space-y-1.5 pt-4 border-t border-cloud-gray">
              <h2 className="text-sm font-bold text-jet-black">Do you store the videos I download?</h2>
              <p>
                No, we do not store any videos. All processing happens in real-time on our servers, and we do not maintain copy archives of your downloads.
              </p>
            </section>

            <section className="space-y-1.5 pt-4 border-t border-cloud-gray">
              <h2 className="text-sm font-bold text-jet-black">Why isn't my download working?</h2>
              <p>
                Common causes: the post is set to private, the link is incorrect or malformed, or the content has been deleted. Make sure you are using a valid, public URL. If problems persist, feel free to try again later.
              </p>
            </section>

            <section className="space-y-1.5 pt-4 border-t border-cloud-gray">
              <h2 className="text-sm font-bold text-jet-black">Can I download videos in bulk?</h2>
              <p>
                Currently, we process one video at a time to ensure quality and prevent server overload. For multiple downloads, you'll need to copy and paste each link individually.
              </p>
            </section>

            <section className="space-y-1.5 pt-4 border-t border-cloud-gray">
              <h2 className="text-sm font-bold text-jet-black">How can I contact support?</h2>
              <p>
                You can reach us through our <Link href="/contact" className="text-ember-glow hover:underline underline-offset-2">contact page</Link>. We'll do our best to respond to your inquiry as quickly as possible.
              </p>
            </section>

            <section className="space-y-1.5 pt-4 border-t border-cloud-gray">
              <h2 className="text-sm font-bold text-jet-black">Is GrabIt safe to use?</h2>
              <p>
                Yes, our service is safe. We do not require any personal details, do not require installing any browser extensions, and do not track your downloads. Always make sure you are accessing the official GrabIt domain.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
