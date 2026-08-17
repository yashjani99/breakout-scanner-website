import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Multi-Timeframe RSI Analysis: The RSI 5-Star Approach",
  description:
    "Why checking RSI on the monthly, weekly and daily chart together — instead of just one — filters out weaker setups.",
};

export default function Page() {
  return (
    <GuideLayout
      title="Multi-Timeframe RSI Analysis: The RSI 5-Star Approach"
      description={metadata.description as string}
      datePublished="2026-08-17"
      slug="multi-timeframe-rsi-strategy"
    >
      <p>
        Multi-timeframe analysis means checking the same indicator across more than one chart
        period — monthly, weekly and daily, for example — instead of relying on a single view.
        The reason is simple: any one timeframe can be misleading in isolation. A stock&apos;s
        daily RSI might look weak on a given day simply because of a normal, healthy pullback,
        even while the bigger picture — its weekly and monthly momentum — remains strongly
        positive. Looking at only the daily chart would miss that context entirely.
      </p>

      <h2>The Rule Set</h2>
      <p>
        The RSI 5-Star setup (a well-known momentum-pullback framework among technical traders)
        combines three separate RSI readings into one checklist:
      </p>
      <ul>
        <li>
          <strong>Monthly RSI above 60</strong> — the long-term trend has to be genuinely strong,
          not just recently positive.
        </li>
        <li>
          <strong>Weekly RSI above 60</strong> — the medium-term trend has to agree with the
          long-term one.
        </li>
        <li>
          <strong>Daily RSI near 40</strong> — the short-term chart is pulling back, but only
          modestly — not breaking down.
        </li>
      </ul>
      <p>
        Read together, this describes a stock in a strong, established uptrend on both the
        monthly and weekly charts that is taking a shallow breather on the daily chart. That
        combination — strength at the higher timeframes, a pause (not a reversal) at the lower
        timeframe — is the setup this strategy is built to find.
      </p>

      <h2>Why 60 for the Higher Timeframes, and 40 for the Daily?</h2>
      <p>
        60 is meaningfully above the neutral 50 line without requiring an extreme
        &quot;overbought&quot; reading — it&apos;s a bar for &quot;clearly strong,&quot; set below
        the traditional 70 overbought threshold so it doesn&apos;t exclude trends that are simply
        healthy rather than euphoric. 40 on the daily chart is the mirror concept on the
        short-term side: low enough to represent a real pullback in momentum, but well short of
        the 30 level typically associated with a trend actually breaking down. See{" "}
        <Link href="/guides/rsi-explained" className="text-accent underline">
          RSI Explained
        </Link>{" "}
        for how the indicator itself is calculated.
      </p>

      <h2>The Signal Candle and Entry Trigger</h2>
      <p>
        The daily candle where RSI first reads &quot;near 40&quot; is called the signal candle —
        it marks the pullback low being watched. Rather than buying immediately when RSI touches
        that zone (which risks entering before the pullback has actually finished), the entry
        trigger is a price close <em>above the signal candle&apos;s high</em>. That requires the
        stock to actually resume its upward move before a trade is taken, instead of guessing
        that the dip is over.
      </p>

      <h2>Stop-Loss and the RSI-60 Target</h2>
      <p>
        The stop-loss is placed at the lowest low of the swing leading into the signal candle —
        if price breaks below that level, the pullback has turned into something more serious
        and the setup is invalidated. The first target is framed around RSI itself: the
        approximate price level at which the daily RSI reading would climb back to 60, solved
        algebraically from Wilder&apos;s smoothing formula rather than guessed. In practice this
        means the target moves with how extended or compressed the stock&apos;s recent price
        action has been, rather than being a fixed percentage for every stock.
      </p>

      <h2>Trailing the Position</h2>
      <p>
        Once a trade is in profit, many traders using this framework switch from a fixed
        stop-loss to a trailing stop based on the last 3 to 5 daily bars&apos; lows — moving the
        stop up as the trend continues, to lock in gains while still giving the trade room to
        run. That&apos;s a trade-management decision made after entry, based on how the position
        develops, so it isn&apos;t something a one-time scan can compute in advance — it&apos;s
        surfaced as guidance rather than a column of numbers.
      </p>

      <h2>How This Differs From the Breakout Strategy</h2>
      <p>
        The{" "}
        <Link href="/guides/what-is-a-breakout-strategy" className="text-accent underline">
          Breakout (DMA + CAR)
        </Link>{" "}
        strategy on this site looks for price already trading above its 30/50/200-day moving
        averages with strengthening momentum — it favors stocks currently pushing to new highs.
        RSI 5-Star instead looks for a <em>pullback</em> within an already-strong trend — buying
        strength on a dip rather than a fresh breakout. The Confluence strategy reports only
        stocks where both independent frameworks agree at once.
      </p>

      <p>
        This is educational content, not investment advice — see the full{" "}
        <Link href="/disclaimer" className="text-accent underline">
          disclaimer
        </Link>
        . Browse{" "}
        <Link href="/scans" className="text-accent underline">
          today&apos;s RSI 5-Star and Confluence results
        </Link>{" "}
        across all 16 markets.
      </p>
    </GuideLayout>
  );
}
