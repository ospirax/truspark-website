import { faq } from "@/lib/site";
import { Section, Eyebrow, Heading } from "./ui";

export default function Faq() {
  return (
    <div className="brand-wash">
      <Section id="faq" className="py-8 sm:py-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Eyebrow color="indigo">{faq.eyebrow}</Eyebrow>
            <Heading className="mt-3">{faq.heading}</Heading>
          </div>

          <div className="flex flex-col gap-3">
            {faq.items.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl bg-white px-6 py-5 ring-1 ring-ink/5 open:ring-brand-purple/25"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-semibold leading-snug">
                  {item.q}
                  <span
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-purple-50 text-brand-purple transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-pretty text-[0.97rem] leading-relaxed text-ink-soft">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
