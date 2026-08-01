import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { AUTHOR_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Breakout Scanner Global Markets and this website.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="August 1, 2026">
      <h2>The Short Version</h2>
      <p>
        The {SITE_NAME} desktop application does not collect, store, or transmit any personal
        data. There are no user accounts, no telemetry, and no analytics inside the app. It
        connects only to Yahoo Finance, directly from your own computer, to fetch public market
        data.
      </p>

      <h2>The Desktop Application</h2>
      <ul>
        <li>No account or sign-up is required or possible.</li>
        <li>No usage data, crash reports, or telemetry are collected or sent anywhere.</li>
        <li>
          The only network connections the app makes are to Yahoo Finance, to download the price
          history needed to run a scan.
        </li>
        <li>
          Files you export (Excel or PDF) are saved only to the location you choose on your own
          machine. We never see them.
        </li>
      </ul>

      <h2>This Website</h2>
      <p>
        This website is a static set of pages hosted on Vercel. Like virtually any web host,
        Vercel&apos;s infrastructure automatically logs standard technical information for
        security and performance purposes — for example, IP address, browser type, and pages
        requested. We do not add any additional analytics, advertising, or tracking scripts of
        our own, and we do not use cookies for tracking.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        Market data is provided by Yahoo Finance. Software downloads are served from GitHub
        Releases. Your use of those services is subject to their own respective privacy
        policies, which are outside our control.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        This website and software are not directed at children, and we do not knowingly collect
        any information from children.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        If this policy changes, the &quot;Last updated&quot; date at the top of this page will
        change accordingly.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy can be directed to the developer via{" "}
        <a href={AUTHOR_URL} target="_blank" rel="noreferrer" className="text-accent underline">
          {AUTHOR_URL.replace("https://", "")}
        </a>
        .
      </p>
    </LegalLayout>
  );
}
