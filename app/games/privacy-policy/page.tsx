import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Games Privacy Policy",
  description:
    "Master Privacy Policy for all mobile games, applications, and digital entertainment products published by RemyDev (Remy Mbu).",
};

const SUPPORT_EMAIL = "remymbu12@gmail.com";
const WEBSITE_URL = "https://remydev.de";
const PRIVACY_POLICY_URL = "https://remydev.de/games/privacy-policy";
const LAST_UPDATED = "June 9, 2026";
const PUBLISHER = "RemyDev (Remy Mbu)";

export default function GamesPrivacyPolicyPage() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <article className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 sm:p-10">
          <p className="text-sm font-semibold text-violet-600">RemyDev Mobile Games</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Games Privacy Policy
          </h1>

          <dl className="mt-5 space-y-2 text-sm text-gray-600">
            <div>
              <dt className="inline font-medium text-gray-700">Publisher: </dt>
              <dd className="inline">{PUBLISHER}</dd>
            </div>
            <div>
              <dt className="inline font-medium text-gray-700">Website: </dt>
              <dd className="inline">
                <a
                  href={WEBSITE_URL}
                  className="text-violet-600 font-medium hover:text-violet-700 underline underline-offset-2"
                >
                  {WEBSITE_URL}
                </a>
              </dd>
            </div>
            <div>
              <dt className="inline font-medium text-gray-700">Support Email: </dt>
              <dd className="inline">
                <SupportEmail />
              </dd>
            </div>
            <div>
              <dt className="inline font-medium text-gray-700">Last updated: </dt>
              <dd className="inline">{LAST_UPDATED}</dd>
            </div>
          </dl>

          <p className="mt-6 text-gray-800 leading-relaxed font-medium">
            This Privacy Policy applies to all current and future mobile games, applications, and
            digital entertainment products published under the RemyDev brand.
          </p>

          <div className="mt-6 rounded-xl border-l-4 border-violet-600 bg-violet-50 px-4 py-3 space-y-3">
            <p className="text-gray-800 leading-relaxed">
              <strong>About this policy:</strong> This is a single, reusable privacy policy for
              all products published by {PUBLISHER}. It describes the full range of features that
              may be offered across our games and applications, including features that any
              individual title may not use.
            </p>
            <p className="text-gray-800 leading-relaxed">
              <strong>Per-game applicability:</strong> Not every game includes every feature
              described below. The features in use depend on the specific game you are playing.
              Please refer to each game&apos;s app store listing and in-app disclosures to
              understand which features apply to that title.
            </p>
          </div>

          <p className="mt-6 text-gray-700 leading-relaxed">
            This Privacy Policy describes how {PUBLISHER} (&quot;RemyDev&quot;, &quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;) collects, uses, stores, shares, and protects
            information when you download, install, access, or use our mobile games, applications,
            and digital entertainment products on Android and other supported platforms.
          </p>

          <PolicySection title="1. Scope">
            <p className="mt-3 text-gray-700 leading-relaxed">
              This policy applies to all current and future mobile games, applications, and digital
              entertainment products published under the RemyDev brand, regardless of title, genre,
              or release date. It is intended to remain valid as new products are released, without
              requiring a separate privacy policy for each title.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              For privacy inquiries, data subject requests, or customer support, contact us at{" "}
              <SupportEmail />.
            </p>
          </PolicySection>

          <PolicySection title="2. Offline and online games">
            <h3 className="mt-4 font-semibold text-gray-900">Offline games</h3>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Some of our games are designed to function without an Internet connection for core
              gameplay. In such cases, game progress and settings are typically stored locally on
              your device. Offline play generally does not require a user account unless the game
              offers optional online features.
            </p>
            <h3 className="mt-6 font-semibold text-gray-900">Online games and online features</h3>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Some games or features may require an active Internet connection—for example, cloud
              saves, leaderboards, account sign-in, advertising, in-app purchases, analytics, crash
              reporting, or push notifications. When you use online features, limited technical
              information (such as device identifiers, IP address, and usage logs) may be processed
              by us or by third-party service providers acting on our behalf.
            </p>
          </PolicySection>

          <PolicySection title="3. User accounts and authentication">
            <p className="mt-3 text-gray-700 leading-relaxed">
              Some games do not require an account. Others may offer optional or required user
              accounts to enable sign-in across devices, synchronize progress, participate in
              leaderboards, or restore purchases.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Where account functionality is available, authentication may be provided through:
            </p>
            <PolicyList
              items={[
                "Email address and password, or one-time verification codes",
                "Google Sign-In or other platform-based sign-in services",
                "Anonymous or guest accounts linked to a device identifier",
                "Game platform services (for example, Google Play Games)",
              ]}
            />
            <p className="mt-4 text-gray-700 leading-relaxed">
              Account-related information may include a display name, email address, user
              identifier, authentication tokens, and gameplay data associated with your account. We
              use this information solely to provide and maintain account-related features for the
              applicable game.
            </p>
          </PolicySection>

          <PolicySection title="4. Local device storage">
            <p className="mt-3 text-gray-700 leading-relaxed">
              Our games may store information locally on your device to preserve your progress and
              preferences. Depending on the game, locally stored data may include:
            </p>
            <PolicyList
              items={[
                "Game progress, completed levels, and unlocked content",
                "Scores, achievements, and in-game statistics",
                "Virtual currencies, items, lives, boosters, or similar in-game assets",
                "Audio, vibration, notification, and other gameplay settings",
                "Cached assets or temporary files required for performance",
              ]}
            />
            <p className="mt-4 text-gray-700 leading-relaxed">
              Local data generally remains on your device until you clear the application&apos;s
              storage through your device settings or uninstall the game. Uninstalling a game
              typically removes locally stored data unless you have also saved progress through a
              cloud save or user account.
            </p>
          </PolicySection>

          <PolicySection title="5. Cloud saves">
            <p className="mt-3 text-gray-700 leading-relaxed">
              Some games may offer optional or automatic cloud saving to restore progress on a new
              device or after reinstalling the application. Cloud save functionality may be
              provided through:
            </p>
            <PolicyList
              items={[
                "Our own backend infrastructure",
                "Google Play Games saved games or comparable platform services",
                "Third-party backend, hosting, or authentication providers",
              ]}
            />
            <p className="mt-4 text-gray-700 leading-relaxed">
              Cloud save data typically includes gameplay progress, settings, and identifiers
              necessary to associate saved data with your account or device. We retain cloud save
              data only for as long as required to provide the service or until you submit a valid
              deletion request, where applicable.
            </p>
          </PolicySection>

          <PolicySection title="6. Advertising">
            <p className="mt-3 text-gray-700 leading-relaxed">
              Some games may display advertising to support free or ad-supported versions of the
              application. Advertisements may be delivered through third-party advertising
              networks, including <strong>Google AdMob</strong> and similar partners. Not all games
              include advertising.
            </p>

            <h3 className="mt-6 font-semibold text-gray-900">Ad formats that may be used</h3>
            <PolicyList
              items={[
                "Banner ads: advertisements displayed within the game interface",
                "Interstitial ads: full-screen advertisements shown at natural transition points, such as between levels",
                "Rewarded ads: optional video advertisements that you may choose to view in exchange for in-game benefits",
              ]}
            />

            <h3 className="mt-6 font-semibold text-gray-900">Information processed for advertising</h3>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Advertising partners, including Google AdMob, may collect or receive device and usage
              information to deliver, measure, and, where permitted by law and platform policy,
              personalize advertisements. This may include your advertising identifier, IP address,
              device model, operating system version, application interactions, and ad performance
              metrics.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              You may be able to limit ad personalization through your device settings or Google
              account preferences. We do not sell your personal information. Advertising partners
              process data in accordance with their own privacy policies and applicable consent
              requirements.
            </p>
          </PolicySection>

          <PolicySection title="7. In-app purchases and premium upgrades">
            <p className="mt-3 text-gray-700 leading-relaxed">
              Some games may offer in-app purchases or premium upgrades—such as ad removal, content
              unlocks, virtual currency, subscriptions, or cosmetic items. All payments are processed
              by the applicable app store (for example, Google Play) and are not collected directly
              by us.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              We do not receive your full payment card or banking details. We may receive purchase
              receipts, product identifiers, transaction status, and information necessary to
              validate, fulfill, and restore purchases. Purchase records may be stored locally
              and, where supported, associated with your user account or platform profile.
            </p>
          </PolicySection>

          <PolicySection title="8. Analytics">
            <p className="mt-3 text-gray-700 leading-relaxed">
              Some games may use analytics services to understand how players interact with the
              application, improve features, and address usability issues. Analytics may process
              aggregated or pseudonymous information, including:
            </p>
            <PolicyList
              items={[
                "Session duration, screens viewed, and feature usage patterns",
                "Device type, operating system version, language, and application version",
                "Performance metrics and crash-free session rates",
                "General gameplay events (for example, level starts, completions, or feature activations)",
              ]}
            />
            <p className="mt-4 text-gray-700 leading-relaxed">
              Analytics may be operated by us or by third-party providers. We use analytics to
              improve our games and services. We do not use analytics to sell personal information.
            </p>
          </PolicySection>

          <PolicySection title="9. Crash reporting">
            <p className="mt-3 text-gray-700 leading-relaxed">
              Some games may use crash reporting tools to identify and resolve stability issues.
              Crash reports may contain technical information such as error logs, stack traces,
              device model, operating system version, application version, and contextual data
              relating to the state of the application at the time of the crash. This information
              is used solely to diagnose defects and improve reliability.
            </p>
          </PolicySection>

          <PolicySection title="10. Leaderboards and achievements">
            <p className="mt-3 text-gray-700 leading-relaxed">
              Some games may provide leaderboards, rankings, or achievement systems. These features
              may require an Internet connection and may utilize platform services such as Google
              Play Games. Information processed may include:
            </p>
            <PolicyList
              items={[
                "Display name or player identifier",
                "Scores, rankings, and achievement progress",
                "User or platform identifiers required to publish and maintain results",
              ]}
            />
            <p className="mt-4 text-gray-700 leading-relaxed">
              This information is used exclusively to provide competitive and progression features
              within the relevant game.
            </p>
          </PolicySection>

          <PolicySection title="11. Push notifications">
            <p className="mt-3 text-gray-700 leading-relaxed">
              Some games may request permission to send push notifications—for example, gameplay
              reminders, feature announcements, reward availability, or re-engagement messages.
              Where enabled, notifications are delivered through platform notification services and
              may rely on a device token or comparable identifier.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              You may disable push notifications at any time through in-game settings or your
              device&apos;s system settings.
            </p>
          </PolicySection>

          <PolicySection title="12. Customer support and contact forms">
            <p className="mt-3 text-gray-700 leading-relaxed">
              If you contact us for customer support, technical assistance, or privacy-related
              inquiries—by email, an in-game contact form, or another communication channel—we may
              collect information you voluntarily provide, including:
            </p>
            <PolicyList
              items={[
                "Your name and email address",
                "The game title, device model, and application version",
                "A description of your request and any supporting attachments",
                "Account or purchase details necessary to resolve your inquiry",
              ]}
            />
            <p className="mt-4 text-gray-700 leading-relaxed">
              We use support communications solely to respond to your request and improve our games
              and services. Contact us at <SupportEmail />.
            </p>
          </PolicySection>

          <PolicySection title="13. How we use information">
            <p className="mt-3 text-gray-700 leading-relaxed">
              Depending on the game and features you use, we may process information for the
              following purposes:
            </p>
            <PolicyList
              items={[
                "Providing, operating, and maintaining gameplay and application functionality",
                "Saving and restoring progress locally or through cloud saves",
                "Authenticating user accounts and synchronizing data across devices",
                "Processing, validating, and restoring in-app purchases and premium upgrades",
                "Displaying advertisements, including banner, interstitial, and rewarded formats",
                "Conducting analytics and crash reporting to improve performance and stability",
                "Operating leaderboards, achievements, and push notifications",
                "Responding to support requests and fulfilling legal obligations",
              ]}
            />
          </PolicySection>

          <PolicySection title="14. Sharing of information">
            <p className="mt-3 text-gray-700 leading-relaxed">
              We do not sell, rent, or trade your personal information. We may share limited
              information with trusted service providers that assist us in operating our games —
              including providers of hosting, authentication, analytics, crash reporting,
              advertising (such as Google AdMob), payment validation, and notification delivery —
              solely to the extent necessary to perform services on our behalf.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              We may also disclose information where required by applicable law, to protect the
              rights, safety, and security of our users and services, or in connection with a
              merger, acquisition, or similar business transaction, subject to legal requirements.
            </p>
          </PolicySection>

          <PolicySection title="15. Third-party services">
            <p className="mt-3 text-gray-700 leading-relaxed">
              Individual games may integrate third-party services to provide specific
              functionality. Examples include:
            </p>
            <PolicyList
              items={[
                "Google AdMob and other advertising networks",
                "Google Play Billing and other app store payment systems",
                "Google Play Games, Firebase, and other Google platform services",
                "Analytics, crash reporting, authentication, and cloud hosting providers",
              ]}
            />
            <p className="mt-4 text-gray-700 leading-relaxed">
              Third-party providers process information under their own privacy policies and terms
              of service. We encourage you to review the policies of relevant providers. Where we
              add or materially change third-party integrations, we will update this policy or the
              applicable game&apos;s store disclosures as appropriate.
            </p>
          </PolicySection>

          <PolicySection title="16. Data retention">
            <p className="mt-3 text-gray-700 leading-relaxed">
              We retain information only for as long as necessary to provide our games and
              related services, comply with legal obligations, resolve disputes, and enforce our
              agreements.
            </p>
            <PolicyList
              items={[
                "Local game data remains on your device until you delete it or uninstall the application",
                "Cloud saves and account data are retained while your account remains active or as needed to provide the service",
                "Support correspondence is retained for as long as needed to address your request and maintain appropriate records",
                "Analytics and crash data are generally retained in aggregated or pseudonymous form for a limited period",
              ]}
            />
          </PolicySection>

          <PolicySection title="17. Data deletion requests">
            <p className="mt-3 text-gray-700 leading-relaxed">
              You may delete local game data by clearing the application&apos;s storage or
              uninstalling the game from your device.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Where a game supports user accounts, cloud saves, or server-side data storage, you
              may request deletion of associated personal information by contacting{" "}
              <SupportEmail /> and providing the name of the game and, where available, the email
              address or user identifier linked to your account. We will respond within a
              reasonable timeframe and delete or anonymize applicable data unless retention is
              required for legal, security, or fraud-prevention purposes.
            </p>
          </PolicySection>

          <PolicySection title="18. Children's privacy">
            <p className="mt-3 text-gray-700 leading-relaxed">
              Our games are not directed at children under the age of 13 (or the minimum age
              required in your jurisdiction) to provide personal information without appropriate
              parental consent. We do not knowingly collect personal information from children in
              violation of applicable law.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              If you believe a child has provided personal information to us, please contact{" "}
              <SupportEmail /> and we will take appropriate steps to delete such information.
            </p>
          </PolicySection>

          <PolicySection title="19. Security">
            <p className="mt-3 text-gray-700 leading-relaxed">
              We implement reasonable technical and organizational safeguards designed to protect
              information against unauthorized access, loss, misuse, or alteration. However, no
              method of transmission or electronic storage is completely secure. The security of
              your information also depends on your device configuration, including screen lock,
              system updates, and application permissions.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Games that store data exclusively on your device rely on the security measures
              provided by your device and operating system. Games that use online services may
              employ encryption, access controls, and reputable infrastructure providers where
              appropriate.
            </p>
          </PolicySection>

          <PolicySection title="20. GDPR and international users">
            <p className="mt-3 text-gray-700 leading-relaxed">
              If you are located in the European Economic Area, the United Kingdom, or another
              jurisdiction with comparable data protection legislation, you may have the following
              rights regarding your personal information:
            </p>
            <PolicyList
              items={[
                "The right to access personal information we hold about you",
                "The right to request correction of inaccurate or incomplete information",
                "The right to request erasure of your personal information in certain circumstances",
                "The right to object to or request restriction of certain processing activities",
                "The right to data portability, where applicable",
                "The right to lodge a complaint with a competent data protection supervisory authority",
              ]}
            />
            <p className="mt-4 text-gray-700 leading-relaxed">
              Where required under applicable law, we process personal information on appropriate
              legal bases, including performance of a contract, legitimate interests in operating
              and improving our games, compliance with legal obligations, and consent where
              applicable (for example, for certain advertising or notification features).
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              To exercise your rights, contact <SupportEmail />. We may need to verify your
              identity before processing your request.
            </p>
          </PolicySection>

          <PolicySection title="21. Google Play requirements">
            <p className="mt-3 text-gray-700 leading-relaxed">
              Games distributed through Google Play are subject to Google Play Developer Program
              policies and related requirements. This includes maintaining a publicly accessible
              privacy policy, accurately disclosing data collection and sharing practices in the
              Google Play Console, and respecting user choices regarding permissions, in-app
              purchases, and advertising where applicable.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              The public URL for this master policy is:{" "}
              <a
                href={PRIVACY_POLICY_URL}
                className="text-violet-600 font-medium hover:text-violet-700 underline underline-offset-2 break-all"
              >
                {PRIVACY_POLICY_URL}
              </a>
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Where a game&apos;s actual data practices differ from those of another title, the
              game-specific disclosures provided in Google Play and within the application
              determine which sections of this policy apply to that game.
            </p>
          </PolicySection>

          <PolicySection title="22. Changes to this policy">
            <p className="mt-3 text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our
              practices, services, or legal requirements. When we do, we will revise the
              &quot;Last updated&quot; date at the top of this page. Material changes may also be
              communicated through a game update, store listing notice, or in-app notification
              where appropriate. Your continued use of our games following an update constitutes
              acceptance of the revised policy, subject to applicable law.
            </p>
          </PolicySection>

          <PolicySection title="23. Contact">
            <p className="mt-3 text-gray-700 leading-relaxed">
              For privacy questions, data subject requests, or customer support, please contact:
            </p>
            <dl className="mt-4 space-y-2 text-gray-700">
              <div>
                <dt className="inline font-semibold text-gray-900">Publisher: </dt>
                <dd className="inline">{PUBLISHER}</dd>
              </div>
              <div>
                <dt className="inline font-semibold text-gray-900">Website: </dt>
                <dd className="inline">
                  <a
                    href={WEBSITE_URL}
                    className="text-violet-600 font-medium hover:text-violet-700 underline underline-offset-2"
                  >
                    {WEBSITE_URL}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="inline font-semibold text-gray-900">Support Email: </dt>
                <dd className="inline">
                  <SupportEmail />
                </dd>
              </div>
            </dl>
          </PolicySection>
        </article>
      </div>
    </section>
  );
}

function SupportEmail() {
  return (
    <a
      href={`mailto:${SUPPORT_EMAIL}`}
      className="text-violet-600 font-medium hover:text-violet-700 underline underline-offset-2"
    >
      {SUPPORT_EMAIL}
    </a>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-violet-700">{title}</h2>
      {children}
    </section>
  );
}

function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-700">
      {items.map((item) => (
        <li key={item} className="leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  );
}
