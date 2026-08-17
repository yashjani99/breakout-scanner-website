import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "RSI Explained: How the Relative Strength Index Works",
  description:
    "What RSI actually measures, how it's calculated (Wilder's smoothing), and how to read overbought/oversold and pullback levels.",
};

export default function Page() {
  return (
    <GuideLayout
      title="RSI Explained: How the Relative Strength Index Works"
      description={metadata.description as string}
      datePublished="2026-08-17"
      slug="rsi-explained"
    >
      <p>
        The Relative Strength Index (RSI) is a momentum oscillator developed by J. Welles Wilder
        and introduced in his 1978 book <em>New Concepts in Technical Trading Systems</em>. It
        measures the speed and size of recent price changes and expresses the result as a single
        number between 0 and 100. Despite the name, it has nothing to do with comparing one
        stock&apos;s strength to another&apos;s — it measures a stock&apos;s momentum relative to
        its own recent price history.
      </p>

      <h2>How RSI Is Calculated</h2>
      <p>
        Over a lookback period (14 days is the standard default, and what this tool uses), RSI
        separates each day&apos;s price change into a gain or a loss, then smooths those gains
        and losses separately using Wilder&apos;s smoothing method — an exponential moving
        average with a specific weighting (equivalent to an EMA with alpha = 1/period). The
        smoothed average gain and average loss are combined into a Relative Strength (RS) ratio:
      </p>
      <blockquote>RS = Average Gain / Average Loss</blockquote>
      <p>which is then converted into the 0–100 RSI scale:</p>
      <blockquote>RSI = 100 − (100 / (1 + RS))</blockquote>
      <p>
        When average gains dominate average losses, RS is large and RSI pushes toward 100. When
        losses dominate, RSI pushes toward 0. A reading of exactly 50 means gains and losses over
        the period have been roughly balanced.
      </p>

      <h2>Reading the Levels</h2>
      <p>
        RSI is traditionally described using two thresholds:
      </p>
      <ul>
        <li>
          <strong>Above 70</strong> is often called &quot;overbought&quot; — momentum has been
          strongly positive.
        </li>
        <li>
          <strong>Below 30</strong> is often called &quot;oversold&quot; — momentum has been
          strongly negative.
        </li>
      </ul>
      <p>
        The common beginner mistake is treating these as automatic reversal signals — &quot;RSI
        hit 70, so it must fall now.&quot; In a genuinely strong trend, RSI can sit above 70 for
        weeks while price keeps climbing; in a strong downtrend it can sit below 30 for just as
        long. Overbought does not mean &quot;about to reverse&quot; — it means &quot;currently
        strong.&quot;
      </p>

      <h2>RSI as a Trend-Strength Gauge, Not Just a Reversal Signal</h2>
      <p>
        A more useful way to read RSI, especially for trend-following strategies, is as a
        strength gauge across a middle range. A stock in a healthy uptrend will often see its RSI
        hold above 40–50 even during pullbacks, only dipping toward 30 in a genuine trend
        reversal. That difference — a shallow RSI dip versus a deep one — is a reasonable way to
        distinguish &quot;a normal pause within an uptrend&quot; from &quot;the uptrend is over.&quot;
      </p>
      <p>
        This is also why checking RSI on more than one timeframe matters. A stock can show a
        weak daily RSI reading during a pullback while its weekly and monthly RSI remain firmly
        strong — meaning the bigger picture is intact and the daily dip may just be
        noise. See{" "}
        <Link href="/guides/multi-timeframe-rsi-strategy" className="text-accent underline">
          Multi-Timeframe RSI Analysis
        </Link>{" "}
        for how this scanner uses exactly that combination.
      </p>

      <h2>RSI Pullback Entries</h2>
      <p>
        One common systematic use of RSI is to look for a shallow pullback — RSI easing from a
        strong reading down toward the 40 area — within a stock that&apos;s otherwise trending
        up on the higher timeframes. The logic: buying strength on a small dip, rather than
        chasing a stock after a big move or trying to catch a falling knife during a real
        breakdown. The RSI 5-Star strategy on this site is a fully mechanical version of that
        idea.
      </p>

      <h2>Limitations</h2>
      <ul>
        <li>
          RSI is a lagging-ish momentum measure — it&apos;s calculated from past price changes, so
          it confirms what has already happened rather than predicting what happens next.
        </li>
        <li>
          Like any single indicator, it produces false signals in choppy, directionless markets.
        </li>
        <li>
          The standard 14-period setting is a convention, not a law — shorter periods react
          faster and produce more (and noisier) signals; longer periods are smoother but slower.
        </li>
      </ul>

      <p>
        This is educational content, not investment advice — see the full{" "}
        <Link href="/disclaimer" className="text-accent underline">
          disclaimer
        </Link>
        . To see RSI-based filters applied to real markets, browse{" "}
        <Link href="/scans" className="text-accent underline">
          today&apos;s RSI 5-Star scan results
        </Link>
        .
      </p>
    </GuideLayout>
  );
}
