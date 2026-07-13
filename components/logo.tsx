import type React from "react";

export const LogoIcon = (props: React.ComponentProps<"svg">) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-ember-glow"
    {...props}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

export const Logo = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={`flex items-center gap-2 select-none ${className}`} {...props}>
    <div className="w-6 h-6 rounded-full bg-ember-glow flex items-center justify-center text-white shadow-subtle">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-3.5 h-3.5"
      >
        <polyline points="8 17 12 21 16 17" />
        <line x1="12" x2="12" y1="21" y2="9" />
      </svg>
    </div>
    <span className="font-heading font-bold text-lg sm:text-xl tracking-tight text-jet-black">insta</span><span className="text-ember-glow">Downloader</span>
    </span>
  </div>
);
