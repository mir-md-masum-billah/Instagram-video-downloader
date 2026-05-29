'use client';

import * as React from 'react';
import { Loader2, Link2, X, Zap } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent } from '@/components/ui/card';

interface DownloaderFormProps {
  url: string;
  setUrl: (url: string) => void;
  loading: boolean;
  error: string;
  setError: (error: string) => void;
  onSubmit: () => void;
  onReset: () => void;
  hasMedia: boolean;
}

export function DownloaderForm({
  url,
  setUrl,
  loading,
  error,
  setError,
  onSubmit,
  onReset,
  hasMedia,
}: DownloaderFormProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    setError('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <Card className="border border-border bg-card">
        <CardContent className="pt-6 px-4 sm:px-6">
          <div className="flex flex-col gap-3">
            <div className="relative flex items-center">
              <Link2 className="absolute left-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="url"
                placeholder="Paste Instagram or X/Twitter link here..."
                value={url}
                onChange={handleUrlChange}
                onKeyDown={handleKeyDown}
                className="pl-9 pr-10 h-11 w-full bg-background border border-input text-sm"
                disabled={loading}
              />
              {(url || hasMedia) && (
                <Button
                  onClick={onReset}
                  variant="ghost"
                  size="icon-sm"
                  className="absolute right-2 h-7 w-7 text-muted-foreground hover:text-foreground"
                  title="Clear"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            {!hasMedia && url.trim() && (
              <Button
                onClick={onSubmit}
                disabled={loading || !url.trim()}
                size="lg"
                className="w-full h-11 text-sm font-medium"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Processing Link...
                  </>
                ) : (
                  <>
                    <Zap className="h-4 w-4 mr-2" />
                    Fetch Media
                  </>
                )}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Loading state indicator */}
      {loading && !hasMedia && (
        <Card className="border border-border bg-muted/30">
          <CardContent className="py-6 flex flex-col items-center justify-center space-y-3">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
            <div className="text-center">
              <p className="text-sm font-medium text-foreground">Retrieving video files...</p>
              <p className="text-xs text-muted-foreground">This can take up to a minute for high resolution files.</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Error alert */}
      {error && (
        <Alert variant="destructive" className="border-destructive/50 bg-destructive/5">
          <AlertTitle className="font-semibold text-sm">Failed to retrieve media</AlertTitle>
          <AlertDescription className="text-xs">{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
