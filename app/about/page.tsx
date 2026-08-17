import type { Metadata } from "next";
import Link from "next/link";
import { AUTHOR_NAME, AUTHOR_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `Who built ${SITE_NAME}, and why.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-foreground sm:text-4xl">About</h1>

      <div className="prose-legal mt-10">
        <p>
          {SITE_NAME} started as a rules-based stock screener built to formalize a breakout
          strategy into something mechanical and repeatable, rather than a judgment call made
          fresh every day. It has since grown into three independent strategies — Breakout
          (DMA + CAR), RSI 5-Star, and a Confluence view combining both — run automatically
          across 16 global stock exchanges.
        </p>

        <h2>Why it exists</h2>
        <p>
          The goal is narrow and specific: apply a fixed, transparent checklist to a large
          universe of stocks every day, so the only work left for a trader is deciding what to
          do with the results — not re-deriving the same trend-and-momentum checks by hand
          across hundreds of tickers. Every rule behind every strategy is documented in full on{" "}
          <Link href="/how-it-works" className="text-accent underline">
            How It Works
          </Link>{" "}
          and the{" "}
          <Link href="/guides" className="text-accent underline">
            Guides
          </Link>{" "}
          section — nothing about the filters is a black box.
        </p>

        <h2>Who built it</h2>
        <p>
          {SITE_NAME} is developed and maintained by{" "}
          <a href={AUTHOR_URL} target="_blank" rel="noreferrer" className="text-accent underline">
            {AUTHOR_NAME}
          </a>
          . The desktop app, the daily scan pipeline, and this website are all part of the same
          project, built and iterated on as a personal tool that&apos;s now published for anyone
          to use.
        </p>

        <h2>What this is not</h2>
        <p>
          Neither {AUTHOR_NAME} nor {SITE_NAME} is a registered financial advisor, broker-dealer,
          or investment professional. Nothing on this site is a recommendation to buy or sell any
          security — see the full{" "}
          <Link href="/disclaimer" className="text-accent underline">
            disclaimer
          </Link>{" "}
          before using any of it.
        </p>

        <h2>Get in touch</h2>
        <p>
          Questions, feedback, or bug reports can be sent via{" "}
          <a href={AUTHOR_URL} target="_blank" rel="noreferrer" className="text-accent underline">
            {AUTHOR_URL.replace("https://", "")}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
