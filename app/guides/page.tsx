import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Plain-English guides to breakout trading, RSI, moving averages, and risk management — the concepts behind every strategy on this site.",
};

export default function GuidesIndexPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Guides</h1>
      <p className="mt-4 text-muted">
        The concepts behind every strategy on this site, explained from first principles — no
        prior trading knowledge assumed.
      </p>

      <div className="mt-10 space-y-4">
        {GUIDES.map((g) => (
          <Link
            key={g.slug}
            href={`/guides/${g.slug}`}
            className="block rounded-xl border border-border bg-surface p-6 transition hover:border-accent/40"
          >
            <h2 className="text-lg font-semibold text-foreground">{g.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{g.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
