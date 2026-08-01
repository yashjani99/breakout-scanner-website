import Link from "next/link";
import DownloadButton from "@/components/DownloadButton";
import RiskCallout from "@/components/RiskCallout";
import { MARKETS, SITE_NAME } from "@/lib/constants";

const FEATURES = [
  {
    title: "16 Global Markets",
    body: "Scan India, the US, Canada, the UK, Germany, France, Japan, Hong Kong, Australia, Brazil and more from one dropdown.",
  },
  {
    title: "Trend + Momentum Filters",
    body: "Every stock must trade above its 30, 50 and 200-day moving averages, with a strengthening Cumulative Average Return.",
  },
  {
    title: "Built-in Risk Management",
    body: "Automatic stop-loss (10-day swing low) plus T1 / T2 / T3 targets sized off your risk, not a guess.",
  },
  {
    title: "One-Click Export",
    body: "Send today's results straight to Excel or a formatted PDF for your own records.",
  },
  {
    title: "Fully Self-Contained",
    body: "The installer bundles Python and every dependency. No separate downloads, no configuration.",
  },
  {
    title: "Free & Transparent",
    body: "The scanning logic is plain, rules-based, and open on GitHub — no black box.",
  },
];

const RESULT_COLUMNS = ["Stock", "CMP", "200 DMA Dist %", "SL", "T1", "T2", "T3", "CAR Status"];
const RESULT_ROWS = [
  ["EXAMPLE_A", "2,850.00", "6.4", "2,610.00", "3,330.00", "3,570.00", "4,050.00", "Positive"],
  ["EXAMPLE_B", "148.20", "4.1", "139.50", "165.60", "174.30", "191.70", "Positive"],
  ["EXAMPLE_C", "61.35", "3.8", "58.10", "67.85", "71.10", "77.60", "Positive"],
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted">
            Windows 10 / 11 &middot; Free &middot; No account required
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {SITE_NAME}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-muted">
            A free desktop scanner that screens stocks across 16 markets for trend-strength
            breakouts, then hands you a stop-loss and three profit targets for every match —
            in a table you can export in one click.
          </p>

          <div className="mt-10">
            <DownloadButton id="download" />
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <RiskCallout />
        </div>
      </section>

      {/* Example output mockup */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <p className="mb-3 text-center text-xs font-medium uppercase tracking-wide text-muted">
          Illustrative example — not real market data
        </p>
        <div className="overflow-x-auto rounded-xl border border-border bg-surface shadow-2xl shadow-black/40">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-2 text-xs uppercase tracking-wide text-muted">
                {RESULT_COLUMNS.map((col) => (
                  <th key={col} className="px-4 py-3 font-medium">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {RESULT_ROWS.map((row) => (
                <tr key={row[0]} className="border-b border-border/60 last:border-0">
                  {row.map((cell, i) => (
                    <td
                      key={i}
                      className={`px-4 py-3 ${i === 0 ? "font-medium text-foreground" : "text-muted"}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-surface/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            Everything the scan needs, nothing it doesn&apos;t
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-border bg-surface p-6 transition hover:border-accent/40"
              >
                <h3 className="text-base font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              16 markets, one scanner
            </h2>
            <p className="mt-3 text-muted">
              Every market below runs the exact same rules-based scan, using free data from
              Yahoo Finance.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {MARKETS.map((m) => (
              <div
                key={m.name}
                className="flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-3 text-sm"
              >
                <span className="text-foreground">{m.name}</span>
                <span className="text-xs text-muted">{m.currency}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works teaser */}
      <section className="border-t border-border bg-surface/30 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            A simple, four-rule scan
          </h2>
          <p className="mt-4 text-muted">
            Price above the 30, 50 and 200-day moving averages, plus a strengthening trend
            confirmation — the same mechanical checklist for every market, every time.
          </p>
          <Link
            href="/how-it-works"
            className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
          >
            See exactly how the scan works →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Ready to try it?</h2>
          <p className="mt-3 text-muted">
            Install in under a minute. No sign-up, no subscription.
          </p>
          <div className="mt-8">
            <DownloadButton />
          </div>
          <div className="mt-10 text-left">
            <RiskCallout compact />
          </div>
        </div>
      </section>
    </div>
  );
}
