import Link from 'next/link';
import { Instagram, Twitter } from 'lucide-react';
import { Logo } from '@/components/logo';

export const Footer = () => {
  return (
    <footer className="border-t border-cloud-gray bg-white text-jet-black font-inter">
      <div className="container max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xs text-jet-black mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/terms" className="text-steel-gray hover:text-jet-black transition-colors font-medium">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-steel-gray hover:text-jet-black transition-colors font-medium">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/dmca" className="text-steel-gray hover:text-jet-black transition-colors font-medium">
                  DMCA
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-steel-gray hover:text-jet-black transition-colors font-medium">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xs text-jet-black mb-4 uppercase tracking-wider">Support</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/faq" className="text-steel-gray hover:text-jet-black transition-colors font-medium">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-steel-gray hover:text-jet-black transition-colors font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xs text-jet-black mb-4 uppercase tracking-wider">Product</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-steel-gray hover:text-jet-black transition-colors font-medium">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Logo className="h-4.5 text-ink-black" />
            </div>
            <p className="text-sm text-steel-gray mb-4 leading-relaxed">
              GrabIt is a minimal, fast, and free media utility to download high-resolution photos and videos from Instagram and X (Twitter).
            </p>
            <div className="flex gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-cloud-gray flex items-center justify-center text-steel-gray hover:text-jet-black hover:bg-ash-gray transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-cloud-gray flex items-center justify-center text-steel-gray hover:text-jet-black hover:bg-ash-gray transition-colors"
                title="X / Twitter"
              >
                {/* Simple X Logo SVG */}
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cloud-gray pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-steel-gray">
          <p>© {new Date().getFullYear()} GrabIt. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Not affiliated with Instagram, Meta, or X (Twitter).
          </p>
        </div>
      </div>
    </footer>
  );
};
