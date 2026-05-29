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
      {/* Search / Input Button Group inside a subtle shadow wrapper */}
      <div className="relative flex items-stretch w-full rounded-full shadow-subtle border border-cool-gray bg-white overflow-hidden p-1.5 focus-within:ring-4 focus-within:ring-ember-glow/10 focus-within:border-ember-glow transition-all duration-200">
        <div className="relative flex-1 flex items-center">
          <Link2 className="absolute left-4.5 h-4 w-4 text-steel-gray" />
          <input
            type="url"
            placeholder="Paste Instagram or X/Twitter link here..."
            value={url}
            onChange={handleUrlChange}
            onKeyDown={handleKeyDown}
            className="pl-11 pr-10 h-11 w-full bg-white text-jet-black placeholder-steel-gray focus:outline-none text-sm font-inter"
            disabled={loading}
          />
          {(url || hasMedia) && (
            <button
              onClick={onReset}
              className="absolute right-2.5 h-7 w-7 flex items-center justify-center rounded-full text-steel-gray hover:text-jet-black hover:bg-ash-gray transition-colors"
              title="Clear"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <button
          onClick={onSubmit}
          disabled={loading || !url.trim()}
          className="h-11 px-6 bg-ember-glow hover:bg-ember-glow/95 disabled:bg-steel-gray text-white font-medium text-xs uppercase tracking-wider rounded-full flex items-center justify-center shrink-0 transition-all shadow-subtle active:scale-98"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              <Zap className="h-3.5 w-3.5 mr-1.5 fill-current" />
              <span>Fetch</span>
            </>
          )}
        </button>
      </div>

      {/* Loading state indicator */}
      {loading && !hasMedia && (
        <div className="rounded-xl border border-cloud-gray bg-ash-gray/60 p-6 flex flex-col items-center justify-center space-y-3 shadow-subtle">
          <Loader2 className="h-6 w-6 animate-spin text-ember-glow" />
          <div className="text-center">
            <p className="text-sm font-semibold text-jet-black font-inter">Retrieving media files...</p>
            <p className="text-xs text-steel-gray font-inter mt-1">This can take up to a minute for high resolution files.</p>
          </div>
        </div>
      )}

      {/* Error alert */}
      {error && (
        <Alert variant="destructive" className="border-warning-red/20 bg-warning-red/5 rounded-xl shadow-subtle">
          <AlertTitle className="font-semibold text-sm text-warning-red">Failed to retrieve media</AlertTitle>
          <AlertDescription className="text-xs text-warning-red/90">{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
