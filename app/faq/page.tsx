import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Breakout Scanner Global Markets — pricing, data sources, privacy, supported platforms, and how the strategies work.",
};

const FAQS: { question: string; answer: string }[] = [
  {
    question: "Is Breakout Scanner Global Markets free?",
    answer:
      "Yes. There's no account, no subscription, and no paywall on either the website's daily scan results or the downloadable desktop app.",
  },
  {
    question: "Is this financial advice?",
    answer:
      "No. This is an educational, rules-based screening tool, not a licensed financial advisor. Its output can be wrong, incomplete, or based on delayed data. See the full disclaimer before using any of its results.",
  },
  {
    question: "Where does the market data come from?",
    answer:
      "Yahoo Finance, via the yfinance library, for both the desktop app and the website's daily scan job. Data can be delayed or occasionally inaccurate — it's a free source with no uptime guarantee.",
  },
  {
    question: "How often are the results on the website updated?",
    answer:
      "Each of the 16 markets is rescanned automatically about 30 minutes after that specific market's own close, once a day. Times are staggered per market's local trading hours, not a single fixed time for everyone.",
  },
  {
    question: "Which markets and strategies are covered?",
    answer:
      "16 exchanges — India, the US, Canada, the UK, Germany, France, the Netherlands, Switzerland, Italy, Japan, Hong Kong, China A-Shares, South Korea, Singapore, Australia and Brazil — each scanned with three strategies: Breakout (DMA + CAR), RSI 5-Star, and Confluence (both at once).",
  },
  {
    question: "Do I need to install anything to see the scan results?",
    answer:
      "No. The results are viewable directly on the website's Daily Scans page. The downloadable desktop app is optional, for people who want the scans running natively with Excel/PDF export.",
  },
  {
    question: "What platforms does the desktop app support?",
    answer:
      "Windows (MSI installer or portable EXE, including ARM64 via Windows' built-in x64 emulation), Linux (.deb for Debian/Ubuntu, .rpm for Fedora/RHEL), and macOS (.dmg).",
  },
  {
    question: "Does the app or website collect my personal data?",
    answer:
      "The desktop app has no accounts, no telemetry, and no tracking — its only network connections are to Yahoo Finance to fetch price data. The website is a static site with no analytics or tracking scripts added beyond standard hosting logs. See the full privacy policy for detail.",
  },
  {
    question: "What is the RSI 5-Star strategy?",
    answer:
      "A multi-timeframe RSI pullback setup: Monthly RSI above 60, Weekly RSI above 60, and Daily RSI pulling back to near 40, with entry confirmed once price breaks above that pullback candle's high. See the full guide for the reasoning and formulas.",
  },
  {
    question: "How is the stop-loss and target calculated?",
    answer:
      "Stop-loss is based on the lowest low of a recent swing (10 trading days). Targets are set as multiples of that risk (2x, 3x and 5x for the Breakout and Confluence strategies), or solved from the RSI formula itself for RSI 5-Star's first target. See How It Works for the exact formulas.",
  },
  {
    question: "Can I trust the source code?",
    answer:
      "The scanning logic that both the app and the website run is the same code, and the mechanical rules behind every strategy are documented in full on the How It Works and Guides pages — nothing about the filters is hidden.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          url: `${SITE_URL}/faq`,
          about: SITE_NAME,
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer,
            },
          })),
        }}
      />

      <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
        Frequently Asked Questions
      </h1>
      <p className="mt-4 text-muted">
        If your question isn&apos;t answered here, see{" "}
        <Link href="/how-it-works" className="text-accent underline">
          How It Works
        </Link>{" "}
        or the{" "}
        <Link href="/guides" className="text-accent underline">
          Guides
        </Link>
        .
      </p>

      <div className="mt-10 space-y-6">
        {FAQS.map((f) => (
          <div key={f.question} className="border-b border-border pb-6 last:border-0">
            <h2 className="font-semibold text-foreground">{f.question}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{f.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
