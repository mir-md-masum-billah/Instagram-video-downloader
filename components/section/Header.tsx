"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { useScroll } from "@/hooks/use-scroll";
import { Star } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const navLinks = [
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export function Header() {
  const pathname = usePathname();
  const scrolled = useScroll(10);
  const [stars, setStars] = React.useState<string>("128");

  React.useEffect(() => {
    fetch("https://api.github.com/repos/rudranboitei/Grabit2me")
      .then((res) => res.json())
      .then((data) => {
        if (data.stargazers_count !== undefined) {
          setStars(Number(data.stargazers_count).toLocaleString());
        }
      })
      .catch((err) => console.error("Error fetching GitHub stars:", err));
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <TooltipProvider delayDuration={150}>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 px-4 py-4 md:py-6",
          scrolled ? "backdrop-blur-md py-3" : ""
        )}
      >
        <nav
          className={cn(
            "mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4 sm:px-6 rounded-full border bg-white/80 backdrop-blur-md transition-all duration-300 shadow-subtle",
            scrolled ? "border-cloud-gray bg-white/95" : "border-cloud-gray/80 bg-white/80"
          )}
        >
          {/* Left Side: Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="rounded-full p-2 hover:bg-ash-gray/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Logo className="h-5 text-ink-black" />
            </Link>
          </div>

          {/* Right Section: Navigation Links & GitHub Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Desktop Navigation Links */}
            <div className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors font-inter focus-visible:outline-none focus-visible:underline",
                      active
                        ? "text-jet-black font-semibold"
                        : "text-steel-gray hover:text-jet-black"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Vertical Divider (Desktop Only) */}
            <div className="hidden h-5 w-px bg-cloud-gray md:block" />

            {/* GitHub Star Button with SVG icon and live stargazers count */}
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://github.com/rudranboitei/Grabit2me"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer inline-flex items-center justify-center h-9 gap-2 px-3.5 rounded-full border border-cloud-gray bg-white text-jet-black hover:bg-ash-gray hover:border-cool-gray transition-all duration-200 shadow-subtle focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary outline-none"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4.5 text-ink-black"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="h-4 w-px bg-cloud-gray" />
                  <div className="flex items-center gap-1">
                    <Star className="size-3.5 fill-ember-glow text-ember-glow" />
                    <span className="text-[11px] font-bold font-inter text-jet-black leading-none">
                      {stars}
                    </span>
                  </div>
                </a>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={8}>
                Star on GitHub
              </TooltipContent>
            </Tooltip>
          </div>
        </nav>
      </header>
    </TooltipProvider>
  );
}
