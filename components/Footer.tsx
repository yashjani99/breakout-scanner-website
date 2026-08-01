import Link from "next/link";
import {
  APP_REPO_URL,
  AUTHOR_NAME,
  AUTHOR_URL,
  LEGAL_LINKS,
  NAV_LINKS,
  SITE_NAME,
} from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-foreground">{SITE_NAME}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              A free, educational breakout scanner covering 16 global stock markets.
              Not financial advice.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              Product
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-muted hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={APP_REPO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted hover:text-foreground"
                >
                  Source on GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              Legal
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {LEGAL_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-muted hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row">
          <p>
            &copy; {year} {SITE_NAME}. All rights reserved.
          </p>
          <p>
            Developed by{" "}
            <a
              href={AUTHOR_URL}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-accent hover:underline"
            >
              {AUTHOR_NAME}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
