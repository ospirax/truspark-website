import { hero, images, site } from "@/lib/site";
import MailLink from "./MailLink";
import { PhoneIcon, MailIcon, CheckIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="brand-wash relative overflow-hidden">
      <div className="block-grid absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <div>
            <p className="inline-flex items-center rounded-full bg-white/70 px-4 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-brand-purple ring-1 ring-brand-purple/15">
              {hero.eyebrow}
            </p>

            <h1 className="mt-5 text-balance text-[2.1rem] font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              {hero.headingBefore}{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">{hero.headingHighlight}</span>
                <span
                  className="absolute inset-x-0 bottom-1 z-0 h-3 bg-brand-yellow/70 sm:bottom-1.5 sm:h-4"
                  aria-hidden="true"
                />
              </span>{" "}
              {hero.headingAfter}
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
              {hero.body}
            </p>

            <ul className="mt-6 flex flex-col gap-3">
              {hero.points.map((point) => (
                <li key={point.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-brand-green text-white">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-[0.98rem] leading-snug">
                    <span className="font-semibold">{point.title}</span>
                    <span className="text-ink-soft"> — {point.body}</span>
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-purple px-7 py-4 text-base font-semibold text-white shadow-lg shadow-brand-purple/20 transition-colors hover:bg-brand-purple-dark"
              >
                <PhoneIcon className="h-5 w-5" />
                Call {site.phoneDisplay}
              </a>
              <MailLink className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-7 py-4 text-base font-semibold ring-1 ring-ink/10 transition-colors hover:ring-brand-purple">
                <MailIcon className="h-5 w-5" />
                Email us
              </MailLink>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -left-4 -top-4 hidden h-24 w-24 rounded-2xl bg-brand-blue sm:block"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-5 -right-4 hidden h-28 w-28 rounded-full bg-brand-yellow sm:block"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-8 left-10 hidden h-16 w-16 rounded-2xl bg-brand-pink lg:block"
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-4xl bg-white shadow-2xl shadow-brand-purple/15 ring-1 ring-white/60">
              <img
                {...images.hero}
                fetchPriority="high"
                className="h-70 w-full object-cover sm:h-95 lg:h-115"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
