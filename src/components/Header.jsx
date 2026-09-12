import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { site, nav } from "@/lib/site";
import MailLink from "./MailLink";
import { PhoneIcon, MailIcon } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Going from the mobile breakpoint to desktop would otherwise leave the
  // drop-down panel open underneath the full nav.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1280px)");
    const close = (e) => e.matches && setOpen(false);
    query.addEventListener("change", close);
    return () => query.removeEventListener("change", close);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-white">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-6 px-5 py-3 sm:px-8 lg:px-12">
        <a href="#top" aria-label="TruSpark home" className="shrink-0">
          <Logo markClass="h-10 w-auto" />
        </a>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Main">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[0.92rem] font-medium text-ink-soft transition-colors hover:text-brand-purple"
            >
              {item.short ?? item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <MailLink className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-ink/15 px-4 py-2.5 text-sm font-semibold transition-colors hover:border-brand-purple hover:text-brand-purple">
            <MailIcon className="h-4 w-4" />
            Email us
          </MailLink>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brand-purple px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-purple-dark"
          >
            <PhoneIcon className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 xl:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-ink/10 bg-white px-5 pb-6 pt-2 sm:px-8 lg:px-12 xl:hidden"
        >
          <nav className="flex flex-col" aria-label="Main">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/8 py-3.5 text-base font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 flex flex-col gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-purple px-5 py-3.5 text-base font-semibold text-white"
            >
              <PhoneIcon className="h-5 w-5" />
              {site.phoneDisplay}
            </a>
            <MailLink className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 px-5 py-3.5 text-base font-semibold">
              <MailIcon className="h-5 w-5" />
              {site.email}
            </MailLink>
          </div>
        </div>
      )}
    </header>
  );
}
