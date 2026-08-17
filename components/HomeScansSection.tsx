"use client";

import { useState } from "react";
import ScanExplorer, { type MarketScanData } from "./ScanExplorer";
import { AD_SMARTLINK_URL } from "@/lib/constants";

export default function HomeScansSection({
  data,
}: {
  data: Record<string, MarketScanData | null>;
}) {
  const [expanded, setExpanded] = useState(false);

  const handleOpen = () => {
    window.open(AD_SMARTLINK_URL, "_blank");
    setExpanded(true);
  };

  if (!expanded) {
    return (
      <div className="flex flex-col items-center">
        <button
          type="button"
          onClick={handleOpen}
          className="group inline-flex flex-col items-center gap-1 rounded-2xl bg-accent px-10 py-6 text-background shadow-xl shadow-accent/25 transition hover:bg-accent/90 hover:shadow-accent/40"
        >
          <span className="text-xl font-bold sm:text-2xl">View Today&apos;s Live Scans</span>
          <span className="text-sm font-medium opacity-80">
            16 markets &middot; 3 strategies &middot; updated daily &middot; free, no account
          </span>
        </button>
        <p className="mt-4 text-sm text-muted">
          Click to reveal the actual results — nothing runs live, this loads today&apos;s
          already-completed scan.
        </p>
      </div>
    );
  }

  return (
    <div id="live-scans" className="scroll-mt-24">
      <ScanExplorer data={data} />
    </div>
  );
}
