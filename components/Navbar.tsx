"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent/15 text-sm font-bold text-accent">
            B
          </span>
          <span className="text-sm font-semibold tracking-tight text-foreground sm:text-base">
            {SITE_NAME}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#download"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-background transition hover:bg-accent/90"
          >
            Download
          </Link>
        </nav>

        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-2 text-sm text-muted hover:bg-surface hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#download"
            className="mt-2 rounded-lg bg-accent px-4 py-2 text-center text-sm font-semibold text-background"
            onClick={() => setOpen(false)}
          >
            Download
          </Link>
        </nav>
      )}
    </header>
  );
}
