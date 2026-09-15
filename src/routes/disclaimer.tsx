import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/disclaimer")({
  component: DisclaimerPage,
  head: () => ({
    meta: [
      { title: "Disclaimer | Florida Invest" },
      {
        name: "description",
        content:
          "Read the Florida Invest disclaimer regarding financial education, investment advice, and risk disclosures.",
      },
      { property: "og:title", content: "Disclaimer | Florida Invest" },
      {
        property: "og:description",
        content:
          "Read the Florida Invest disclaimer regarding financial education, investment advice, and risk disclosures.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/disclaimer" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
});

const PHONE_HREF = "tel:+13052065720";

function DisclaimerPage() {
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
            Disclaimer
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: September 15, 2026</p>

          <div className="mt-10 space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground">General Information Only</h2>
              <p className="mt-3 leading-relaxed">
                The information provided on this website by Florida Invest is for general educational
                and informational purposes only. It is not intended to be and does not constitute
                financial, investment, tax, legal, or other professional advice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">No Personalized Advice</h2>
              <p className="mt-3 leading-relaxed">
                Florida Invest does not provide personalized investment recommendations or specific
                financial planning advice through this website. Any guidance provided during a
                consultation is educational in nature and should not be interpreted as a
                recommendation to buy, sell, or hold any particular security, insurance product, or
                financial instrument.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Consult a Professional</h2>
              <p className="mt-3 leading-relaxed">
                Before making any financial decision, you should consult with a licensed financial
                adviser, tax professional, attorney, or other qualified professional who can review
                your complete financial situation and provide advice tailored to your needs.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">No Guarantees</h2>
              <p className="mt-3 leading-relaxed">
                Past performance is not indicative of future results. Florida Invest makes no
                representations or warranties about the accuracy, completeness, or suitability of
                any information on this website for any purpose.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Investment Risk</h2>
              <p className="mt-3 leading-relaxed">
                All investments carry risk, including the possible loss of principal. You should
                carefully consider your own risk tolerance, financial objectives, and time horizon
                before investing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Not a Registered Adviser</h2>
              <p className="mt-3 leading-relaxed">
                Florida Invest is not a registered investment adviser, broker-dealer, or securities
                firm. Our services are limited to education and general guidance for adults 45 and
                older.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Contact Us</h2>
              <p className="mt-3 leading-relaxed">
                If you have any questions about this disclaimer, please contact us at{" "}
                <a href={PHONE_HREF} className="font-medium text-primary hover:underline">
                  +1 (305) 206-5720
                </a>{" "}
                or visit our office at 15807 Biscayne Blvd #101, North Miami Beach, FL 33160.
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
