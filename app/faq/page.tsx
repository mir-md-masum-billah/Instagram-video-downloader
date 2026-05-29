import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'FAQ - grabit2me',
  description: 'Frequently asked questions about grabit2me video downloader',
};

export default function FAQPage() {
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
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">Frequently Asked Questions</h1>
          <p className="text-sm text-muted-foreground mt-1">Find answers to common questions about using grabit2me.</p>
        </div>

        <Card className="border border-border bg-card">
          <CardContent className="p-6 sm:p-8 space-y-6 text-sm text-muted-foreground leading-relaxed">
            <section className="space-y-1.5">
              <h2 className="text-sm font-semibold text-foreground">How does grabit2me work?</h2>
              <p>
                Simply paste the URL of the media you want to download, click "Fetch Media", and once the media is processed, select your preferred quality/format to download. Our service processes publicly available content in real-time.
              </p>
            </section>

            <section className="space-y-1.5">
              <h2 className="text-sm font-semibold text-foreground border-t border-border pt-4">Which platforms are supported?</h2>
              <p>
                Currently, we support Instagram and X (Twitter).
              </p>
            </section>

            <section className="space-y-1.5">
              <h2 className="text-sm font-semibold text-foreground border-t border-border pt-4">Is grabit2me free to use?</h2>
              <p>
                Yes! grabit2me is completely free to use. No registration, no subscriptions, no hidden fees.
              </p>
            </section>

            <section className="space-y-1.5">
              <h2 className="text-sm font-semibold text-foreground border-t border-border pt-4">Do I need to create an account?</h2>
              <p>
                No account is required. You can use grabit2me anonymously without signing up or logging in.
              </p>
            </section>

            <section className="space-y-1.5">
              <h2 className="text-sm font-semibold text-foreground border-t border-border pt-4">Are there watermarks on downloaded videos?</h2>
              <p>
                No, we do not add any watermarks to downloaded videos or images. You get the original content as served by the social platform.
              </p>
            </section>

            <section className="space-y-1.5">
              <h2 className="text-sm font-semibold text-foreground border-t border-border pt-4">Can I download private or restricted content?</h2>
              <p>
                No, our service only works with publicly available content. We cannot access private accounts or restricted/deleted posts.
              </p>
            </section>

            <section className="space-y-1.5">
              <h2 className="text-sm font-semibold text-foreground border-t border-border pt-4">What video quality can I download?</h2>
              <p>
                We provide the highest quality versions available from the source post, and offer multiple resolution formats when served by the host platform API.
              </p>
            </section>

            <section className="space-y-1.5">
              <h2 className="text-sm font-semibold text-foreground border-t border-border pt-4">Is it legal to download videos?</h2>
              <p>
                You should only download content that you own or have explicit permission to use. Always respect copyright laws and content creators' rights. We recommend using downloaded media for personal, non-commercial purposes only.
              </p>
            </section>

            <section className="space-y-1.5">
              <h2 className="text-sm font-semibold text-foreground border-t border-border pt-4">Do you store the videos I download?</h2>
              <p>
                No, we do not store any videos. All processing happens in real-time on our servers, and we do not maintain copy archives of your downloads.
              </p>
            </section>

            <section className="space-y-1.5">
              <h2 className="text-sm font-semibold text-foreground border-t border-border pt-4">Why isn't my download working?</h2>
              <p>
                Common causes: the post is set to private, the link is incorrect or malformed, or the content has been deleted. Make sure you are using a valid, public URL. If problems persist, feel free to try again later.
              </p>
            </section>

            <section className="space-y-1.5">
              <h2 className="text-sm font-semibold text-foreground border-t border-border pt-4">Can I download videos in bulk?</h2>
              <p>
                Currently, we process one video at a time to ensure quality and prevent server overload. For multiple downloads, you'll need to copy and paste each link individually.
              </p>
            </section>

            <section className="space-y-1.5">
              <h2 className="text-sm font-semibold text-foreground border-t border-border pt-4">How can I contact support?</h2>
              <p>
                You can reach us through our <Link href="/contact" className="text-foreground underline underline-offset-2">contact page</Link>. We'll do our best to respond to your inquiry as quickly as possible.
              </p>
            </section>

            <section className="space-y-1.5">
              <h2 className="text-sm font-semibold text-foreground border-t border-border pt-4">Is grabit2me safe to use?</h2>
              <p>
                Yes, our service is safe. We do not require any personal details, do not require installing any browser extensions, and do not track your downloads. Always make sure you are accessing the official grabit2me domain.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
