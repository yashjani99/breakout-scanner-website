"use client";

import { useMemo, useState } from "react";
import { MARKETS } from "@/lib/constants";

const STRATEGY_TABS = [
  { key: "breakout", label: "Breakout (DMA + CAR)" },
  { key: "rsi", label: "RSI 5-Star" },
  { key: "confluence", label: "Confluence (Both)" },
] as const;

type StrategyKey = (typeof STRATEGY_TABS)[number]["key"];

export interface StrategyData {
  label: string;
  columns: string[];
  rows: Record<string, string | number | null>[];
}

export interface MarketScanData {
  market: string;
  currency: string;
  generated_at: string;
  strategies: Record<StrategyKey, StrategyData>;
}

export default function ScanExplorer({
  data,
}: {
  data: Record<string, MarketScanData | null>;
}) {
  const [market, setMarket] = useState(MARKETS[0].name);
  const [strategy, setStrategy] = useState<StrategyKey>("breakout");

  const marketData = data[market];
  const strategyData = marketData?.strategies?.[strategy];

  const lastUpdated = useMemo(() => {
    if (!marketData?.generated_at) return null;
    const d = new Date(marketData.generated_at);
    if (Number.isNaN(d.getTime())) return null;
    return (
      d.toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone: "UTC",
      }) + " UTC"
    );
  }, [marketData]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <select
          value={market}
          onChange={(e) => setMarket(e.target.value)}
          className="rounded-lg border border-border bg-surface px-4 py-2 text-sm text-foreground"
        >
          {MARKETS.map((m) => (
            <option key={m.name} value={m.name}>
              {m.name}
            </option>
          ))}
        </select>

        <div className="flex flex-wrap gap-2">
          {STRATEGY_TABS.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setStrategy(t.key)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                strategy === t.key
                  ? "bg-accent text-background"
                  : "border border-border bg-surface text-muted hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 text-xs text-muted">
        {marketData ? (
          <>
            Last updated: {lastUpdated ?? marketData.generated_at} &middot; Currency:{" "}
            {marketData.currency}
          </>
        ) : (
          "Not scanned yet — this market's first scheduled run hasn't completed."
        )}
      </div>

      <div className="mt-4 overflow-x-auto rounded-xl border border-border bg-surface">
        {!strategyData || strategyData.rows.length === 0 ? (
          <div className="p-10 text-center text-sm text-muted">
            {marketData
              ? "No stocks matched this strategy in the most recent scan — that's a normal outcome, not an error."
              : "Data for this market will appear here after its first scheduled scan."}
          </div>
        ) : (
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-2 text-xs uppercase tracking-wide text-muted">
                {strategyData.columns.map((col) => (
                  <th key={col} className="whitespace-nowrap px-4 py-3 font-medium">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {strategyData.rows.map((row, i) => (
                <tr key={i} className="border-b border-border/60 last:border-0">
                  {strategyData.columns.map((col, ci) => (
                    <td
                      key={col}
                      className={`whitespace-nowrap px-4 py-3 ${
                        ci === 1 ? "font-medium text-foreground" : "text-muted"
                      }`}
                    >
                      {row[col] ?? "—"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
