import type { Metadata } from "next";
import DownloadButton from "@/components/DownloadButton";
import { APP_VERSION } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Setup",
  description: "How to download, install and launch Breakout Scanner Global Markets on Windows.",
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
    body: "Because the installer isn't code-signed with a paid certificate yet, Windows may show a \"Windows protected your PC\" SmartScreen prompt. Click \"More info\", then \"Run anyway\" to continue. This is normal for small independent tools and does not mean the file is unsafe — you can verify what you're installing any time by reading the source code on GitHub.",
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
        Installing takes under a minute. Here&apos;s exactly what to expect.
      </p>

      <div className="mt-10">
        <DownloadButton />
      </div>

      <ol className="mt-16 space-y-8">
        {STEPS.map((step, i) => (
          <li key={step.title} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-accent">
              {i + 1}
            </span>
            <div>
              <h2 className="font-semibold text-foreground">{step.title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-16 rounded-xl border border-border bg-surface p-6">
        <h2 className="font-semibold text-foreground">System requirements</h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted">
          <li>Windows 10 or Windows 11, 64-bit</li>
          <li>Around 200 MB of free disk space</li>
          <li>An internet connection (the scan fetches live data from Yahoo Finance)</li>
        </ul>
      </div>

      <div className="mt-8 rounded-xl border border-border bg-surface p-6">
        <h2 className="font-semibold text-foreground">Uninstalling</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          If you installed via the MSI: open Windows Settings → Apps → Installed apps, search for
          &quot;Breakout Scanner&quot;, and click Uninstall. If you used the portable EXE, just delete
          the .exe file — nothing else was installed on your system.
        </p>
      </div>

      <div className="mt-8 rounded-xl border border-border bg-surface p-6">
        <h2 className="font-semibold text-foreground">Current version</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          You&apos;re looking at the installer for v{APP_VERSION}. Every release, including
          release notes, is published on{" "}
          <a
            href="https://github.com/yashjani99/breakout-scanner-global-markets/releases"
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:underline"
          >
            GitHub Releases
          </a>
          .
        </p>
      </div>
    </div>
  );
}
