import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

const ACCENT = "#ea580c";
const CONTACT_EMAIL = "founders@neuromorphic.vision";

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-10 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500">
      {children}
    </h2>
  );
}

export function Terms() {
  return (
    <div className="relative min-h-screen bg-white text-zinc-900">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 100%)",
        }}
      />

      <Navbar variant="solid" />

      <main className="relative mx-auto w-full max-w-3xl px-6 pb-24 pt-12 md:px-10">
        <p className="fade-up fade-up-1 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-400">
          Legal
        </p>
        <h1 className="fade-up fade-up-2 mt-4 font-hero text-3xl font-black leading-[1.1] tracking-[-0.03em] sm:text-4xl">
          Terms of <span style={{ color: ACCENT }}>Use</span>
        </h1>
        <p className="fade-up fade-up-3 mt-3 font-sans text-xs text-zinc-400">
          Last updated: July 2026
        </p>

        <div className="fade-up fade-up-3 mt-6 font-sans text-sm leading-[1.7] text-zinc-600 md:text-base">
          <SectionHeading>About this site</SectionHeading>
          <p className="mt-3">
            This website is an informational site operated by Neuromorphic
            (Cambridge, UK / San Francisco, US). By using it, you accept these
            terms. Nothing on this site constitutes a binding offer,
            professional advice, or a guarantee of any outcome.
          </p>

          <SectionHeading>ROI estimates</SectionHeading>
          <p className="mt-3">
            The ROI calculator produces representative, non-binding estimates
            generated from the inputs you provide and typical industry
            benchmarks. Estimates are provided "as is", without warranty of
            any kind, and actual results will vary by site, operation, and
            deployment. Do not rely on the estimates as the sole basis for
            business decisions.
          </p>

          <SectionHeading>Acceptable use</SectionHeading>
          <p className="mt-3">
            You agree not to submit unlawful, harmful, or irrelevant content
            to the calculator, not to attempt to disrupt or overload the
            service, and not to use it for any purpose other than evaluating
            robotics deployments. Rate limits apply, and we may restrict
            access in case of abuse.
          </p>

          <SectionHeading>Intellectual property</SectionHeading>
          <p className="mt-3">
            All content on this site — text, design, graphics, and branding —
            is owned by Neuromorphic or its licensors. You may not reproduce
            or reuse it without our prior written permission, except for
            personal, non-commercial viewing.
          </p>

          <SectionHeading>Limitation of liability</SectionHeading>
          <p className="mt-3">
            To the maximum extent permitted by law, Neuromorphic is not liable
            for any indirect, incidental, or consequential loss arising from
            your use of this site or reliance on its content, including the
            ROI estimates. Nothing in these terms excludes liability that
            cannot be excluded by law.
          </p>

          <SectionHeading>Governing law</SectionHeading>
          <p className="mt-3">
            Any disputes arising from the use of this site will be handled
            under the applicable law of our operating jurisdictions.
          </p>

          <SectionHeading>Contact</SectionHeading>
          <p className="mt-3">
            Questions about these terms? Email{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-zinc-800 underline underline-offset-4 hover:text-zinc-900"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>

        <p className="mt-14 flex flex-wrap items-center gap-x-5 gap-y-2 font-sans text-xs text-zinc-400">
          <Link
            to="/"
            className="underline-offset-4 hover:text-zinc-700 hover:underline"
          >
            ← Back to home
          </Link>
          <Link
            to="/privacy"
            className="underline-offset-4 hover:text-zinc-700 hover:underline"
          >
            Privacy Policy
          </Link>
        </p>
      </main>
    </div>
  );
}
