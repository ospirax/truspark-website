import { strengthen, images } from "@/lib/site";
import { Section, Eyebrow, Heading, Lead, accent } from "./ui";
import { EarIcon, EyeIcon, HandIcon } from "./Icons";

const icons = {
  auditory: EarIcon,
  visual: EyeIcon,
  kinesthetic: HandIcon,
};

export default function Strengthen() {
  return (
    <Section id="strengthen" className="py-8 sm:py-10">
      <div className="max-w-3xl">
        <Eyebrow color="pink">{strengthen.eyebrow}</Eyebrow>
        <Heading className="mt-3">{strengthen.heading}</Heading>
        <Lead className="mt-4">{strengthen.intro}</Lead>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {strengthen.modes.map((mode) => {
          const Icon = icons[mode.key];

          return (
            <article
              key={mode.key}
              className="flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-ink/8"
            >
              <div className="relative">
                <img
                  {...images[mode.key]}
                  loading="lazy"
                  decoding="async"
                  className="h-44 w-full object-cover"
                />
                <span
                  className={`absolute bottom-0 left-0 h-1.5 w-full ${accent[mode.color]}`}
                  aria-hidden="true"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white ${accent[mode.color]}`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-semibold">{mode.title}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-soft">{mode.body}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {strengthen.skills.map((group) => (
          <div
            key={group.title}
            className="rounded-[1.75rem] bg-brand-purple-50 p-6 sm:p-7"
          >
            <h3 className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">
              <span
                className={`inline-block h-2.5 w-2.5 rounded-[3px] ${accent[group.color]}`}
                aria-hidden="true"
              />
              {group.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-white px-4 py-2 text-[0.95rem] font-medium ring-1 ring-ink/8"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
