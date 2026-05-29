import Link from 'next/link';
import { Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card text-card-foreground">
      <div className="container max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/dmca" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                  DMCA
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">Support</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">Product</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">About</h3>
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
              grabit2me is a minimal, fast, and free media utility to download high-resolution photos and videos from Instagram and X (Twitter).
            </p>
            <div className="flex gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-none border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-none border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                title="X / Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-muted-foreground">
          <p>© {new Date().getFullYear()} grabit2me. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Not affiliated with Instagram, Meta, or X (Twitter).
          </p>
        </div>
      </div>
    </footer>
  );
};
