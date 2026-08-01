export const SITE_NAME = "Breakout Scanner Global Markets";
export const SITE_TAGLINE =
  "A free, self-contained Windows desktop scanner for breakout setups across 16 global stock markets.";
export const SITE_URL = "https://breakoutscanner.vercel.app";

export const AUTHOR_NAME = "Yash Jani";
export const AUTHOR_URL = "https://yashjani.biz";

export const APP_VERSION = "2.0.1";
export const APP_REPO_URL =
  "https://github.com/yashjani99/breakout-scanner-global-markets";

const RELEASE_BASE = `${APP_REPO_URL}/releases/download/v${APP_VERSION}`;

export const MSI_DOWNLOAD_URL = `${RELEASE_BASE}/BreakoutScannerIndianMarket-${APP_VERSION}-win64.msi`;
export const EXE_DOWNLOAD_URL = `${RELEASE_BASE}/BreakoutScannerIndianMarket-${APP_VERSION}.exe`;
export const MSI_SIZE_MB = 81;
export const EXE_SIZE_MB = 71;

// Opened in a background tab alongside every download click.
export const AD_SMARTLINK_URL =
  "https://remotelydependedchance.com/i7q4ejq465?key=bf5314d6b3115f72152c7799eb9fac75";

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
  { name: "China A-Shares", currency: "CNY", count: 15 },
  { name: "South Korea (KOSPI)", currency: "KRW", count: 15 },
  { name: "Singapore (SGX)", currency: "SGD", count: 10 },
  { name: "Australia (ASX)", currency: "AUD", count: 20 },
  { name: "Brazil (B3)", currency: "BRL", count: 15 },
];

export const NAV_LINKS = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/how-to-use", label: "How To Use" },
  { href: "/setup", label: "Setup" },
];

export const LEGAL_LINKS = [
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];
