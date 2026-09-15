import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy | Florida Invest" },
      {
        name: "description",
        content:
          "Read the Florida Invest privacy policy to learn how we handle your personal information.",
      },
      { property: "og:title", content: "Privacy Policy | Florida Invest" },
      {
        property: "og:description",
        content:
          "Read the Florida Invest privacy policy to learn how we handle your personal information.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
});

const PHONE_HREF = "tel:+13052065720";

function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: September 15, 2026</p>

          <div className="mt-10 space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
              <p className="mt-3 leading-relaxed">
                Florida Invest respects your privacy. This Privacy Policy explains how we collect,
                use, and protect information when you visit our website or contact us by phone.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">2. Information We Collect</h2>
              <p className="mt-3 leading-relaxed">
                We may collect basic contact information you voluntarily provide, such as your name,
                phone number, email address, and any details you share when you call or write to us.
                We do not collect sensitive financial information through this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
              <p className="mt-3 leading-relaxed">
                We use your information solely to respond to your inquiries, schedule consultations,
                and provide the educational guidance you request. We do not sell or rent your
                personal information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">4. Cookies and Analytics</h2>
              <p className="mt-3 leading-relaxed">
                We may use basic analytics tools to understand website traffic and improve user
                experience. These tools may use cookies or similar technologies. You can disable
                cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">5. Data Security</h2>
              <p className="mt-3 leading-relaxed">
                We take reasonable steps to protect your information from unauthorized access or
                disclosure. However, no online transmission or storage system can be guaranteed to be
                100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">6. Your Choices</h2>
              <p className="mt-3 leading-relaxed">
                You may contact us at any time to update, correct, or request deletion of your
                personal information. We will honor reasonable requests in accordance with applicable
                law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">7. Changes to This Policy</h2>
              <p className="mt-3 leading-relaxed">
                We may update this Privacy Policy from time to time. The updated version will be
                posted on this page with a revised date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">8. Contact Us</h2>
              <p className="mt-3 leading-relaxed">
                If you have questions about this Privacy Policy, please call us at{" "}
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
