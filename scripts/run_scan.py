#!/usr/bin/env python3
"""
Runs all three strategies for one market using scanner_core.py from the app
repo (breakout-scanner-global-markets), and writes the result as JSON into
data/scans/<market-slug>.json in this repo.

The app repo is expected to already be checked out somewhere (see
--app-repo-path) - this script does not clone anything itself, to keep it
usable both from CI (where the workflow does the checkout) and locally.

Usage:
    python scripts/run_scan.py --market "India (NSE)" --app-repo-path ../breakout-scanner-global-markets
    python scripts/run_scan.py --schedule "30 10 * * *" --app-repo-path ./app-repo
"""
import argparse
import json
import sys
from datetime import datetime, timezone
from pathlib import Path

# Maps each staggered cron trigger (market close + 30 min, in UTC, using
# each market's standard/non-DST offset so the job always fires at or after
# the true close) back to the market it belongs to. Keep this in sync with
# .github/workflows/daily-scan.yml's `schedule:` list - the strings must
# match exactly.
MARKET_CRON = {
    "30 6 * * *": "Australia (ASX)",
    "0 7 * * *": "Japan (Tokyo)",
    "1 7 * * *": "South Korea (KOSPI)",
    "30 7 * * *": "China A-Shares (Shanghai/Shenzhen)",
    "30 8 * * *": "Hong Kong (HKEX)",
    "30 9 * * *": "Singapore (SGX)",
    "30 10 * * *": "India (NSE)",
    "0 17 * * *": "United Kingdom (LSE)",
    "1 17 * * *": "Germany (XETRA)",
    "2 17 * * *": "France (Euronext Paris)",
    "3 17 * * *": "Netherlands (Euronext Amsterdam)",
    "4 17 * * *": "Switzerland (SIX)",
    "5 17 * * *": "Italy (Borsa Italiana)",
    "30 20 * * *": "Brazil (B3)",
    "30 21 * * *": "United States (NYSE/NASDAQ)",
    "31 21 * * *": "Canada (TSX)",
}


def slugify(name):
    out = "".join(ch if ch.isalnum() else "-" for ch in name.lower())
    while "--" in out:
        out = out.replace("--", "-")
    return out.strip("-")


def resolve_market(args):
    if args.market:
        return args.market
    if args.schedule:
        market = MARKET_CRON.get(args.schedule.strip())
        if not market:
            raise SystemExit(f"Unknown schedule '{args.schedule}' - not in MARKET_CRON map")
        return market
    raise SystemExit("Pass either --market or --schedule")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--market", help="Exact market key, e.g. 'India (NSE)'")
    parser.add_argument("--schedule", help="Cron string from github.event.schedule")
    parser.add_argument("--app-repo-path", required=True, help="Path to a checkout of the app repo")
    args = parser.parse_args()

    market_name = resolve_market(args)
    print(f"Scanning market: {market_name}")

    scanner_core_dir = Path(args.app_repo_path) / "BreakoutScannerApp"
    if not (scanner_core_dir / "scanner_core.py").exists():
        raise SystemExit(f"scanner_core.py not found under {scanner_core_dir}")
    sys.path.insert(0, str(scanner_core_dir))
    import scanner_core as core  # noqa: E402

    if market_name not in core.MARKETS:
        raise SystemExit(f"Market '{market_name}' not found in scanner_core.MARKETS")

    market = core.MARKETS[market_name]
    tickers = market["tickers"]
    suffix = market["suffix"]
    currency = market["currency"]

    print(f"{len(tickers)} tickers, suffix={suffix!r}, currency={currency}")

    strategies_output = {}
    for key, label, fn in [
        ("breakout", "Breakout (DMA + CAR)", core.scan_stocks),
        ("rsi", "RSI 5-Star", core.scan_rsi_five_star),
        ("confluence", "Confluence (Both)", core.scan_confluence),
    ]:
        print(f"Running {label}...")
        df = fn(tickers, suffix)
        strategies_output[key] = {
            "label": label,
            "columns": list(df.columns),
            "rows": json.loads(df.to_json(orient="records")),
        }
        print(f"  -> {len(df)} matches")

    now_utc = datetime.now(timezone.utc)
    payload = {
        "market": market_name,
        "currency": currency,
        "generated_at": now_utc.isoformat(),
        "strategies": strategies_output,
    }

    repo_root = Path(__file__).resolve().parent.parent
    out_dir = repo_root / "data" / "scans"
    out_dir.mkdir(parents=True, exist_ok=True)
    out_path = out_dir / f"{slugify(market_name)}.json"
    out_path.write_text(json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Wrote {out_path}")


if __name__ == "__main__":
    main()
