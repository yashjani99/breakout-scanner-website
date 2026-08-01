import type { Metadata } from "next";
import Link from "next/link";
import RiskCallout from "@/components/RiskCallout";

export const metadata: Metadata = {
  title: "How To Use",
  description: "A walkthrough of the Breakout Scanner Global Markets interface: market picker, scanning, and exporting results.",
};

const SECTIONS = [
  {
    title: "1. Pick a market",
    body: "Use the Market dropdown at the top of the window to choose from 16 exchanges — India, the US, Canada, the UK, Germany, France, the Netherlands, Switzerland, Italy, Japan, Hong Kong, China A-Shares, South Korea, Singapore, Australia or Brazil. The app opens with India (NSE) selected and starts scanning it automatically while the loading screen is still showing.",
  },
  {
    title: "2. Run a scan",
    body: "Click Scan to run (or re-run) the scan for whichever market is currently selected. A progress bar tracks how many tickers have been checked. Scanning a market's full list can take anywhere from under a minute to a few minutes, depending on your connection and how many tickers that market has.",
  },
  {
    title: "3. Read the results table",
    body: "Every row is a stock that passed all four filters that day. Columns: Date, Stock, CMP (current price), 30/50/200 DMA, 200 DMA Dist % (how far above the 200-day average the price is), SL (stop-loss), T1/T2/T3 (three profit targets), CAR Status, and Action. If nothing matches, the status bar tells you — that's a normal, expected outcome on plenty of days.",
  },
  {
    title: "4. Export to Excel or PDF",
    body: "Once results are on screen, Generate Excel and Generate PDF both open a save dialog so you choose exactly where the file goes. The PDF includes a titled, landscape-oriented table suitable for printing or sharing; the Excel file is a plain, sortable spreadsheet.",
  },
  {
    title: "5. Switch markets any time",
    body: "Change the Market dropdown and click Scan again — the table, progress bar and export buttons all update for the newly selected market. Nothing needs restarting.",
  },
];

export default function HowToUsePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-foreground sm:text-4xl">How To Use</h1>
      <p className="mt-4 text-muted">
        The whole interface is five things: a market picker, a scan button, a progress bar, a
        results table, and two export buttons.
      </p>

      <div className="mt-12 space-y-10">
        {SECTIONS.map((s) => (
          <div key={s.title}>
            <h2 className="font-semibold text-foreground">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-xl border border-border bg-surface p-6">
        <h2 className="font-semibold text-foreground">Tips</h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted">
          <li>Run the scan after market close, or before the next session opens, for the freshest daily data.</li>
          <li>An empty results table is a valid outcome — it means no stock in that market currently passes all four filters.</li>
          <li>The window is a standard resizable Windows window; the results table columns can be widened by dragging.</li>
        </ul>
      </div>

      <div className="mt-8">
        <RiskCallout compact />
      </div>

      <p className="mt-8 text-sm text-muted">
        Want to understand the filters themselves?{" "}
        <Link href="/how-it-works" className="text-accent hover:underline">
          Read how the scan works
        </Link>
        .
      </p>
    </div>
  );
}
