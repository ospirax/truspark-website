const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

export function PhoneIcon({ className = "h-5 w-5" }) {
  return (
    <svg {...base} className={className}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

export function MailIcon({ className = "h-5 w-5" }) {
  return (
    <svg {...base} className={className}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2.5 6 9.5 7 9.5-7" />
    </svg>
  );
}

export function EarIcon({ className = "h-6 w-6" }) {
  return (
    <svg {...base} className={className}>
      <path d="M6 8.5a6 6 0 1 1 12 0c0 3.5-2.5 4.4-3.6 6.1-.8 1.3-.4 3-1.6 3.9a3 3 0 0 1-4.6-1.6" />
      <path d="M9.5 8.8a2.5 2.5 0 1 1 4.2 1.9" />
    </svg>
  );
}

export function EyeIcon({ className = "h-6 w-6" }) {
  return (
    <svg {...base} className={className}>
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function HandIcon({ className = "h-6 w-6" }) {
  return (
    <svg {...base} className={className}>
      <path d="M9 11V4.5a1.5 1.5 0 0 1 3 0V11" />
      <path d="M12 10.5V3.8a1.5 1.5 0 0 1 3 0V11" />
      <path d="M15 11V6.3a1.5 1.5 0 0 1 3 0V14a7 7 0 0 1-7 7h-.6a6 6 0 0 1-4.5-2.1L3.4 15a1.5 1.5 0 0 1 2.3-2L9 16" />
      <path d="M9 11V9.5a1.5 1.5 0 0 0-3 0V15" />
    </svg>
  );
}

export function CheckIcon({ className = "h-5 w-5" }) {
  return (
    <svg {...base} className={className}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-5 w-5" }) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function BrainIcon({ className = "h-6 w-6" }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 5.5a3 3 0 0 0-5.7-1.3A2.8 2.8 0 0 0 4 7a2.9 2.9 0 0 0 .5 1.6A3 3 0 0 0 5 14.3v.4a3 3 0 0 0 4.3 2.7A2.7 2.7 0 0 0 12 19Z" />
      <path d="M12 5.5a3 3 0 0 1 5.7-1.3A2.8 2.8 0 0 1 20 7a2.9 2.9 0 0 1-.5 1.6A3 3 0 0 1 19 14.3v.4a3 3 0 0 1-4.3 2.7A2.7 2.7 0 0 1 12 19Z" />
      <path d="M12 5.5V19" />
    </svg>
  );
}

export function BookIcon({ className = "h-6 w-6" }) {
  return (
    <svg {...base} className={className}>
      <path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H11a2 2 0 0 1 2 2v14a1.5 1.5 0 0 0-1.5-1.5H5.5A1.5 1.5 0 0 1 4 16Z" />
      <path d="M20 4.5A1.5 1.5 0 0 0 18.5 3H15a2 2 0 0 0-2 2v14a1.5 1.5 0 0 1 1.5-1.5h4A1.5 1.5 0 0 0 20 16Z" />
    </svg>
  );
}

export function TargetIcon({ className = "h-6 w-6" }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}

export function HeartIcon({ className = "h-6 w-6" }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 20s-7.5-4.4-7.5-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.6c0 5-7.5 9.4-7.5 9.4Z" />
    </svg>
  );
}
