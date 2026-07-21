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

export function Privacy() {
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
          Privacy <span style={{ color: ACCENT }}>Policy</span>
        </h1>
        <p className="fade-up fade-up-3 mt-3 font-sans text-xs text-zinc-400">
          Last updated: July 2026
        </p>

        <div className="fade-up fade-up-3 mt-6 font-sans text-sm leading-[1.7] text-zinc-600 md:text-base">
          <SectionHeading>Who we are</SectionHeading>
          <p className="mt-3">
            This website is operated by Neuromorphic (Cambridge, UK / San
            Francisco, US), a robotics company. If you have any questions
            about this policy or how we handle your data, contact us at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-zinc-800 underline underline-offset-4 hover:text-zinc-900"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>

          <SectionHeading>What data we process</SectionHeading>
          <p className="mt-3">
            We keep data processing to a minimum. The site involves three
            kinds of processing:
          </p>
          <ul className="mt-3 list-disc space-y-2.5 pl-5">
            <li>
              <span className="font-medium text-zinc-800">
                Contact and booking data.
              </span>{" "}
              If you email us or book a meeting through cal.com, the details
              you provide (name, email, meeting notes) are processed by
              cal.com under{" "}
              <a
                href="https://cal.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-800 underline underline-offset-4 hover:text-zinc-900"
              >
                their privacy policy
              </a>{" "}
              and used by us to respond to you.
            </li>
            <li>
              <span className="font-medium text-zinc-800">
                Hosting and server logs.
              </span>{" "}
              The site is hosted on Vercel, which processes IP addresses and
              standard technical request logs as part of operating and
              securing the service.
            </li>
            <li>
              <span className="font-medium text-zinc-800">Fonts.</span> Fonts
              are served by Google Fonts, which means your IP address is
              transmitted to Google when the site loads.
            </li>
          </ul>

          <SectionHeading>Legal bases</SectionHeading>
          <p className="mt-3">
            Where the GDPR applies, we rely on Art. 6(1)(b) GDPR (performance
            of a contract or pre-contractual steps taken at your request) for
            processing your booking requests and correspondence, and Art.
            6(1)(f) GDPR (legitimate interest) for hosting, security, and
            keeping the site running reliably.
          </p>

          <SectionHeading>International transfers</SectionHeading>
          <p className="mt-3">
            Our providers (Vercel, cal.com, Google) are based in or process
            data in the United States. Where personal data is
            transferred outside the UK/EEA, transfers are safeguarded by
            standard contractual clauses and/or the EU–US Data Privacy
            Framework, as applicable to each provider.
          </p>

          <SectionHeading>Retention</SectionHeading>
          <p className="mt-3">
            Email correspondence and booking details are kept only as long as
            needed to handle your enquiry and any resulting relationship.
          </p>

          <SectionHeading>Your rights</SectionHeading>
          <p className="mt-3">
            Depending on your location, you have the right to access,
            rectification, erasure, restriction of processing, data
            portability, and to object to processing of your personal data.
            You also have the right to lodge a complaint with a supervisory
            authority. To exercise any of these rights, email{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-zinc-800 underline underline-offset-4 hover:text-zinc-900"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>

          <SectionHeading>No cookies or tracking</SectionHeading>
          <p className="mt-3">
            This site sets no cookies and uses no analytics. There is nothing
            to opt out of, and no cookie banner is needed.
          </p>

          <SectionHeading>Changes to this policy</SectionHeading>
          <p className="mt-3">
            We may update this policy as the site evolves. The date at the top
            reflects the latest revision; material changes will be posted on
            this page.
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
            to="/terms"
            className="underline-offset-4 hover:text-zinc-700 hover:underline"
          >
            Terms of Use
          </Link>
        </p>
      </main>
    </div>
  );
}
