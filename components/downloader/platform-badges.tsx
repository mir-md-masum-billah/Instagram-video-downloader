import { Instagram, Twitter } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function PlatformBadges() {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 mb-6">
      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Supported Platforms</span>
      <div className="flex items-center justify-center gap-3">
        <Badge variant="secondary" className="px-3 py-1 flex items-center gap-1.5 text-xs font-medium border border-border">
          <Instagram className="w-3.5 h-3.5 text-[#e1306c]" />
          <span>Instagram</span>
        </Badge>
        <Badge variant="secondary" className="px-3 py-1 flex items-center gap-1.5 text-xs font-medium border border-border">
          {/* Simple X icon or Twitter */}
          <Twitter className="w-3.5 h-3.5 text-foreground" />
          <span>X / Twitter</span>
        </Badge>
      </div>
    </div>
  );
}
