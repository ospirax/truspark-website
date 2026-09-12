import { process, outcome } from "@/lib/site";
import { Section, Eyebrow, Heading, accent } from "./ui";

export default function Process() {
  return (
    <Section id="process" className="py-8 sm:py-10">
      <div className="max-w-3xl">
        <Eyebrow color="orange">{process.eyebrow}</Eyebrow>
        <Heading className="mt-3">{process.heading}</Heading>
      </div>

      <ol className="mt-6 grid gap-px overflow-hidden rounded-[1.75rem] bg-ink/8 sm:grid-cols-2 xl:grid-cols-5">
        {process.steps.map((step, index) => (
          <li key={step.title} className="flex flex-col bg-white p-6">
            <span
              className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold text-white ${accent[step.color]}`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-lg font-semibold leading-tight">{step.title}</h3>
            <p className="mt-2.5 text-[0.92rem] leading-relaxed text-ink-soft">{step.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-8 rounded-[2rem] bg-brand-yellow-50 p-7 sm:p-9">
        <Eyebrow color="yellow">{outcome.eyebrow}</Eyebrow>

        <div className="mt-5 grid gap-6 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-12">
          <p className="text-5xl font-bold tracking-tight text-brand-purple sm:text-6xl">
            {outcome.timeframe}
          </p>
          <div>
            <h3 className="text-balance text-2xl font-bold leading-tight sm:text-3xl">
              {outcome.heading}
            </h3>
            <p className="mt-3 text-pretty leading-relaxed text-ink-soft sm:text-lg">
              {outcome.body}
            </p>
          </div>
        </div>

        <p className="mt-7 border-t border-brand-purple/15 pt-6 text-balance text-xl font-semibold leading-snug sm:text-2xl">
          {outcome.goalBefore}{" "}
          <span className="text-brand-purple">{outcome.goalAfter}</span>
        </p>
      </div>
    </Section>
  );
}
