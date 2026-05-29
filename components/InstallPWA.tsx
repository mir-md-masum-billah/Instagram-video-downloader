'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import { Download, Share2, Smartphone, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstall, setShowInstall] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSPrompt, setShowIOSPrompt] = useState(false);
  const [showReminderBanner, setShowReminderBanner] = useState(false);

  useEffect(() => {
    // Check if running on iOS
    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(ios);

    // Check if it's a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // Check if already installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (isStandalone) {
      return; // Already installed
    }

    // Only show reminders on mobile devices
    if (isMobile) {
      // Check reminder banner dismissal
      const reminderDismissed = localStorage.getItem('pwa-reminder-dismissed');
      const reminderDismissedTime = localStorage.getItem('pwa-reminder-dismissed-time');

      // Show reminder banner after 5 seconds if not dismissed or after 1 day
      if (!reminderDismissed || (reminderDismissedTime && Date.now() - parseInt(reminderDismissedTime) > 1 * 24 * 60 * 60 * 1000)) {
        setTimeout(() => setShowReminderBanner(true), 5000);
      }
    }

    // iOS specific prompt
    if (ios) {
      const hasSeenPrompt = localStorage.getItem('ios-pwa-prompt-dismissed');
      const dismissedTime = localStorage.getItem('ios-pwa-prompt-dismissed-time');

      // Show again after 1 day
      if (!hasSeenPrompt || (dismissedTime && Date.now() - parseInt(dismissedTime) > 1 * 24 * 60 * 60 * 1000)) {
        setTimeout(() => setShowIOSPrompt(true), 1000);
      }
      return;
    }

    // Handle Android install prompt (mobile only)
    if (isMobile) {
      const handler = (e: any) => {
        e.preventDefault();
        setDeferredPrompt(e);

        const hasSeenPrompt = localStorage.getItem('pwa-prompt-dismissed');
        const dismissedTime = localStorage.getItem('pwa-prompt-dismissed-time');

        // Show again after 1 day
        if (!hasSeenPrompt || (dismissedTime && Date.now() - parseInt(dismissedTime) > 1 * 24 * 60 * 60 * 1000)) {
          setTimeout(() => setShowInstall(true), 1000);
        }
      };

      window.addEventListener('beforeinstallprompt', handler);

      return () => {
        window.removeEventListener('beforeinstallprompt', handler);
      };
    }
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
      localStorage.removeItem('pwa-prompt-dismissed');
      localStorage.removeItem('pwa-prompt-dismissed-time');
      setShowReminderBanner(false);
      localStorage.setItem('pwa-reminder-dismissed', 'true');
    }

    setDeferredPrompt(null);
    setShowInstall(false);
  };

  const handleDismiss = () => {
    setShowInstall(false);
    localStorage.setItem('pwa-prompt-dismissed', 'true');
    localStorage.setItem('pwa-prompt-dismissed-time', Date.now().toString());
  };

  const handleIOSDismiss = () => {
    setShowIOSPrompt(false);
    localStorage.setItem('ios-pwa-prompt-dismissed', 'true');
    localStorage.setItem('ios-pwa-prompt-dismissed-time', Date.now().toString());
  };

  const handleReminderDismiss = () => {
    setShowReminderBanner(false);
    localStorage.setItem('pwa-reminder-dismissed', 'true');
    localStorage.setItem('pwa-reminder-dismissed-time', Date.now().toString());
  };

  const handleReminderInstall = () => {
    setShowReminderBanner(false);
    if (isIOS) {
      setShowIOSPrompt(true);
    } else {
      setShowInstall(true);
    }
  };

  // iOS Install Instructions using Sheet
  if (isIOS) {
    return (
      <>
        {/* Reminder Banner for iOS */}
        {showReminderBanner && (
          <div className="fixed bottom-4 left-4 right-4 z-40 animate-in slide-in-from-bottom-5 duration-500 max-w-md mx-auto">
            <Card className="border border-border bg-card shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary">
                      <Smartphone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Install grabit2me App</p>
                      <p className="text-xs text-muted-foreground">Add to home screen for quick access!</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Button onClick={handleReminderInstall} size="sm">
                      Install
                    </Button>
                    <Button
                      onClick={handleReminderDismiss}
                      variant="ghost"
                      size="icon-sm"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <Sheet open={showIOSPrompt} onOpenChange={setShowIOSPrompt}>
          <SheetContent side="bottom" className="h-auto bg-card border-t border-border p-6 rounded-t-lg">
            <div className="max-w-md mx-auto">
              <SheetHeader className="text-left mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <SheetTitle className="text-lg font-semibold text-foreground">Install grabit2me App</SheetTitle>
                </div>
                <SheetDescription className="text-xs text-muted-foreground">
                  Get the best experience with our app on your iPhone!
                </SheetDescription>
              </SheetHeader>

              <div className="space-y-4 mb-6">
                <div className="border border-border p-4 bg-muted/30">
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Installation Steps:</h4>
                  <ol className="space-y-3 text-xs text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="shrink-0 w-5 h-5 bg-primary/10 flex items-center justify-center text-[10px] font-semibold text-primary">1</span>
                      <span className="pt-0.5 text-foreground font-medium">
                        Tap the <Share2 className="inline w-3.5 h-3.5 mx-1" /> Share icon at the bottom of Safari.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="shrink-0 w-5 h-5 bg-primary/10 flex items-center justify-center text-[10px] font-semibold text-primary">2</span>
                      <span className="pt-0.5 text-foreground font-medium">
                        Scroll down and tap <strong>"Add to Home Screen"</strong>.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="shrink-0 w-5 h-5 bg-primary/10 flex items-center justify-center text-[10px] font-semibold text-primary">3</span>
                      <span className="pt-0.5 text-foreground font-medium">
                        Tap <strong>"Add"</strong> in the top right corner.
                      </span>
                    </li>
                  </ol>
                </div>
              </div>

              <SheetFooter>
                <Button onClick={handleIOSDismiss} className="w-full h-11 text-sm font-medium">
                  Got it!
                </Button>
              </SheetFooter>
            </div>
          </SheetContent>
        </Sheet>
      </>
    );
  }

  // Android/Desktop Install Prompt using Sheet
  return (
    <>
      {/* Reminder Banner for Android/Desktop */}
      {showReminderBanner && (
        <div className="fixed bottom-4 left-4 right-4 z-40 animate-in slide-in-from-bottom-5 duration-500 max-w-md mx-auto">
          <Card className="border border-border bg-card shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary">
                    <Download className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Install grabit2me App</p>
                    <p className="text-xs text-muted-foreground">Quick access, works offline, and faster!</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Button onClick={handleReminderInstall} size="sm">
                    Install
                  </Button>
                  <Button
                    onClick={handleReminderDismiss}
                    variant="ghost"
                    size="icon-sm"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Sheet open={showInstall} onOpenChange={setShowInstall}>
        <SheetContent side="bottom" className="h-auto bg-card border-t border-border p-6 rounded-t-lg">
          <div className="max-w-md mx-auto">
            <SheetHeader className="text-left mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary">
                  <Download className="w-5 h-5" />
                </div>
                <SheetTitle className="text-lg font-semibold text-foreground">Install grabit2me App</SheetTitle>
              </div>
              <SheetDescription className="text-xs text-muted-foreground">
                Install grabit2me for quick access and a native-like experience!
              </SheetDescription>
            </SheetHeader>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-4 border border-border p-3.5 bg-muted/30">
                <div className="shrink-0 w-8 h-8 bg-primary/10 flex items-center justify-center text-primary">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-foreground">Works Offline</h4>
                  <p className="text-muted-foreground text-xs font-medium">Access features even with unstable internet connection</p>
                </div>
              </div>

              <div className="flex items-start gap-4 border border-border p-3.5 bg-muted/30">
                <div className="shrink-0 w-8 h-8 bg-primary/10 flex items-center justify-center text-primary">
                  <Download className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-foreground">Lightning Fast</h4>
                  <p className="text-muted-foreground text-xs font-medium">Native application performance and responsiveness</p>
                </div>
              </div>
            </div>

            <SheetFooter className="flex flex-col gap-2">
              <Button onClick={handleInstallClick} className="w-full h-11 text-sm font-medium">
                Install Now
              </Button>
              <Button onClick={handleDismiss} variant="outline" className="w-full h-10 text-sm font-medium">
                Maybe Later
              </Button>
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
