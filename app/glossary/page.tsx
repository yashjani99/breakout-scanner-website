import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Glossary",
  description:
    "Plain-English definitions of the trading terms used throughout this site — RSI, moving averages, breakouts, stop-loss, risk-reward, and more.",
};

const TERMS: { term: string; definition: string }[] = [
  {
    term: "Breakout",
    definition:
      "A move where price closes beyond a previously well-tested level — resistance, a trendline, or a key moving average — suggesting a new trend may be starting.",
  },
  {
    term: "CAR (Cumulative Average Return)",
    definition:
      "An expanding average of closing prices calculated from a stock's most recent 52-week high onward. This scanner treats a rising CAR over the last 10 days as a sign that momentum is still building rather than fading.",
  },
  {
    term: "Confluence",
    definition:
      "When two or more independent signals or strategies agree on the same stock at the same time. On this site, the Confluence strategy reports only stocks that pass both the Breakout and RSI 5-Star filters at once.",
  },
  {
    term: "DMA (Day Moving Average)",
    definition:
      "Shorthand for a moving average measured over a given number of trading days — e.g. \"200 DMA\" means the 200-day moving average. See the moving averages guide for how it's calculated.",
  },
  {
    term: "Golden Cross / Death Cross",
    definition:
      "A golden cross is when a shorter moving average (commonly the 50-day) crosses above a longer one (commonly the 200-day), often read as a bullish trend-change signal. A death cross is the reverse.",
  },
  {
    term: "Overbought / Oversold",
    definition:
      "Traditional RSI thresholds — above 70 is called overbought, below 30 oversold. They describe strong recent momentum, not a guaranteed reversal; strong trends can stay overbought or oversold for extended periods.",
  },
  {
    term: "Position Sizing",
    definition:
      "Deciding how many shares to buy based on your account's risk tolerance and the per-share risk on a trade, so the dollar amount at stake stays consistent across different trades.",
  },
  {
    term: "Pullback",
    definition:
      "A temporary, usually shallow, move against the prevailing trend — a pause rather than a reversal. Several strategies look for a pullback within an otherwise strong trend as an entry opportunity.",
  },
  {
    term: "Risk-Reward Ratio",
    definition:
      "The potential reward on a trade divided by the potential risk. A 3:1 ratio means the target is three times as far from entry as the stop-loss is.",
  },
  {
    term: "RSI (Relative Strength Index)",
    definition:
      "A momentum oscillator (0–100) developed by J. Welles Wilder that measures the speed and size of recent price changes. See the full RSI guide for the formula.",
  },
  {
    term: "Signal Candle",
    definition:
      "In the RSI 5-Star strategy, the daily candle where RSI first reads near 40 during a pullback — its high becomes the price level that, once broken, confirms the entry.",
  },
  {
    term: "Stop-Loss (SL)",
    definition:
      "A predefined price at which a losing trade is closed, set before the trade is taken, to cap how much a single trade can cost if the underlying idea turns out to be wrong.",
  },
  {
    term: "Support / Resistance",
    definition:
      "Price levels where a stock has previously reversed direction. Resistance is a level price struggled to close above; support is a level it struggled to close below.",
  },
  {
    term: "Swing Low",
    definition:
      "The lowest price reached over a defined recent window (this scanner uses the last 10 trading days) — commonly used as the reference point for placing a stop-loss.",
  },
  {
    term: "Trailing Stop",
    definition:
      "A stop-loss that moves in the trade's favor as price advances (e.g. based on the low of the last 3–5 bars), locking in gains while still leaving room for the trend to continue.",
  },
  {
    term: "Wilder's Smoothing",
    definition:
      "The specific exponential smoothing method J. Welles Wilder used for RSI — mathematically an EMA with a smoothing factor of 1 divided by the lookback period.",
  },
];

export default function GlossaryPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: "Trading Terms Glossary",
          url: `${SITE_URL}/glossary`,
          hasDefinedTerm: TERMS.map((t) => ({
            "@type": "DefinedTerm",
            name: t.term,
            description: t.definition,
          })),
        }}
      />

      <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Glossary</h1>
      <p className="mt-4 text-muted">
        Plain-English definitions of the terms used throughout this site.
      </p>

      <dl className="mt-10 space-y-6">
        {TERMS.map((t) => (
          <div key={t.term} className="border-b border-border pb-6 last:border-0">
            <dt className="font-semibold text-foreground">{t.term}</dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-muted">{t.definition}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
