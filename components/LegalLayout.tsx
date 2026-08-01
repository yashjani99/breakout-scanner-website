import type { ReactNode } from "react";

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>
      <p className="mt-3 text-sm text-muted">Last updated: {lastUpdated}</p>
      <div className="prose-legal mt-10">{children}</div>
    </div>
  );
}
