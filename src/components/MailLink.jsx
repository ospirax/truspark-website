import { useEffect, useRef, useState } from "react";
import { site, enquiries, compose } from "@/lib/site";
import { MailIcon, CheckIcon } from "./Icons";

// How long to give a mail client to take over the tab. Still focused after
// this and nothing handled the mailto, so we offer webmail instead.
const HANDOFF_GRACE_MS = 1000;

export default function MailLink({ enquiry = "general", className, children }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const handoff = useRef(null);
  const copyReset = useRef(null);
  const message = enquiries[enquiry];

  useEffect(
    () => () => {
      clearTimeout(handoff.current);
      clearTimeout(copyReset.current);
    },
    [],
  );

  useEffect(() => {
    if (!open) return;

    const onKey = (event) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // The anchor keeps its real mailto href, so it still works with no JS, and
  // right-click → copy address behaves the way people expect.
  const handleClick = () => {
    clearTimeout(handoff.current);

    // Either event means something outside the tab took the click. One abort
    // drops both listeners, so the first to fire cannot leave the other behind.
    const watching = new AbortController();
    const { signal } = watching;

    const handedOff = () => {
      clearTimeout(handoff.current);
      watching.abort();
    };

    window.addEventListener("blur", handedOff, { signal });
    document.addEventListener("visibilitychange", handedOff, { signal });

    handoff.current = setTimeout(() => {
      watching.abort();
      setOpen(true);
    }, HANDOFF_GRACE_MS);
  };

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      copyReset.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked; the address is on screen to select by hand.
    }
  };

  return (
    <>
      <a href={compose.mail(message)} onClick={handleClick} className={className}>
        {children}
      </a>

      {open && (
        <div
          className="fixed inset-0 z-100 flex items-end justify-center bg-ink/50 p-4 sm:items-center"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="mail-fallback-title"
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-md rounded-[1.75rem] bg-white p-7 shadow-2xl sm:p-8"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-purple text-white">
              <MailIcon className="h-6 w-6" />
            </span>

            <h2 id="mail-fallback-title" className="mt-4 text-xl font-semibold">
              Send us an email
            </h2>
            <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-soft">
              Your browser didn&rsquo;t open a mail app. Pick where you read your email and
              we&rsquo;ll open it there, with the message already written.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href={compose.gmail(message)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-brand-purple px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-purple-dark"
              >
                Open in Gmail
              </a>
              <a
                href={compose.outlook(message)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-3.5 text-base font-semibold transition-colors hover:border-brand-purple hover:text-brand-purple"
              >
                Open in Outlook
              </a>
            </div>

            <div className="mt-6 border-t border-ink/10 pt-5">
              <p className="text-sm text-ink-soft">Or write to us at</p>
              <div className="mt-2 flex items-center justify-between gap-4">
                <span className="select-all text-base font-semibold">{site.email}</span>
                <button
                  type="button"
                  onClick={copyAddress}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand-purple-50 px-4 py-2 text-sm font-semibold text-brand-purple transition-colors hover:bg-brand-purple hover:text-white"
                >
                  {copied ? (
                    <>
                      <CheckIcon className="h-3.5 w-3.5" />
                      Copied
                    </>
                  ) : (
                    "Copy"
                  )}
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-6 w-full text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
