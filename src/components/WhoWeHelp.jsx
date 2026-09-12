import { whoWeHelp, images } from "@/lib/site";
import { Section, Eyebrow, Heading, Lead, accent } from "./ui";

export default function WhoWeHelp() {
  return (
    <Section id="who-we-help" className="py-8 sm:py-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-10">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Eyebrow color="blue">{whoWeHelp.eyebrow}</Eyebrow>
          <Heading className="mt-3">{whoWeHelp.heading}</Heading>
          <Lead className="mt-4">{whoWeHelp.intro}</Lead>

          <div className="mt-7 overflow-hidden rounded-[1.75rem]">
            <img
              {...images.writing}
              loading="lazy"
              decoding="async"
              className="h-52 w-full object-cover sm:h-60"
            />
          </div>

          <p className="mt-6 text-pretty text-lg font-semibold leading-snug">
            {whoWeHelp.closing}
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {whoWeHelp.items.map((item) => (
            <li
              key={item.title}
              className="relative overflow-hidden rounded-2xl border border-ink/8 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-ink/5"
            >
              <span
                className={`absolute left-0 top-0 h-full w-1.5 ${accent[item.color]}`}
                aria-hidden="true"
              />
              <h3 className="pl-3 text-lg font-semibold leading-snug">{item.title}</h3>
              <p className="mt-2.5 pl-3 text-[0.95rem] leading-relaxed text-ink-soft">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
