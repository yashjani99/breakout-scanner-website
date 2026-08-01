"use client";

import WindowsIcon from "./WindowsIcon";
import {
  AD_SMARTLINK_URL,
  APP_VERSION,
  EXE_DOWNLOAD_URL,
  EXE_SIZE_MB,
  MSI_DOWNLOAD_URL,
  MSI_SIZE_MB,
} from "@/lib/constants";

function openAdTab() {
  window.open(AD_SMARTLINK_URL, "_blank");
}

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
    </div>
  );
}
