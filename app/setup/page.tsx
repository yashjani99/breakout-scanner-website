import type { Metadata } from "next";
import DownloadButton from "@/components/DownloadButton";
import { APP_VERSION } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Setup",
  description: "How to download, install and launch Breakout Scanner Global Markets on Windows, Linux or macOS.",
};

const STEPS = [
  {
    title: "Download the installer",
    body: "Click the Download for Windows button below to get the MSI installer. Prefer not to install anything? Grab the portable EXE instead — it runs directly, no setup required.",
  },
  {
    title: "Run the MSI file",
    body: "Double-click the downloaded .msi file to launch the installer.",
  },
  {
    title: "Windows SmartScreen warning (expected)",
    body: "Because the installer isn't code-signed with a paid certificate yet, Windows may show a \"Windows protected your PC\" SmartScreen prompt. Click \"More info\", then \"Run anyway\" to continue. This is normal for small independent tools and does not mean the file is unsafe.",
  },
  {
    title: "Finish the install",
    body: "Follow the installer prompts. It installs to Program Files and adds Desktop and Start Menu shortcuts automatically — no configuration needed.",
  },
  {
    title: "Launch the app",
    body: "Open it from the Desktop shortcut or Start Menu. You'll see a five-second loading screen, then the main window with a market picker already set to India (NSE) and a scan starting automatically.",
  },
];

export default function SetupPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Setup</h1>
      <p className="mt-4 text-muted">
        Installing takes under a minute. Windows gets the most polish (native installer, Desktop
        and Start Menu shortcuts), but Linux and macOS builds are available too. Here&apos;s
        exactly what to expect.
      </p>

      <div className="mt-10">
        <DownloadButton />
      </div>

      <h2 className="mt-16 text-xl font-semibold text-foreground">Windows</h2>
      <ol className="mt-6 space-y-8">
        {STEPS.map((step, i) => (
          <li key={step.title} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-accent">
              {i + 1}
            </span>
            <div>
              <h3 className="font-semibold text-foreground">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-sm leading-relaxed text-muted">
        This same x64 installer also works on ARM64 Windows 11 devices via Microsoft&apos;s
        built-in x64 emulation.
      </p>

      <h2 className="mt-16 text-xl font-semibold text-foreground">Linux</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Debian/Ubuntu: download the <strong className="text-foreground">.deb</strong> and install
        it with your package manager (e.g. <code className="text-accent">sudo apt install ./breakout-scanner-indian-market_{APP_VERSION}_amd64.deb</code>).
        Fedora/RHEL/openSUSE: download the <strong className="text-foreground">.rpm</strong> and
        install with <code className="text-accent">sudo dnf install ./BreakoutScannerGlobalMarkets-{APP_VERSION}-1.x86_64.rpm</code> (or your
        distro&apos;s equivalent). Either way, a launcher named &quot;Breakout Scanner Global
        Markets&quot; appears in your applications menu.
      </p>

      <h2 className="mt-16 text-xl font-semibold text-foreground">macOS</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Download the <strong className="text-foreground">.dmg</strong>, open it, and drag
        &quot;Breakout Scanner Global Markets&quot; into your Applications folder. Since the app
        isn&apos;t notarized by Apple yet, the first launch may need a right-click →
        &quot;Open&quot; (instead of double-clicking) to bypass Gatekeeper&apos;s unidentified
        developer warning.
      </p>

      <div className="mt-16 rounded-xl border border-border bg-surface p-6">
        <h2 className="font-semibold text-foreground">System requirements</h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted">
          <li>Windows 10/11 (64-bit or ARM64), a common 64-bit Linux distribution, or macOS</li>
          <li>Around 100–200 MB of free disk space</li>
          <li>An internet connection (the scan fetches live data from Yahoo Finance)</li>
        </ul>
      </div>

      <div className="mt-8 rounded-xl border border-border bg-surface p-6">
        <h2 className="font-semibold text-foreground">Uninstalling</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Windows (MSI): open Settings → Apps → Installed apps, search for &quot;Breakout
          Scanner&quot;, and click Uninstall. Windows (portable EXE): just delete the .exe file.
          Linux: use your package manager (<code className="text-accent">sudo apt remove
          breakout-scanner-indian-market</code> or <code className="text-accent">sudo dnf remove
          BreakoutScannerGlobalMarkets</code>). macOS: drag the app from Applications to the Trash.
        </p>
      </div>

      <div className="mt-8 rounded-xl border border-border bg-surface p-6">
        <h2 className="font-semibold text-foreground">Current version</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          You&apos;re looking at the installer for v{APP_VERSION}.
        </p>
      </div>
    </div>
  );
}
