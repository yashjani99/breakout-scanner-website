import fs from "node:fs";
import path from "node:path";
import { MARKETS, slugifyMarket } from "@/lib/constants";
import type { MarketScanData } from "@/components/ScanExplorer";

function loadMarketData(slug: string): MarketScanData | null {
  const filePath = path.join(process.cwd(), "data", "scans", `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8")) as MarketScanData;
  } catch {
    return null;
  }
}

// Server-only: reads every market's committed scan JSON from data/scans/.
// Missing files (a market whose first scheduled run hasn't landed yet)
// come back as null, which ScanExplorer renders as "not scanned yet".
export function loadAllScanData(): Record<string, MarketScanData | null> {
  const data: Record<string, MarketScanData | null> = {};
  for (const m of MARKETS) {
    data[m.name] = loadMarketData(slugifyMarket(m.name));
  }
  return data;
}
