import Link from "next/link";
import DownloadButton from "@/components/DownloadButton";
import HomeScansSection from "@/components/HomeScansSection";
import JsonLd from "@/components/JsonLd";
import RiskCallout from "@/components/RiskCallout";
import { loadAllScanData } from "@/lib/scanData";
import { AUTHOR_NAME, MARKETS, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/constants";

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
    title: "Updated Daily, Automatically",
    body: "Every market is rescanned about 30 minutes after its own close. Browse the results here, no install needed.",
  },
  {
    title: "Fully Self-Contained App",
    body: "Prefer a desktop app? The installer bundles Python and every dependency — no separate downloads, no configuration.",
  },
  {
    title: "Free & Transparent",
    body: "The scanning logic is plain and rules-based — the same fixed checklist every time, no black box.",
  },
];

export default function Home() {
  const scanData = loadAllScanData();

  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: SITE_NAME,
          description: SITE_TAGLINE,
          url: SITE_URL,
          applicationCategory: "FinanceApplication",
          operatingSystem: "Windows, Linux, macOS, Web",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          author: {
            "@type": "Person",
            name: AUTHOR_NAME,
          },
        }}
      />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted">
            16 Markets &middot; 3 Strategies &middot; Updated Daily &middot; Free
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {SITE_NAME}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-muted">
            Trend-strength breakout scans across 16 stock markets, refreshed automatically every
            day. Browse today&apos;s results right here — a free desktop app is also available
            below if you want it.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <HomeScansSection data={scanData} />
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <RiskCallout />
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

      {/* Desktop app download */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Want it as a desktop app instead?
          </h2>
          <p className="mt-3 text-muted">
            Same scans, running natively on your machine with Excel/PDF export. Install in under
            a minute — no sign-up, no subscription.
          </p>
          <div className="mt-8">
            <DownloadButton id="download" />
          </div>
        </div>
      </section>
    </div>
  );
}
