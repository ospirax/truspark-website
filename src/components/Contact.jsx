import { contact, site, images } from "@/lib/site";
import { Section, Eyebrow, Heading, Lead } from "./ui";
import MailLink from "./MailLink";
import { PhoneIcon, MailIcon, ArrowIcon } from "./Icons";

export default function Contact() {
  return (
    <Section id="contact" className="py-8 sm:py-10">
      <div className="overflow-hidden rounded-[2.5rem] bg-ink">
        <div className="grid lg:grid-cols-[1.15fr_1fr]">
          <div className="p-7 sm:p-9 lg:p-10">
            <Eyebrow color="yellow">
              <span className="text-white/55">{contact.eyebrow}</span>
            </Eyebrow>
            <Heading className="mt-3 text-white">{contact.heading}</Heading>
            <Lead className="mt-4 text-white/70">{contact.body}</Lead>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-white/55">
              Talk to us
            </h3>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {contact.actions.map((action) => (
                <MailLink
                  key={action.key}
                  enquiry={action.key}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-white/20 px-5 py-4 text-base font-semibold text-white transition-colors hover:border-brand-yellow hover:bg-white/5"
                >
                  {action.label}
                  <ArrowIcon className="h-5 w-5 shrink-0 text-brand-yellow transition-transform group-hover:translate-x-1" />
                </MailLink>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.phoneHref}
                className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full bg-brand-yellow px-7 py-4 text-base font-semibold text-ink transition-transform hover:scale-[1.02]"
              >
                <PhoneIcon className="h-5 w-5" />
                {site.phoneDisplay}
              </a>
              <MailLink className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full border border-white/25 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10">
                <MailIcon className="h-5 w-5" />
                {site.email}
              </MailLink>
            </div>
          </div>

          <div className="relative min-h-60 lg:min-h-full">
            <img
              src={images.closing.src}
              alt={images.closing.alt}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
