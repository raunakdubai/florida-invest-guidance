import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Florida Invest" },
      {
        name: "description",
        content:
          "Read the Florida Invest terms and conditions governing your use of our website and services.",
      },
      { property: "og:title", content: "Terms & Conditions | Florida Invest" },
      {
        property: "og:description",
        content:
          "Read the Florida Invest terms and conditions governing your use of our website and services.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
});

const PHONE_HREF = "tel:+13052065720";

function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-xl font-semibold tracking-tight text-foreground">
            Florida Invest
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to home
          </Link>
        </div>
      </header>

      <main className="flex-1 px-4 py-16 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: September 15, 2026</p>

          <div className="mt-10 space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p className="mt-3 leading-relaxed">
                By accessing or using the Florida Invest website, you agree to be bound by these
                Terms & Conditions. If you do not agree, please do not use the website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">2. Use of the Website</h2>
              <p className="mt-3 leading-relaxed">
                The content on this website is for general informational and educational purposes
                only. You may view, download, and print pages for personal, non-commercial use. You
                may not reproduce, distribute, or exploit content for commercial purposes without
                our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">3. No Financial Advice</h2>
              <p className="mt-3 leading-relaxed">
                Florida Invest provides educational guidance and general information. We are not a
                registered investment adviser, broker-dealer, or tax professional. Nothing on this
                website constitutes personalized investment, tax, or legal advice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">4. Limitation of Liability</h2>
              <p className="mt-3 leading-relaxed">
                To the fullest extent permitted by law, Florida Invest and its representatives will
                not be liable for any direct, indirect, incidental, or consequential damages arising
                from your use of the website or reliance on its content.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">5. Intellectual Property</h2>
              <p className="mt-3 leading-relaxed">
                All text, images, logos, and other content on this website are the property of
                Florida Invest or its licensors and are protected by copyright and trademark laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">6. Links to Third Parties</h2>
              <p className="mt-3 leading-relaxed">
                This website may contain links to third-party websites. We are not responsible for
                the content, accuracy, or practices of any linked site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">7. Governing Law</h2>
              <p className="mt-3 leading-relaxed">
                These terms are governed by the laws of the State of Florida, without regard to
                conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">8. Changes to Terms</h2>
              <p className="mt-3 leading-relaxed">
                We may update these Terms & Conditions at any time. Continued use of the website
                after changes constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">9. Contact Us</h2>
              <p className="mt-3 leading-relaxed">
                Questions about these terms may be directed to Florida Invest at{" "}
                <a href={PHONE_HREF} className="font-medium text-primary hover:underline">
                  +1 (305) 206-5720
                </a>{" "}
                or 15807 Biscayne Blvd #101, North Miami Beach, FL 33160.
              </p>
            </section>
          </div>
        </article>
      </main>

      <footer className="border-t border-border bg-cream px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Florida Invest. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
