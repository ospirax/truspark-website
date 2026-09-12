import { understand, images } from "@/lib/site";
import { Section, Eyebrow, Heading, Lead, accent } from "./ui";
import { BrainIcon, BookIcon, TargetIcon, HeartIcon } from "./Icons";

const icons = {
  brain: BrainIcon,
  book: BookIcon,
  target: TargetIcon,
  heart: HeartIcon,
};

export default function Understand() {
  return (
    <div className="brand-wash">
      <Section id="understand" className="py-8 sm:py-10">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
          <div>
            <Eyebrow color="purple">{understand.eyebrow}</Eyebrow>
            <Heading className="mt-3">{understand.heading}</Heading>
            <Lead className="mt-4 max-w-2xl">{understand.intro}</Lead>

            <ul className="mt-7 grid gap-4 sm:grid-cols-2">
              {understand.areas.map((area) => {
                const Icon = icons[area.icon];

                return (
                  <li
                    key={area.title}
                    className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5"
                  >
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-xl text-white ${accent[area.color]}`}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold leading-snug">{area.title}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                      {area.body}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-[1.75rem] shadow-xl shadow-brand-purple/10">
              <img
                {...images.assessment}
                loading="lazy"
                decoding="async"
                className="h-64 w-full object-cover sm:h-80 lg:h-96"
              />
            </div>

            <p className="rounded-[1.75rem] border-l-[6px] border-brand-purple bg-white p-6 text-pretty leading-relaxed sm:text-lg">
              {understand.closing}
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
