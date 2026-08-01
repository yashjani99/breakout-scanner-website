import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { AUTHOR_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Breakout Scanner Global Markets and this website.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="August 1, 2026">
      <h2>Acceptance of Terms</h2>
      <p>
        By downloading, installing, or using {SITE_NAME} (the &quot;Software&quot;), or by using
        this website, you agree to these Terms of Service. If you do not agree, do not use the
        Software or this website.
      </p>

      <h2>License</h2>
      <p>
        The Software is provided free of charge for personal, non-commercial and educational use.
        No rights to redistribute, sell, or sublicense the Software are granted. All other rights
        not expressly granted here are reserved.
      </p>

      <h2>No Investment Advice</h2>
      <p>
        The Software is a data-analysis tool, not an investment adviser. See the{" "}
        <a href="/disclaimer" className="text-accent underline">
          Disclaimer
        </a>{" "}
        for full detail. Nothing in these Terms changes or limits that disclaimer.
      </p>

      <h2>&quot;As Is&quot;, No Warranty</h2>
      <p>
        The Software and this website are provided &quot;as is&quot; and &quot;as available&quot;,
        without warranty of any kind, express or implied, including but not limited to warranties
        of merchantability, fitness for a particular purpose, accuracy, or non-infringement. We do
        not warrant that the Software will be error-free, uninterrupted, or that any data it
        displays will be accurate or current.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, in no event will the developer of {SITE_NAME} be
        liable for any indirect, incidental, special, consequential, or punitive damages, or any
        loss of profits, revenue, data, or trading losses, arising out of or related to your use
        of the Software or this website, even if advised of the possibility of such damages.
      </p>

      <h2>Acceptable Use</h2>
      <p>
        You agree not to use the Software or this website for any unlawful purpose, to attempt to
        disrupt or reverse-engineer the underlying data providers in a manner that violates their
        own terms of service, or to misrepresent the Software as investment advice to others.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        The Software relies on Yahoo Finance for market data and GitHub for distributing
        downloads. Your use of the Software is also subject to the terms of those third-party
        services, which we do not control.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        These Terms may be updated from time to time. Continued use of the Software or this
        website after a change constitutes acceptance of the revised Terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms can be directed to the developer via{" "}
        <a href={AUTHOR_URL} target="_blank" rel="noreferrer" className="text-accent underline">
          {AUTHOR_URL.replace("https://", "")}
        </a>
        .
      </p>
    </LegalLayout>
  );
}
