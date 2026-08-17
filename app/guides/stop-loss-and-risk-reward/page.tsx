import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Stop-Loss, Risk-Reward and Position Sizing Explained",
  description:
    "How to set a stop-loss from a swing low, calculate risk-reward ratios, and size a position around a fixed risk amount.",
};

export default function Page() {
  return (
    <GuideLayout
      title="Stop-Loss, Risk-Reward and Position Sizing Explained"
      description={metadata.description as string}
      datePublished="2026-08-17"
      slug="stop-loss-and-risk-reward"
    >
      <p>
        A stop-loss is the price at which a trade is closed if it moves against you, defined
        before the trade is ever taken. Its purpose isn&apos;t to predict the future — it&apos;s
        to put a hard limit on how much a single trade can cost if the idea behind it turns out
        to be wrong. Every strategy on this site defines a stop-loss for that exact reason: no
        setup works 100% of the time, and the stop-loss is what keeps a losing trade from turning
        into a large, undefined loss.
      </p>

      <h2>Common Ways to Set a Stop-Loss</h2>
      <ul>
        <li>
          <strong>Swing-low based</strong> — placed below the most recent meaningful low in
          price. If that low breaks, the structure that justified the trade is gone. This is
          what this scanner uses.
        </li>
        <li>
          <strong>Percentage based</strong> — a fixed percentage below entry, regardless of chart
          structure. Simple, but ignores how volatile the specific stock actually is.
        </li>
        <li>
          <strong>Volatility based (ATR)</strong> — a multiple of the stock&apos;s Average True
          Range, so the stop naturally widens for more volatile stocks and tightens for calmer
          ones.
        </li>
      </ul>
      <p>
        A swing-low stop has a practical advantage: it&apos;s anchored to an actual price level
        other market participants are also watching, rather than an arbitrary percentage that has
        nothing to do with the stock&apos;s own trading range.
      </p>

      <h2>Risk, in Plain Terms</h2>
      <p>
        Once entry and stop-loss are both set, the risk on the trade is simply the distance
        between them:
      </p>
      <blockquote>Risk = Entry Price − Stop-Loss Price</blockquote>
      <p>
        That number, converted to a percentage of the entry price, is how much of your position&apos;s
        value is at stake if the stop is hit — not how much of your total account is at stake
        (that depends on position size, covered below).
      </p>

      <h2>Risk-Reward Ratio</h2>
      <p>
        The risk-reward ratio compares how much you stand to make against how much you stand to
        lose:
      </p>
      <blockquote>Reward ÷ Risk</blockquote>
      <p>
        For example, if the risk on a trade is $2 per share and the target is $6 above entry, the
        risk-reward ratio is 3:1 — a favorable setup, since the potential gain is three times the
        potential loss. This is exactly the logic behind this scanner&apos;s T1/T2/T3 targets:
        they&apos;re set at 2x, 3x and 5x the risk amount, so every result already carries a known
        risk-reward profile rather than an arbitrary price target.
      </p>
      <p>
        A favorable risk-reward ratio matters because it changes how often a strategy needs to be
        right to be profitable overall. A strategy with a 3:1 average risk-reward ratio can still
        make money even if it&apos;s right less than half the time, because the winners are worth
        more than the losers cost.
      </p>

      <h2>Position Sizing</h2>
      <p>
        Position sizing is the separate question of <em>how many shares</em> to buy, and
        it&apos;s what actually connects a trade&apos;s per-share risk to your total account risk.
        A common framework:
      </p>
      <ol>
        <li>Decide how much of your total account you&apos;re willing to risk on one trade (a common guideline is 1–2%).</li>
        <li>Calculate the dollar risk per share (Entry − Stop-Loss).</li>
        <li>Divide the account risk amount by the per-share risk to get the number of shares.</li>
      </ol>
      <p>
        For example, on a $50,000 account risking 1% ($500) per trade, with $2 of risk per share,
        the position size works out to 250 shares — regardless of how many shares that dollar
        amount happens to buy at the stock&apos;s current price. This keeps the dollar risk
        consistent across every trade, even though share counts vary. This scanner reports the
        per-share entry, stop-loss and targets — position sizing itself is a manual step based on
        your own account size and risk tolerance.
      </p>

      <h2>Scaling Out and Trailing Stops</h2>
      <p>
        Multiple targets (T1, T2, T3) exist because many traders don&apos;t exit an entire
        position at once — they take partial profit at an early target, then let the remainder
        run toward a further one, sometimes trailing the stop-loss upward as the trade develops
        to protect the gains already made. That&apos;s a discretionary, ongoing decision made
        while the trade is open, not something a one-time scan can compute in advance.
      </p>

      <p>
        This is educational content, not investment advice — see the full{" "}
        <Link href="/disclaimer" className="text-accent underline">
          disclaimer
        </Link>
        . For the exact stop-loss and target formulas used by each strategy on this site, see{" "}
        <Link href="/how-it-works" className="text-accent underline">
          How It Works
        </Link>
        .
      </p>
    </GuideLayout>
  );
}
