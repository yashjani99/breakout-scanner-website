import type { ReactNode } from "react";
import Link from "next/link";
import JsonLd from "./JsonLd";
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from "@/lib/constants";

export default function GuideLayout({
  title,
  description,
  datePublished,
  slug,
  children,
}: {
  title: string;
  description: string;
  datePublished: string;
  slug: string;
  children: ReactNode;
}) {
  const url = `${SITE_URL}/guides/${slug}`;

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          description,
          url,
          datePublished,
          dateModified: datePublished,
          author: {
            "@type": "Person",
            name: AUTHOR_NAME,
          },
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
          },
        }}
      />

      <Link href="/guides" className="text-sm text-accent hover:underline">
        ← All guides
      </Link>

      <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>
      <p className="mt-3 text-sm text-muted">
        By {AUTHOR_NAME} &middot; {datePublished}
      </p>

      <div className="prose-legal mt-10">{children}</div>
    </div>
  );
}
