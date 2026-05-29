import { Instagram, Twitter } from 'lucide-react';

export function PlatformBadges() {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 mb-6">
      <span className="text-[10px] font-bold text-steel-gray uppercase tracking-wider font-inter">
        Supported Platforms
      </span>
      <div className="flex items-center justify-center gap-3">
        <div className="px-3 py-1.5 flex items-center gap-1.5 text-xs font-medium bg-white text-jet-black border border-cloud-gray rounded-full shadow-subtle font-inter hover:border-cool-gray transition-colors">
          <Instagram className="w-3.5 h-3.5 text-[#e1306c]" />
          <span>Instagram</span>
        </div>
        <div className="px-3 py-1.5 flex items-center gap-1.5 text-xs font-medium bg-white text-jet-black border border-cloud-gray rounded-full shadow-subtle font-inter hover:border-cool-gray transition-colors">
          {/* Simple X icon */}
          <svg className="w-3 h-3 text-jet-black fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span>X / Twitter</span>
        </div>
      </div>
    </div>
  );
}
