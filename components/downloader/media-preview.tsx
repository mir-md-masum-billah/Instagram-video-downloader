'use client';

import * as React from 'react';
import { Download, Loader2, Play, Volume2, VolumeX, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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

interface MediaPreviewProps {
  media: MediaResponse;
  downloading: boolean;
  downloadingFormat: string | null;
  downloadStatus: 'idle' | 'fetching' | 'starting';
  handleDownload: (customUrl?: string, isExternal?: boolean, formatId?: string) => Promise<void>;
  setError: (error: string) => void;
}

export function MediaPreview({
  media,
  downloading,
  downloadingFormat,
  downloadStatus,
  handleDownload,
  setError,
}: MediaPreviewProps) {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Card className="border border-cloud-gray overflow-hidden bg-white shadow-sm rounded-xl">
        {/* Aspect Ratio Controlled Media Preview Container */}
        <div className="relative w-full bg-ink-black flex items-center justify-center max-h-[60vh] overflow-hidden border-b border-cloud-gray">
          {media.type === 'video' ? (
            <video
              controls
              controlsList="nodownload"
              className="w-full h-auto max-h-[60vh] object-contain"
              src={media.mediaUrl}
              onError={() => setError('Failed to load video preview. You can still try downloading it.')}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={media.mediaUrl}
              alt={media.title || 'Media Preview'}
              className="w-full h-auto max-h-[60vh] object-contain"
              onError={() => setError('Failed to load image preview. You can still try downloading it.')}
            />
          )}
        </div>

        {/* Media Details */}
        {media.title && (
          <CardHeader className="bg-ash-gray/40 border-b border-cloud-gray py-4 px-4 sm:px-6">
            <CardTitle className="text-sm font-semibold leading-snug line-clamp-2 text-jet-black font-inter">
              {media.title}
            </CardTitle>
            {media.description && (
              <p className="text-xs text-steel-gray line-clamp-2 mt-1 font-inter">
                {media.description}
              </p>
            )}
          </CardHeader>
        )}

        {/* Download Buttons Section */}
        <CardContent className="p-4 sm:p-6 space-y-4">
          {media.availableFormats && media.availableFormats.video.length > 0 ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-jet-black font-inter">
                <Download className="h-4 w-4 text-ember-glow" />
                <span>{media.externalDownload ? 'Download Options' : 'Select Video Quality'}</span>
              </div>

              {media.externalDownload && (
                <p className="text-xs text-steel-gray bg-ash-gray/60 p-3.5 border border-cloud-gray rounded-2xl font-inter">
                  💡 Click a download button below to load the video details on the hosting service, where you can save it.
                </p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {media.availableFormats.video.map((format, index) => {
                  const formatId = `video-${index}-${format.quality}`;
                  const isThisDownloading = downloadingFormat === formatId;

                  return (
                    <Button
                      key={index}
                      onClick={() => handleDownload(format.url, format.isExternal, formatId)}
                      disabled={downloading}
                      className={`h-11 text-xs flex items-center justify-between font-medium w-full rounded-full shadow-subtle border ${
                        format.isExternal 
                          ? "bg-white border-cloud-gray text-jet-black hover:bg-ash-gray hover:border-cool-gray" 
                          : "bg-white border-cloud-gray text-jet-black hover:bg-ash-gray hover:border-cool-gray"
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        {isThisDownloading ? (
                          <Loader2 className="h-3.5 w-3.5 animate-spin shrink-0 text-ember-glow" />
                        ) : (
                          <Download className="h-3.5 w-3.5 shrink-0 text-steel-gray" />
                        )}
                        <span className="truncate">
                          {isThisDownloading
                            ? (downloadStatus === 'starting' ? 'Starting...' : 'Downloading...')
                            : format.quality}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0 ml-2">
                        {format.isExternal && (
                          <ExternalLink className="h-3 w-3 text-steel-gray" />
                        )}
                        {!format.isExternal && format.hasAudio && (
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-ember-glow/10 text-ember-glow">
                            <Volume2 className="h-2.5 w-2.5 mr-0.5" /> HD
                          </span>
                        )}
                        {!format.isExternal && !format.hasAudio && (
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-warning-red/10 text-warning-red">
                            <VolumeX className="h-2.5 w-2.5 mr-0.5" /> Muted
                          </span>
                        )}
                      </div>
                    </Button>
                  );
                })}
              </div>

              {/* Audio formats */}
              {media.availableFormats.audio && media.availableFormats.audio.length > 0 && (
                <div className="space-y-3 pt-4 border-t border-cloud-gray">
                  <div className="text-xs font-bold text-jet-black uppercase tracking-wider font-inter">
                    Audio Tracks Only
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {media.availableFormats.audio.map((format, index) => {
                      const formatId = `audio-${index}-${format.quality}`;
                      const isThisDownloading = downloadingFormat === formatId;

                      return (
                        <Button
                          key={index}
                          onClick={() => handleDownload(format.url, false, formatId)}
                          disabled={downloading}
                          className="h-11 text-xs flex items-center justify-between bg-ash-gray hover:bg-cloud-gray/40 border border-cloud-gray text-jet-black font-medium w-full rounded-full shadow-subtle"
                        >
                          <div className="flex items-center gap-2 truncate">
                            {isThisDownloading ? (
                              <Loader2 className="h-3.5 w-3.5 animate-spin shrink-0 text-ember-glow" />
                            ) : (
                              <Download className="h-3.5 w-3.5 shrink-0 text-steel-gray" />
                            )}
                            <span className="truncate font-inter">
                              {isThisDownloading
                                ? (downloadStatus === 'starting' ? 'Starting...' : 'Downloading...')
                                : `Audio - ${format.quality}`}
                            </span>
                          </div>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Single Direct Download Button if formats not available */
            <Button
              onClick={() => handleDownload()}
              disabled={downloading}
              size="lg"
              className="w-full h-11 text-sm font-semibold bg-ember-glow hover:bg-ember-glow/95 text-white flex items-center justify-center gap-2 rounded-full shadow-subtle font-inter border-0"
            >
              {downloading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>{downloadStatus === 'starting' ? 'Starting...' : 'Downloading...'}</span>
                </>
              ) : (
                <>
                  <Download className="h-4 w-4" />
                  <span>Download {media.type === 'video' ? 'Video' : 'Image'}</span>
                </>
              )}
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
