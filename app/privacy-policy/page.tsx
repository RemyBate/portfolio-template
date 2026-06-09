import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hole Rush Privacy Policy",
  description:
    "Privacy Policy for Hole Rush — offline Android arcade game by Remy Bate Mbu.",
};

const SUPPORT_EMAIL = "remymbu12@gmail.com";
const LAST_UPDATED = "June 7, 2026";

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto px-4 py-12 sm:py-16 max-w-3xl">
      <article className="rounded-2xl border bg-white dark:bg-neutral-900 dark:border-neutral-800 shadow-sm p-6 sm:p-8">
        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Hole Rush</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
          Hole Rush Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="mt-6 rounded-xl border-l-4 border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 dark:border-indigo-500 px-4 py-3">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            <strong>Summary:</strong> Hole Rush is an offline game. We do not require an
            account, show ads, or sell your data. Game progress and settings are saved on
            your device.
          </p>
        </div>

        <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          This Privacy Policy describes how <strong>Hole Rush</strong> (“the App”, “we”,
          “us”) handles information when you use our mobile game on Android devices.
        </p>
        <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          Questions? Contact{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-indigo-600 dark:text-indigo-400 underline underline-offset-2"
          >
            {SUPPORT_EMAIL}
          </a>
          .
        </p>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400">
            1. Information we collect
          </h2>
          <h3 className="mt-4 font-medium text-gray-900 dark:text-gray-100">
            Data stored on your device
          </h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
            The App saves game-related information locally so you can continue playing. This
            may include:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Game progress (current level, unlocked levels, scores)</li>
            <li>In-game currencies and items (coins, keys, gems, lives, boosters)</li>
            <li>Preferences (music, sound, vibration, notifications)</li>
            <li>Reward and progression values related to gameplay</li>
          </ul>
          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            This data stays on your device and is not sent to our servers. The current
            version does not use network connectivity for gameplay or accounts.
          </p>

          <h3 className="mt-6 font-medium text-gray-900 dark:text-gray-100">
            Information we do not collect
          </h3>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Name, email, or phone number (unless you contact us)</li>
            <li>Location, contacts, photos, microphone, or SMS</li>
            <li>Payment information (no in-app purchases in the current version)</li>
            <li>Advertising identifiers or analytics profiles</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400">
            2. How we use information
          </h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            Local save data is used only to restore progress, apply your settings, and
            provide core gameplay. We do not use it for advertising or cross-app tracking.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400">
            3. Sharing of information
          </h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            We do not share, sell, rent, or trade your personal information with third
            parties for marketing. We may disclose information only if required by law.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400">
            4. Third-party services
          </h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            The current version does not integrate third-party analytics, advertising, or
            social login SDKs. If that changes, we will update this policy and Google
            Play&apos;s Data safety section.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400">
            5. Permissions
          </h2>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Vibration</strong> — optional haptic feedback when enabled in Settings
            </li>
          </ul>
          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            The App does not request Internet access in the current release.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400">
            6. Data retention and deletion
          </h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            Data remains on your device until you clear app data or uninstall the App.
            Uninstalling Hole Rush removes locally stored game data.
          </p>
          <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            For help, email{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-indigo-600 dark:text-indigo-400 underline underline-offset-2"
            >
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400">
            7. Children&apos;s privacy
          </h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            We do not knowingly collect personal information from children. If you believe a
            child has contacted us with personal information, email us and we will delete
            it.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400">
            8. Security
          </h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            Because data is stored locally, its security also depends on your device
            settings. We do not transmit gameplay save data over the network in the current
            version.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400">
            9. Changes to this policy
          </h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            We may update this Privacy Policy from time to time. The &quot;Last updated&quot;
            date will change when we do. Continued use of the App after updates means you
            accept the revised policy.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400">
            10. Contact
          </h2>
          <dl className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
            <div>
              <dt className="inline font-semibold">Email: </dt>
              <dd className="inline">
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-indigo-600 dark:text-indigo-400 underline underline-offset-2"
                >
                  {SUPPORT_EMAIL}
                </a>
              </dd>
            </div>
            <div>
              <dt className="inline font-semibold">App: </dt>
              <dd className="inline">Hole Rush</dd>
            </div>
            <div>
              <dt className="inline font-semibold">Package: </dt>
              <dd className="inline">com.holerush.game</dd>
            </div>
          </dl>
        </section>

        <p className="mt-10 pt-6 border-t text-sm text-gray-600 dark:text-gray-400">
          <Link href="/" className="text-indigo-600 dark:text-indigo-400 hover:underline">
            ← Back to portfolio
          </Link>
        </p>
      </article>
    </main>
  );
}
