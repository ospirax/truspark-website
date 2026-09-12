function LogoMark({ className }) {
  return (
    <svg viewBox="0 0 180 240" className={className} role="img" aria-label="TruSpark">
      <rect x="60" y="0" width="60" height="60" fill="#46CEF4" />
      <rect x="60" y="60" width="60" height="60" fill="#783FAA" />
      <rect x="60" y="120" width="60" height="60" fill="#ED196A" />
      <path d="M60 180 H120 V240 H92 A32 32 0 0 1 60 208 Z" fill="#F8992F" />
      <circle cx="30" cy="90" r="29" fill="#63B858" />
      <rect x="120" y="60" width="60" height="60" fill="#4A73CE" />
      <circle cx="150" cy="210" r="29" fill="#FFD004" />
    </svg>
  );
}

export function Logo({ markClass = "h-9 w-auto" }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className={markClass} />
      <span className="flex flex-col leading-none">
        <span className="text-[1.35rem] font-bold tracking-tight text-ink">TruSpark</span>
        <span className="mt-1 text-[0.62rem] font-medium uppercase tracking-[0.14em] text-ink-soft">
          For a Limitless Tomorrow
        </span>
      </span>
    </span>
  );
}
