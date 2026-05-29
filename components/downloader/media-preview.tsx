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
      <Card className="border border-border overflow-hidden bg-card">
        {/* Aspect Ratio Controlled Media Preview Container */}
        <div className="relative w-full bg-neutral-950 flex items-center justify-center max-h-[60vh] overflow-hidden border-b border-border">
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
          <CardHeader className="bg-muted/30 border-b border-border py-4 px-4 sm:px-6">
            <CardTitle className="text-sm font-semibold leading-snug line-clamp-2">
              {media.title}
            </CardTitle>
            {media.description && (
              <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                {media.description}
              </p>
            )}
          </CardHeader>
        )}

        {/* Download Buttons Section */}
        <CardContent className="p-4 sm:p-6 space-y-4">
          {media.availableFormats && media.availableFormats.video.length > 0 ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Download className="h-4 w-4" />
                <span>{media.externalDownload ? 'Download Options' : 'Select Video Quality'}</span>
              </div>

              {media.externalDownload && (
                <p className="text-xs text-muted-foreground bg-muted p-3 border border-border">
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
                      variant={format.isExternal ? "outline" : "default"}
                      className="h-10 text-xs flex items-center justify-between border border-border hover:bg-accent hover:text-accent-foreground font-medium w-full"
                    >
                      <div className="flex items-center gap-2 truncate">
                        {isThisDownloading ? (
                          <Loader2 className="h-3.5 w-3.5 animate-spin shrink-0" />
                        ) : (
                          <Download className="h-3.5 w-3.5 shrink-0" />
                        )}
                        <span className="truncate">
                          {isThisDownloading
                            ? (downloadStatus === 'starting' ? 'Starting...' : 'Downloading...')
                            : format.quality}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0 ml-2">
                        {format.isExternal && (
                          <ExternalLink className="h-3 w-3 text-muted-foreground" />
                        )}
                        {!format.isExternal && format.hasAudio && (
                          <Badge variant="secondary" className="h-4 px-1 text-[9px] rounded-sm bg-primary/10 text-primary border-0">
                            <Volume2 className="h-2.5 w-2.5 mr-0.5" /> HD
                          </Badge>
                        )}
                        {!format.isExternal && !format.hasAudio && (
                          <Badge variant="destructive" className="h-4 px-1 text-[9px] rounded-sm bg-destructive/10 text-destructive border-0">
                            <VolumeX className="h-2.5 w-2.5 mr-0.5" /> Muted
                          </Badge>
                        )}
                      </div>
                    </Button>
                  );
                })}
              </div>

              {/* Audio formats */}
              {media.availableFormats.audio && media.availableFormats.audio.length > 0 && (
                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
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
                          variant="secondary"
                          className="h-10 text-xs flex items-center justify-between border border-border font-medium w-full"
                        >
                          <div className="flex items-center gap-2 truncate">
                            {isThisDownloading ? (
                              <Loader2 className="h-3.5 w-3.5 animate-spin shrink-0" />
                            ) : (
                              <Download className="h-3.5 w-3.5 shrink-0" />
                            )}
                            <span className="truncate">
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
              className="w-full h-11 text-sm font-medium flex items-center justify-center gap-2"
            >
              {downloading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  {downloadStatus === 'starting' ? 'Starting...' : 'Downloading...'}
                </>
              ) : (
                <>
                  <Download className="h-4 w-4" />
                  Download {media.type === 'video' ? 'Video' : 'Image'}
                </>
              )}
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
