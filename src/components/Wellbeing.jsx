import { wellbeing, images } from "@/lib/site";
import { Section, Eyebrow, Heading, Lead } from "./ui";
import { ArrowIcon } from "./Icons";

export default function Wellbeing() {
  return (
    <Section id="wellbeing" className="py-8 sm:py-10">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        <div>
          <Eyebrow color="pink">{wellbeing.eyebrow}</Eyebrow>
          <Heading className="mt-3">{wellbeing.heading}</Heading>
          <Lead className="mt-4">{wellbeing.body}</Lead>

          <p className="mt-6 rounded-2xl bg-brand-pink-50 p-6 text-[0.97rem] italic leading-relaxed text-brand-pink-dark">
            {wellbeing.method}
          </p>

          <div className="mt-7 overflow-hidden rounded-[1.75rem]">
            <img
              {...images.wellbeing}
              loading="lazy"
              decoding="async"
              className="h-52 w-full object-cover sm:h-64"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="rounded-[1.75rem] bg-white p-7 ring-1 ring-ink/8 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">
              What We Help With
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {wellbeing.concerns.map((concern) => (
                <li
                  key={concern}
                  className="rounded-full bg-brand-pink-50 px-4 py-2 text-[0.9rem] font-medium text-brand-pink-dark"
                >
                  {concern}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center" aria-hidden="true">
            <span className="flex h-11 w-11 rotate-90 items-center justify-center rounded-full bg-brand-purple text-white">
              <ArrowIcon className="h-5 w-5" />
            </span>
          </div>

          <div className="rounded-[1.75rem] bg-ink p-7 text-white sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white/55">
              What the Child Builds
            </h3>
            <ul className="mt-5 flex flex-col gap-3.5">
              {wellbeing.builds.map((item) => (
                <li key={item} className="flex items-center gap-3 text-lg font-medium">
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-[3px] bg-brand-yellow"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
