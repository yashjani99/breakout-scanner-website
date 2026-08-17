export const SITE_NAME = "Breakout Scanner Global Markets";
export const SITE_TAGLINE =
  "Free daily breakout, RSI 5-Star and Confluence stock scans across 16 global markets. Browse results on the web, or download the free Windows, Linux and macOS app.";
export const SITE_URL = "https://www.breakoutscanner.site";

export const AUTHOR_NAME = "Yash Jani";
export const AUTHOR_URL = "https://yashjani.biz";

export const APP_VERSION = "2.0.4";
export const APP_REPO_URL =
  "https://github.com/yashjani99/breakout-scanner-global-markets";

const RELEASE_BASE = `${APP_REPO_URL}/releases/download/v${APP_VERSION}`;

// These filenames are exactly what the CI release job actually publishes -
// verified against the live release, not guessed from a naming pattern.
export const MSI_DOWNLOAD_URL = `${RELEASE_BASE}/BreakoutScannerGlobalMarkets-${APP_VERSION}-win64.msi`;
export const EXE_DOWNLOAD_URL = `${RELEASE_BASE}/BreakoutScannerGlobalMarkets.exe`;
export const MSI_SIZE_MB = 87;
export const EXE_SIZE_MB = 74;

export const RPM_DOWNLOAD_URL = `${RELEASE_BASE}/BreakoutScannerGlobalMarkets-${APP_VERSION}-1.x86_64.rpm`;
export const DEB_DOWNLOAD_URL = `${RELEASE_BASE}/breakout-scanner-indian-market_${APP_VERSION}_amd64.deb`;
export const DMG_DOWNLOAD_URL = `${RELEASE_BASE}/Breakout.Scanner.Global.Markets.dmg`;
export const RPM_SIZE_MB = 114;
export const DEB_SIZE_MB = 93;
export const DMG_SIZE_MB = 100;

// Opened in a background tab alongside every download click.
export const AD_SMARTLINK_URL =
  "https://remotelydependedchance.com/i7q4ejq465?key=bf5314d6b3115f72152c7799eb9fac75";

// Names must match scanner_core.py's MARKETS dict keys exactly - the daily
// scan workflow slugifies these same strings to name each data/scans/*.json
// file, so a mismatch here silently breaks the lookup on the /scans page.
export const MARKETS: { name: string; currency: string; count: number }[] = [
  { name: "India (NSE)", currency: "INR", count: 210 },
  { name: "United States (NYSE/NASDAQ)", currency: "USD", count: 30 },
  { name: "Canada (TSX)", currency: "CAD", count: 30 },
  { name: "United Kingdom (LSE)", currency: "GBP", count: 25 },
  { name: "Germany (XETRA)", currency: "EUR", count: 20 },
  { name: "France (Euronext Paris)", currency: "EUR", count: 20 },
  { name: "Netherlands (Euronext Amsterdam)", currency: "EUR", count: 12 },
  { name: "Switzerland (SIX)", currency: "CHF", count: 12 },
  { name: "Italy (Borsa Italiana)", currency: "EUR", count: 10 },
  { name: "Japan (Tokyo)", currency: "JPY", count: 25 },
  { name: "Hong Kong (HKEX)", currency: "HKD", count: 20 },
  { name: "China A-Shares (Shanghai/Shenzhen)", currency: "CNY", count: 15 },
  { name: "South Korea (KOSPI)", currency: "KRW", count: 15 },
  { name: "Singapore (SGX)", currency: "SGD", count: 10 },
  { name: "Australia (ASX)", currency: "AUD", count: 20 },
  { name: "Brazil (B3)", currency: "BRL", count: 15 },
];

// Mirrors scripts/run_scan.py's slugify() exactly - must stay in sync.
export function slugifyMarket(name: string): string {
  let out = name
    .toLowerCase()
    .split("")
    .map((ch) => (/[a-z0-9]/.test(ch) ? ch : "-"))
    .join("");
  while (out.includes("--")) {
    out = out.replaceAll("--", "-");
  }
  return out.replace(/^-+|-+$/g, "");
}

export const NAV_LINKS = [
  { href: "/scans", label: "Daily Scans" },
  { href: "/guides", label: "Guides" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/setup", label: "Setup" },
];

export const LEGAL_LINKS = [
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export const RESOURCE_LINKS = [
  { href: "/guides", label: "Guides" },
  { href: "/glossary", label: "Glossary" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

// Single source of truth for the guides index, the sitemap, and internal
// cross-links between guides - add a guide by adding one entry here.
export const GUIDES: { slug: string; title: string; description: string }[] = [
  {
    slug: "what-is-a-breakout-strategy",
    title: "What Is a Breakout Trading Strategy?",
    description:
      "How breakout trading works, why moving averages are used to confirm one, and the difference between a real breakout and a false one.",
  },
  {
    slug: "rsi-explained",
    title: "RSI Explained: How the Relative Strength Index Works",
    description:
      "What RSI actually measures, how it's calculated (Wilder's smoothing), and how to read overbought/oversold and pullback levels.",
  },
  {
    slug: "moving-averages-explained",
    title: "Moving Averages Explained: 30/50/200-Day Trend Analysis",
    description:
      "What a moving average is, why 30/50/200-day periods are common trend filters, and what it means when price and MAs align.",
  },
  {
    slug: "multi-timeframe-rsi-strategy",
    title: "Multi-Timeframe RSI Analysis: The RSI 5-Star Approach",
    description:
      "Why checking RSI on the monthly, weekly and daily chart together — instead of just one — filters out weaker setups.",
  },
  {
    slug: "stop-loss-and-risk-reward",
    title: "Stop-Loss, Risk-Reward and Position Sizing Explained",
    description:
      "How to set a stop-loss from a swing low, calculate risk-reward ratios, and size a position around a fixed risk amount.",
  },
];
