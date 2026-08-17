import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import RiskCallout from "@/components/RiskCallout";
import ScanExplorer, { type MarketScanData } from "@/components/ScanExplorer";
import { MARKETS, slugifyMarket } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Daily Scans",
  description:
    "Live daily breakout, RSI 5-Star and Confluence scan results across 16 global markets, auto-refreshed after each market closes.",
};

function loadMarketData(slug: string): MarketScanData | null {
  const filePath = path.join(process.cwd(), "data", "scans", `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8")) as MarketScanData;
  } catch {
    return null;
  }
}

export default function ScansPage() {
  const data: Record<string, MarketScanData | null> = {};
  for (const m of MARKETS) {
    data[m.name] = loadMarketData(slugifyMarket(m.name));
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Daily Scans</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Every market below is scanned automatically, about 30 minutes after that market&apos;s
        own close, and the results here refresh from that scan. Nothing runs live in your
        browser.
      </p>

      <div className="mt-8 max-w-2xl">
        <RiskCallout />
      </div>

      <div className="mt-10">
        <ScanExplorer data={data} />
      </div>
    </div>
  );
}
