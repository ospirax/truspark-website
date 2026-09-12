// Written out in full because Tailwind only detects class names that appear
// as literal strings in the source.
export const accent = {
  purple: "bg-brand-purple",
  blue: "bg-brand-blue",
  pink: "bg-brand-pink",
  yellow: "bg-brand-yellow",
  orange: "bg-brand-orange",
  green: "bg-brand-green",
  indigo: "bg-brand-indigo",
};

export function Section({ id, className = "", children }) {
  return (
    <section id={id} className={className}>
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, color = "purple" }) {
  return (
    <p className="flex items-center gap-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">
      <span className={`inline-block h-2.5 w-2.5 rounded-[3px] ${accent[color]}`} />
      {children}
    </p>
  );
}

export function Heading({ children, className = "", as: Tag = "h2" }) {
  return (
    <Tag
      className={`text-balance text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem] ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Lead({ children, className = "" }) {
  return (
    <p className={`text-pretty text-lg leading-relaxed text-ink-soft ${className}`}>
      {children}
    </p>
  );
}
