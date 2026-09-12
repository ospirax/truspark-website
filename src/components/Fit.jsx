import { fit, images } from "@/lib/site";
import { Section, Eyebrow, Heading, Lead, accent } from "./ui";
import { CheckIcon } from "./Icons";

export default function Fit() {
  return (
    <div className="brand-wash">
      <Section id="fit" className="py-8 sm:py-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
          <div className="relative order-2 lg:order-1">
            <div
              className="absolute -left-5 -top-5 hidden h-20 w-20 rounded-2xl bg-brand-green sm:block"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-4xl shadow-xl shadow-ink/10">
              <img
                {...images.classroom}
                loading="lazy"
                decoding="async"
                className="h-64 w-full object-cover sm:h-100"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Eyebrow color="green">{fit.eyebrow}</Eyebrow>
            <Heading className="mt-3">{fit.heading}</Heading>
            <Lead className="mt-4">{fit.body}</Lead>

            <ul className="mt-7 flex flex-col gap-5">
              {fit.pillars.map((pillar, index) => (
                <li key={pillar.title} className="flex gap-4">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-base font-bold text-white ${accent[pillar.color]}`}
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold leading-tight">{pillar.title}</h3>
                    <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-soft">
                      {pillar.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-4xl bg-ink px-7 py-7 text-white sm:px-9 sm:py-8">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/55">
            {fit.outcomes.title}
          </h3>
          <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-4">
            {fit.outcomes.items.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-lg font-medium">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-yellow text-ink">
                  <CheckIcon className="h-4 w-4" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </div>
  );
}
