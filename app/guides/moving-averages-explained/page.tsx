import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Moving Averages Explained: 30/50/200-Day Trend Analysis",
  description:
    "What a moving average is, why 30/50/200-day periods are common trend filters, and what it means when price and MAs align.",
};

export default function Page() {
  return (
    <GuideLayout
      title="Moving Averages Explained: 30/50/200-Day Trend Analysis"
      description={metadata.description as string}
      datePublished="2026-08-17"
      slug="moving-averages-explained"
    >
      <p>
        A moving average takes a stock&apos;s closing prices over the last N trading days and
        averages them, then recalculates that average every day as new prices come in — so the
        line &quot;moves&quot; along with the data. The point is noise reduction: day-to-day
        price swings get smoothed out, leaving a clearer picture of the underlying trend
        direction.
      </p>

      <h2>Simple vs. Exponential</h2>
      <p>
        A Simple Moving Average (SMA) weights every day in the lookback window equally. An
        Exponential Moving Average (EMA) weights recent days more heavily, so it reacts faster to
        new price action. This tool uses simple moving averages for its 30/50/200-day trend
        filters, and a Wilder-smoothed exponential average specifically for RSI (see{" "}
        <Link href="/guides/rsi-explained" className="text-accent underline">
          RSI Explained
        </Link>
        ) — different indicators, different smoothing conventions.
      </p>

      <h2>Why 30, 50, and 200 Days Specifically</h2>
      <p>
        These three lookback periods are long-standing conventions, not arbitrary choices:
      </p>
      <ul>
        <li>
          <strong>200-day</strong> is the most widely watched long-term trend line on any major
          charting platform. Price above its 200-day average is commonly read as &quot;in a bull
          trend&quot;; below it, &quot;in a bear trend.&quot;
        </li>
        <li>
          <strong>50-day</strong> represents the intermediate-term trend — roughly a
          quarter&apos;s worth of trading.
        </li>
        <li>
          <strong>30-day</strong> represents the short-term trend — about six weeks.
        </li>
      </ul>
      <p>
        The relationship between the 50-day and 200-day averages specifically has its own
        vocabulary: a &quot;golden cross&quot; is when the 50-day crosses above the 200-day
        (often read as a bullish trend-change signal), and a &quot;death cross&quot; is the
        opposite.
      </p>

      <h2>What Full Alignment Means</h2>
      <p>
        When a stock&apos;s price is trading above all three averages at once — and the averages
        themselves are stacked in order (30-day above 50-day above 200-day) — every timeframe is
        telling the same story: short-term, medium-term and long-term momentum all point the same
        direction. That&apos;s a materially stronger signal than a stock that&apos;s only above
        one of the three, which might just be a short-term bounce inside a longer downtrend. This
        full-alignment check is exactly what the Breakout (DMA + CAR) strategy requires — see{" "}
        <Link href="/guides/what-is-a-breakout-strategy" className="text-accent underline">
          What Is a Breakout Trading Strategy?
        </Link>
        .
      </p>

      <h2>Distance From the 200-Day Average</h2>
      <p>
        How far above (or below) its 200-day average a stock is trading is itself informative.
        A stock that has just crossed above its 200-day average has more room to run before it
        looks &quot;stretched&quot;; one that&apos;s already 40% above its 200-day average may be
        due for a pause or pullback simply from being extended. This scanner sorts Breakout
        results by that distance, ascending, so the least-extended (and arguably most
        sustainable) setups surface first.
      </p>

      <h2>Limitations</h2>
      <p>
        Moving averages are, by construction, calculated from past prices — they confirm a trend
        that has already started rather than predicting one before it begins. In a genuinely
        sideways, range-bound market, price will cross back and forth across its moving averages
        repeatedly, generating false signals in both directions. Moving averages work best as
        trend filters layered with other confirmation, not as a standalone signal.
      </p>

      <p>
        This is educational content, not investment advice — see the full{" "}
        <Link href="/disclaimer" className="text-accent underline">
          disclaimer
        </Link>
        . See <Link href="/how-it-works" className="text-accent underline">
          How It Works
        </Link>{" "}
        for the exact formulas this scanner uses, or browse{" "}
        <Link href="/scans" className="text-accent underline">
          today&apos;s results
        </Link>
        .
      </p>
    </GuideLayout>
  );
}
