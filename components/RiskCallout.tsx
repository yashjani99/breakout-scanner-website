import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export default function RiskCallout({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`rounded-xl border border-warning/30 bg-warning-soft ${
        compact ? "p-4" : "p-6"
      }`}
    >
      <p className="flex items-center gap-2 text-sm font-semibold text-warning">
        <span aria-hidden>⚠</span> Not Financial Advice
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {SITE_NAME} is an educational tool. We are not financial advisors. Its signals come from
        a fixed, mechanical formula and can be wrong, incomplete, or based on delayed data. Use it
        at your own risk, and never make investment decisions based solely on its output. Read the
        full{" "}
        <Link href="/disclaimer" className="text-accent underline underline-offset-2">
          disclaimer
        </Link>
        .
      </p>
    </div>
  );
}
