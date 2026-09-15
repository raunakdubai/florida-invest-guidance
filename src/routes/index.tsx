import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, MapPin, Shield, ArrowRight } from "lucide-react";
import aboutImage from "../assets/florida-invest-about.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Florida Invest | Financial Guidance & Investment Education" },
      {
        name: "description",
        content:
          "Florida Invest provides straightforward guidance on saving, investing, and financial planning for adults 45+. Call our team to learn more.",
      },
      {
        property: "og:title",
        content: "Florida Invest | Financial Guidance & Investment Education",
      },
      {
        property: "og:description",
        content:
          "Florida Invest provides straightforward guidance on saving, investing, and financial planning for adults 45+. Call our team to learn more.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const PHONE = "+1 (305) 206-5720";
const PHONE_HREF = "tel:+13052065720";
const ADDRESS = "15807 Biscayne Blvd #101, North Miami Beach, FL 33160, United States";
const MAP_URL =
  "https://www.openstreetmap.org/export/embed.html?bbox=-80.1476%2C25.9227%2C-80.1416%2C25.9267&layer=mapnik&marker=25.9247%2C-80.1446";

function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 text-foreground">
            <span className="text-xl font-semibold tracking-tight">Florida Invest</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            <a
              href="#how-we-help"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              How We Help
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              CALL NOW
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="border-t border-border bg-background px-4 py-4 md:hidden"
          >
            <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
              <a
                href="#how-we-help"
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                How We Help
              </a>
              <a
                href="#about"
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </a>
              <a
                href={PHONE_HREF}
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                CALL NOW
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section
          className="relative overflow-hidden bg-cream px-4 py-20 sm:px-6 sm:py-24 lg:py-32"
          aria-labelledby="hero-heading"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1
                id="hero-heading"
                className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              >
                Make More Informed Decisions About Your Money
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Florida Invest offers straightforward guidance on saving, planning, and investing
                for adults 45 and older. No confusing jargon, no unrealistic promises — just clear
                information to help you move forward with confidence.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  CALL NOW
                </a>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Speak with our team to learn more.</p>
            </div>
          </div>
        </section>

        {/* How We Help */}
        <section
          id="how-we-help"
          className="px-4 py-20 sm:px-6 sm:py-24 lg:py-32"
          aria-labelledby="how-heading"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2
                id="how-heading"
                className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
              >
                Simple Guidance. Clearer Financial Decisions.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We focus on three areas that matter most to the adults we serve.
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-light text-navy">
                  <Shield className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-card-foreground">Save Smarter</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Learn practical ways to organize your savings, reduce unnecessary risk, and
                  build habits that support your long-term goals.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-light text-navy">
                  <ArrowRight className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-card-foreground">
                  Understand Your Options
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Get clear explanations of common financial products and strategies so you can
                  compare choices without feeling overwhelmed.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-light text-navy">
                  <MapPin className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-card-foreground">
                  Plan With Greater Clarity
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Think through retirement, income, and legacy questions with a structured,
                  pressure-free approach that puts your priorities first.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="bg-cream px-4 py-20 sm:px-6 sm:py-24 lg:py-32"
          aria-labelledby="about-heading"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="order-2 lg:order-1">
                <h2
                  id="about-heading"
                  className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
                >
                  Guidance You Can Understand
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Florida Invest was built for adults 45 and older who want reliable, easy-to-follow
                  guidance about saving and investing. We know this stage of life comes with
                  important questions — about retirement timing, income security, and how to make
                  your money work harder without taking unnecessary risks.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  We do not use hype, pressure, or confusing financial jargon. Our goal is to help
                  you understand your options so you can make decisions that feel right for you and
                  your family.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Whether you are just starting to think about your financial plan or reviewing an
                  existing one, our team is here to provide calm, professional support.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                  <img
                    src={aboutImage}
                    alt="A calm, professional financial guidance conversation in a bright, welcoming office"
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="bg-navy px-4 py-20 text-primary-foreground sm:px-6 sm:py-24 lg:py-32"
          aria-labelledby="cta-heading"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="cta-heading"
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Have Questions About Your Financial Options?
            </h2>
            <p className="mt-6 text-lg leading-relaxed opacity-90">
              Speaking with our team is the easiest way to learn how Florida Invest can help you
              get clearer on your next steps. There is no pressure and no obligation.
            </p>
            <div className="mt-10">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-foreground px-8 py-4 text-lg font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                CALL NOW — (305) 206-5720
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="px-4 py-20 sm:px-6 sm:py-24 lg:py-32"
          aria-labelledby="contact-heading"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2
                id="contact-heading"
                className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
              >
                Contact Florida Invest
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Reach us by phone or visit our North Miami Beach office.
              </p>
            </div>

            <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Florida Invest</h3>
                  <address className="mt-3 not-italic leading-relaxed text-muted-foreground">
                    15807 Biscayne Blvd #101
                    <br />
                    North Miami Beach, FL 33160
                    <br />
                    United States
                  </address>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground">Phone</h3>
                  <a
                    href={PHONE_HREF}
                    className="mt-3 inline-flex items-center gap-2 text-lg font-medium text-primary transition-colors hover:text-primary/90"
                  >
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    {PHONE}
                  </a>
                </div>

                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  CALL NOW
                </a>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <iframe
                  title="Map showing Florida Invest office location on Biscayne Blvd in North Miami Beach, FL"
                  src={MAP_URL}
                  width="100%"
                  height="400"
                  style={{ border: 0, minHeight: "320px" }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-cream px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-foreground">Florida Invest</h2>
              <address className="mt-4 not-italic text-sm leading-relaxed text-muted-foreground">
                15807 Biscayne Blvd #101
                <br />
                North Miami Beach, FL 33160
                <br />
                United States
              </address>
              <a
                href={PHONE_HREF}
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/90"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {PHONE}
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                Legal
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link to="/privacy" className="transition-colors hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="transition-colors hover:text-foreground">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/disclaimer" className="transition-colors hover:text-foreground">
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#how-we-help" className="transition-colors hover:text-foreground">
                    How We Help
                  </a>
                </li>
                <li>
                  <a href="#about" className="transition-colors hover:text-foreground">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="transition-colors hover:text-foreground">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-border pt-8">
            <p className="text-xs leading-relaxed text-muted-foreground">
              <strong>Disclaimer:</strong> Florida Invest provides general financial education and
              guidance. We do not provide personalized investment advice, tax advice, or legal advice.
              Information on this website is for educational purposes only and should not be construed
              as a recommendation to buy, sell, or hold any security or financial product. Past
              performance is not indicative of future results. Please consult with a licensed financial,
              tax, or legal professional before making any financial decisions.
            </p>
            <p className="mt-6 text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Florida Invest. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
