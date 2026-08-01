import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { AUTHOR_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Financial disclaimer for Breakout Scanner Global Markets — not financial advice, use at your own risk.",
};

export default function DisclaimerPage() {
  return (
    <LegalLayout title="Disclaimer" lastUpdated="August 1, 2026">
      <h2>Not Financial Advice</h2>
      <p>
        {SITE_NAME} (the &quot;Software&quot;) and this website are provided strictly for
        educational and informational purposes. We are not registered financial advisors,
        broker-dealers, investment managers, or tax professionals. Nothing produced by the
        Software, and nothing on this website, constitutes financial, investment, legal, or tax
        advice, or a recommendation to buy, sell, or hold any security in any market.
      </p>

      <h2>The Output Can Be Wrong</h2>
      <p>
        The Software applies a fixed, mechanical formula (moving-average alignment, a momentum
        check, and simple stop-loss / target calculations) to third-party market data. That
        formula is simplistic by design, the underlying data may be delayed, incomplete, or
        inaccurate, and the Software itself may contain bugs. Results can be wrong, misleading,
        or based on stale data, and should never be treated as a signal of fact.
      </p>

      <h2>Use At Your Own Risk</h2>
      <p>
        Trading and investing in securities involves substantial risk of loss, including the
        potential loss of your entire investment. Past performance — whether of a strategy, a
        stock, or this tool&apos;s past results — is not indicative of future results. Any
        decision you make using information from the Software or this website is made entirely
        at your own discretion and risk.
      </p>

      <h2>No Liability</h2>
      <p>
        To the fullest extent permitted by law, the developer of {SITE_NAME} disclaims all
        liability for any direct, indirect, incidental, consequential, or other damages arising
        from your use of, or inability to use, the Software or this website, including but not
        limited to trading losses.
      </p>

      <h2>Consult a Professional</h2>
      <p>
        Before making any investment decision, please consult a licensed, qualified financial
        advisor who understands your personal financial situation, objectives, and risk
        tolerance.
      </p>

      <h2>Questions</h2>
      <p>
        For questions about this disclaimer, you can reach the developer via{" "}
        <a href={AUTHOR_URL} target="_blank" rel="noreferrer" className="text-accent underline">
          {AUTHOR_URL.replace("https://", "")}
        </a>
        .
      </p>
    </LegalLayout>
  );
}
