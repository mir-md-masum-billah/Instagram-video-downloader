'use client';

import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import InstallPWA from '@/components/InstallPWA';
import { DownloaderHero } from '@/components/downloader/downloader-hero';
import { PlatformBadges } from '@/components/downloader/platform-badges';
import { DownloaderForm } from '@/components/downloader/downloader-form';
import { MediaPreview } from '@/components/downloader/media-preview';
import { FeaturesSection } from '@/components/downloader/features-section';

interface MediaResponse {
  type: 'video' | 'image';
  mediaUrl: string;
  title?: string;
  description?: string;
  thumbnail?: string;
  externalDownload?: boolean;
  availableFormats?: {
    video: Array<{
      quality: string;
      extension: string;
      url: string;
      qualityNum: number;
      hasAudio?: boolean;
      isExternal?: boolean;
    }>;
    audio: Array<{
      quality: string;
      extension: string;
      url: string;
    }>;
  };
  previewQuality?: string;
}

type Platform = 'instagram' | 'twitter' | 'unsupported';

export default function Home() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [downloadingFormat, setDownloadingFormat] = useState<string | null>(null);
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'fetching' | 'starting'>('idle');
  const [media, setMedia] = useState<MediaResponse | null>(null);
  const [error, setError] = useState('');
  const previousUrlRef = useRef('');

  const detectPlatform = (urlStr: string): Platform => {
    const urlLower = urlStr.toLowerCase().trim();

    if (urlLower.includes('instagram.com') || urlLower.includes('instagr.am')) {
      return 'instagram';
    } else if (urlLower.includes('twitter.com') || urlLower.includes('x.com')) {
      return 'twitter';
    }

    return 'unsupported';
  };

  // Auto-fetch when URL is pasted or changed
  useEffect(() => {
    const trimmedUrl = url.trim();

    // Only proceed if URL has changed and is not empty
    if (trimmedUrl && trimmedUrl !== previousUrlRef.current && !loading && !media) {
      const platform = detectPlatform(trimmedUrl);

      // Only auto-fetch if it's a supported platform
      if (platform !== 'unsupported') {
        previousUrlRef.current = trimmedUrl;
        handleFetchMedia();
      }
    }
  }, [url]);

  const handleFetchMedia = async () => {
    if (!url.trim()) {
      setError('Please enter a URL');
      return;
    }

    const platform = detectPlatform(url);

    if (platform === 'unsupported') {
      setError('Platform not supported. Currently we support Instagram and X (Twitter) only.');
      return;
    }

    setLoading(true);
    setError('');
    setMedia(null);

    try {
      const apiEndpoint = platform === 'instagram' ? '/api/instagram' : '/api/twitter';

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch media. Make sure the link is public.');
      }

      setMedia(data);
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleUrlChange = (newUrl: string) => {
    setUrl(newUrl);
    setError('');
    // Reset media preview when URL changes
    if (media && newUrl.trim() !== previousUrlRef.current) {
      setMedia(null);
    }
  };

  const handleDownload = async (customUrl?: string, isExternal?: boolean, formatId?: string) => {
    if (!media) return;

    const downloadId = formatId || customUrl || 'default';
    setDownloading(true);
    setDownloadingFormat(downloadId);
    setDownloadStatus('fetching');
    setError('');

    try {
      const urlToDownload = customUrl || media.mediaUrl;

      // Handle external download links
      if (isExternal || (customUrl && customUrl.includes('y2mate.com'))) {
        window.open(urlToDownload, '_blank');
        setDownloading(false);
        setDownloadingFormat(null);
        setDownloadStatus('idle');
        return;
      }

      // Direct download trigger via endpoint
      const downloadUrl = `/api/download?url=${encodeURIComponent(urlToDownload)}&type=${media.type}`;

      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `grabit-${media.type}-${Date.now()}.${media.type === 'video' ? 'mp4' : 'jpg'}`;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadStatus('starting');
      setTimeout(() => {
        setDownloading(false);
        setDownloadingFormat(null);
        setDownloadStatus('idle');
      }, 1000);
    } catch (err: any) {
      console.error('Download failed:', err);
      setDownloading(false);
      setDownloadingFormat(null);
      setDownloadStatus('idle');
      setError(err.message || 'Download failed. Please try again.');
    }
  };

  const handleReset = () => {
    setUrl('');
    setMedia(null);
    setError('');
    previousUrlRef.current = '';
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <InstallPWA />

      {/* Premium Dub.co dot grid background with radial fade */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1.5px,transparent_1.5px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-70" />
      </div>

      <main className="relative z-10 container max-w-5xl mx-auto px-4">
        {/* Hero + Tool Section */}
        <section className="py-16 sm:py-24 space-y-8">
          <DownloaderHero />
          <PlatformBadges />
          <DownloaderForm
            url={url}
            setUrl={handleUrlChange}
            loading={loading}
            error={error}
            setError={setError}
            onSubmit={handleFetchMedia}
            onReset={handleReset}
            hasMedia={!!media}
          />

          {media && (
            <MediaPreview
              media={media}
              downloading={downloading}
              downloadingFormat={downloadingFormat}
              downloadStatus={downloadStatus}
              handleDownload={handleDownload}
              setError={setError}
            />
          )}
        </section>

        {/* Features Section — shown when no media is displayed */}
        {!media && <FeaturesSection />}
      </main>
    </div>
  );
}
