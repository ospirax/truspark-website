import { site, nav } from "@/lib/site";
import { Logo } from "./Logo";
import MailLink from "./MailLink";
import { PhoneIcon, MailIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-9 sm:px-8 lg:px-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo markClass="h-11 w-auto" />
            <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-ink-soft">
              Targeted, individualised academic, behavioural and emotional support for children
              who find learning difficult.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">
              Explore
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[0.95rem] transition-colors hover:text-brand-purple"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">
              Contact
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2.5 text-[0.95rem] font-medium transition-colors hover:text-brand-purple"
                >
                  <PhoneIcon className="h-4 w-4 text-brand-purple" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <MailLink className="inline-flex items-center gap-2.5 text-[0.95rem] font-medium transition-colors hover:text-brand-purple">
                  <MailIcon className="h-4 w-4 text-brand-purple" />
                  {site.email}
                </MailLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-soft">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-sm text-ink-soft">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
