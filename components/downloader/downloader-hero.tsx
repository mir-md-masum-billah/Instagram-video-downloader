import { Download } from 'lucide-react';

export function DownloaderHero() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 mb-8">
      <div className="inline-flex items-center justify-center p-3 bg-primary/10 text-primary">
        <Download className="w-6 h-6" />
      </div>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
        Social Media Downloader
      </h1>
      <p className="text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed">
        Download high-quality videos and images from Instagram and X (Twitter) instantly. Free, fast, and no registration required.
      </p>
    </div>
  );
}
