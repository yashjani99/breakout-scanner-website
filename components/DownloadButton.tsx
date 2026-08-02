"use client";

import WindowsIcon from "./WindowsIcon";
import {
  AD_SMARTLINK_URL,
  APP_VERSION,
  DEB_DOWNLOAD_URL,
  DEB_SIZE_MB,
  DMG_DOWNLOAD_URL,
  DMG_SIZE_MB,
  EXE_DOWNLOAD_URL,
  EXE_SIZE_MB,
  MSI_DOWNLOAD_URL,
  MSI_SIZE_MB,
  RPM_DOWNLOAD_URL,
  RPM_SIZE_MB,
} from "@/lib/constants";

function openAdTab() {
  window.open(AD_SMARTLINK_URL, "_blank");
}

const OTHER_PLATFORMS = [
  { label: "Linux (.deb)", href: DEB_DOWNLOAD_URL, size: DEB_SIZE_MB },
  { label: "Linux (.rpm)", href: RPM_DOWNLOAD_URL, size: RPM_SIZE_MB },
  { label: "macOS (.dmg)", href: DMG_DOWNLOAD_URL, size: DMG_SIZE_MB },
];

export default function DownloadButton({ id }: { id?: string }) {
  return (
    <div id={id} className="flex scroll-mt-24 flex-col items-center gap-3">
      <a
        href={MSI_DOWNLOAD_URL}
        onClick={openAdTab}
        className="group inline-flex items-center gap-3 rounded-xl bg-accent px-7 py-4 text-background shadow-lg shadow-accent/20 transition hover:bg-accent/90 hover:shadow-accent/30"
      >
        <WindowsIcon className="h-7 w-7 shrink-0" />
        <span className="flex flex-col items-start leading-tight">
          <span className="text-base font-semibold">Download for Windows</span>
          <span className="text-xs font-medium opacity-80">
            MSI Installer &middot; v{APP_VERSION} &middot; {MSI_SIZE_MB} MB
          </span>
        </span>
      </a>
      <a
        href={EXE_DOWNLOAD_URL}
        onClick={openAdTab}
        className="text-sm text-muted underline decoration-dotted underline-offset-4 transition hover:text-accent"
      >
        or download the portable EXE ({EXE_SIZE_MB} MB, no install needed)
      </a>

      <div className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-muted">
        <span>Also available:</span>
        {OTHER_PLATFORMS.map((p, i) => (
          <span key={p.href}>
            <a
              href={p.href}
              onClick={openAdTab}
              className="underline decoration-dotted underline-offset-4 transition hover:text-accent"
            >
              {p.label}
            </a>
            <span className="text-muted/70"> ({p.size} MB)</span>
            {i < OTHER_PLATFORMS.length - 1 && <span className="mx-1.5">&middot;</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
