import { Download } from 'lucide-react';

export function DownloaderHero() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-5 mb-10">
      {/* Icon badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cloud-gray bg-ash-gray text-steel-gray text-xs font-medium font-inter shadow-subtle">
        <Download className="w-3.5 h-3.5 text-ember-glow" />
        <span>Free · Fast · No Sign-up</span>
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-ink-black leading-tight max-w-2xl">
        Instagram & X Media Downloader
      </h1>

      <p className="text-sm sm:text-base text-steel-gray max-w-md leading-relaxed font-inter">
        Paste any public Instagram or X (Twitter) link to instantly download high-quality videos and images.
      </p>
    </div>
  );
}
