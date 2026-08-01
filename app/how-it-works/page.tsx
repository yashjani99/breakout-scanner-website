import type { Metadata } from "next";
import RiskCallout from "@/components/RiskCallout";

export const metadata: Metadata = {
  title: "How It Works",
  description: "The exact rules-based logic behind the Breakout Scanner Global Markets scan.",
};

const FILTERS = [
  {
    title: "Price above the 30-day moving average",
    body: "The stock's current price must be trading above its own 30-day simple moving average — a short-term uptrend check.",
  },
  {
    title: "Price above the 50-day moving average",
    body: "Same idea, over a medium-term window. Combined with the 30-DMA check, this filters out stocks that just spiked.",
  },
  {
    title: "Price above the 200-day moving average",
    body: "The classic long-term trend filter. A stock below its 200-DMA is excluded outright, regardless of short-term momentum.",
  },
  {
    title: "Strengthening trend (CAR)",
    body: "Starting from the stock's highest point in the last year, the scanner tracks a Cumulative Average Return (an expanding average of daily closes). If that average has been rising for the last 10 straight days, the trend is scored \"Positive\" — meaning momentum is still building, not fading.",
  },
];

const RISK_STEPS = [
  {
    title: "Stop-loss (SL)",
    formula: "SL = lowest low of the last 10 trading days",
    body: "A swing-low based stop: the level at which the setup is considered invalidated.",
  },
  {
    title: "Risk",
    formula: "Risk = Entry (current price) − SL",
    body: "The per-share amount at stake if the stop is hit.",
  },
  {
    title: "T1 — first target",
    formula: "T1 = Entry + (2 × Risk)",
    body: "A conservative first target, roughly a 2:1 reward-to-risk level.",
  },
  {
    title: "T2 — primary target",
    formula: "T2 = Entry + (3 × Risk)",
    body: "The scanner's main target — a 3:1 reward-to-risk level.",
  },
  {
    title: "T3 — aggressive target",
    formula: "T3 = Entry + (5 × Risk)",
    body: "A stretch target for holding a partial position longer.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-foreground sm:text-4xl">How It Works</h1>
      <p className="mt-4 text-muted">
        Every market runs through the exact same four filters and the same risk formula. Nothing
        is discretionary — the whole scan is a fixed, mechanical checklist.
      </p>

      <h2 className="mt-14 text-xl font-semibold text-foreground">
        Step 1 — Four filters, all must pass
      </h2>
      <div className="mt-6 space-y-6">
        {FILTERS.map((f, i) => (
          <div key={f.title} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-accent">
              {i + 1}
            </span>
            <div>
              <h3 className="font-medium text-foreground">{f.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{f.body}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm leading-relaxed text-muted">
        A stock only appears in the results table if it clears all four filters on that day.
        Stocks with less than 200 trading days of history are skipped entirely — there isn&apos;t
        enough data to compute the 200-DMA.
      </p>

      <h2 className="mt-14 text-xl font-semibold text-foreground">
        Step 2 — Stop-loss and targets
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        For every stock that passes the filters, the scanner derives a stop-loss and three
        upside targets purely from recent price action:
      </p>
      <div className="mt-6 overflow-hidden rounded-xl border border-border">
        {RISK_STEPS.map((r, i) => (
          <div
            key={r.title}
            className={`px-5 py-4 ${i % 2 === 0 ? "bg-surface" : "bg-surface-2"}`}
          >
            <p className="font-medium text-foreground">{r.title}</p>
            <p className="mt-1 font-mono text-xs text-accent">{r.formula}</p>
            <p className="mt-1 text-sm text-muted">{r.body}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-14 text-xl font-semibold text-foreground">Where the data comes from</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        All prices are fetched directly from Yahoo Finance at scan time (typically two years of
        daily history per ticker). Data can be delayed, incomplete, or occasionally wrong —
        the scanner has no way to independently verify it.
      </p>

      <h2 className="mt-14 text-xl font-semibold text-foreground">What this is — and isn&apos;t</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        This is a trend-following breakout screen: a way to mechanically narrow a large universe
        of stocks down to the ones showing strength on a specific, fixed definition. It does not
        predict the future, does not account for news, fundamentals, valuation, or your personal
        risk tolerance, and it is not a recommendation to buy or sell anything.
      </p>

      <div className="mt-10">
        <RiskCallout />
      </div>
    </div>
  );
}
