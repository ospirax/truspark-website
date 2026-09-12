import { audiences, images } from "@/lib/site";
import { Section, Eyebrow, Heading, accent } from "./ui";
import MailLink from "./MailLink";
import { ArrowIcon } from "./Icons";

export default function Audiences() {
  return (
    <div className="bg-brand-purple-50">
      <Section id="audiences" className="py-8 sm:py-10">
        <div className="max-w-3xl">
          <Eyebrow color="yellow">{audiences.eyebrow}</Eyebrow>
          <Heading className="mt-3">{audiences.heading}</Heading>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {audiences.cards.map((card) => (
            <article
              key={card.key}
              className="flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-ink/8"
            >
              <div className="relative">
                <img
                  {...images[card.key]}
                  loading="lazy"
                  decoding="async"
                  className="h-52 w-full object-cover sm:h-60"
                />
                <span
                  className={`absolute bottom-0 left-0 h-1.5 w-full ${accent[card.color]}`}
                  aria-hidden="true"
                />
              </div>

              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-soft">
                  {card.label}
                </h3>
                <p className="mt-4 text-pretty text-lg leading-relaxed">{card.body}</p>

                {/* mt-auto pins the CTA row to the bottom of the card so the two
                    buttons line up, even though the copy above them runs to a
                    different number of lines. */}
                <div className="mt-auto pt-6">
                  <MailLink
                    enquiry={card.enquiry}
                    className="group inline-flex w-fit items-center gap-2.5 rounded-full bg-brand-purple px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-purple-dark"
                  >
                    {card.cta}
                    <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </MailLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
