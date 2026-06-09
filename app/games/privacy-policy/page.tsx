import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Games Privacy Policy",
  description:
    "Master Privacy Policy for mobile games published by RemyDev / Remy Bate Mbu, covering offline and online features, accounts, ads, purchases, analytics, and more.",
};

const SUPPORT_EMAIL = "remymbu12@gmail.com";
const PRIVACY_POLICY_URL = "https://remydev.de/games/privacy-policy";
const LAST_UPDATED = "June 3, 2026";
const PUBLISHER = "RemyDev / Remy Bate Mbu";

const PUBLISHED_GAMES = ["Hole Rush", "Coin Tap Rush"];

export default function GamesPrivacyPolicyPage() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <article className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 sm:p-10">
          <p className="text-sm font-semibold text-violet-600">RemyDev Mobile Games</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Games Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            <span className="font-medium text-gray-700">Publisher:</span> {PUBLISHER}
          </p>
          <p className="mt-1 text-sm text-gray-600">Last updated: {LAST_UPDATED}</p>

          <div className="mt-6 rounded-xl border-l-4 border-violet-600 bg-violet-50 px-4 py-3 space-y-3">
            <p className="text-gray-800 leading-relaxed">
              <strong>Master policy:</strong> This is a single reusable privacy policy for all
              mobile games published by {PUBLISHER}. It describes every type of feature that may
              appear across my games — including features that a specific game may not use.
            </p>
            <p className="text-gray-800 leading-relaxed">
              <strong>Per-game features:</strong> Some games may use all of the features described
              below. Some games may use only a subset. The exact features used depend on the
              individual game. Check each game&apos;s store listing and in-app disclosures for
              what applies to that title.
            </p>
          </div>

          <p className="mt-6 text-gray-700 leading-relaxed">
            This Privacy Policy explains how {PUBLISHER} (&quot;RemyDev&quot;, &quot;I&quot;,
            &quot;me&quot;) collects, uses, stores, and shares information when you download,
            install, or play my mobile games on Android and other supported platforms.
          </p>

          <PolicySection title="1. Scope — games covered">
            <p className="mt-3 text-gray-700 leading-relaxed">
              This policy applies to all current and future mobile games published by RemyDev,
              including:
            </p>
            <PolicyList
              items={[
                ...PUBLISHED_GAMES,
                "Any future mobile games published by RemyDev / Remy Mbu",
              ]}
            />
            <p className="mt-4 text-gray-700 leading-relaxed">
              For privacy questions, data requests, or customer support, contact{" "}
              <SupportEmail />.
            </p>
          </PolicySection>

          <PolicySection title="2. Offline and online games">
            <h3 className="mt-4 font-semibold text-gray-900">Offline games</h3>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Some games are designed to work without an Internet connection for core gameplay.
              In those games, progress and settings are typically stored locally on your device.
              Offline play does not require an account unless the game explicitly offers optional
              online features.
            </p>
            <h3 className="mt-6 font-semibold text-gray-900">Online games and online features</h3>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Some games or features may require an Internet connection — for example, cloud saves,
              leaderboards, multiplayer, account sign-in, ads, in-app purchases, analytics, or push
              notifications. When you use online features, limited technical data (such as device
              identifiers, IP address, and usage logs) may be processed by me or by third-party
              service providers acting on my behalf.
            </p>
          </PolicySection>

          <PolicySection title="3. User accounts and authentication">
            <p className="mt-3 text-gray-700 leading-relaxed">
              Some games do not require an account. Others may offer optional or required accounts
              so you can sign in across devices, sync progress, compete on leaderboards, or
              restore purchases.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              If a game supports accounts, authentication may be handled through:
            </p>
            <PolicyList
              items={[
                "Email and password or one-time codes",
                "Google Sign-In or other platform sign-in services",
                "Anonymous or guest accounts linked to a device identifier",
                "Game-platform services (for example, Google Play Games)",
              ]}
            />
            <p className="mt-4 text-gray-700 leading-relaxed">
              Account data may include a display name, email address, user ID, authentication
              tokens, and gameplay progress linked to your account. I use this information only
              to operate account features for the relevant game.
            </p>
          </PolicySection>

          <PolicySection title="4. Local device storage">
            <p className="mt-3 text-gray-700 leading-relaxed">
              Games may store information locally on your device so you can continue playing.
              Depending on the game, local storage may include:
            </p>
            <PolicyList
              items={[
                "Game progress, levels completed, and unlocked content",
                "Scores, achievements, and in-game statistics",
                "In-game currencies, items, lives, boosters, or similar rewards",
                "Audio, vibration, notification, and other gameplay preferences",
                "Cached assets or temporary files needed for performance",
              ]}
            />
            <p className="mt-4 text-gray-700 leading-relaxed">
              Local data generally remains on your device until you clear the app&apos;s storage in
              system settings or uninstall the game. Uninstalling a game typically removes its
              locally stored data unless you have also saved progress to the cloud or an account.
            </p>
          </PolicySection>

          <PolicySection title="5. Cloud saves">
            <p className="mt-3 text-gray-700 leading-relaxed">
              Some games may offer optional or automatic cloud saving so progress can be restored
              on a new device or after reinstalling the app. Cloud saves may be provided through:
            </p>
            <PolicyList
              items={[
                "My own backend services",
                "Google Play Games saved games or similar platform services",
                "Third-party backend or authentication providers",
              ]}
            />
            <p className="mt-4 text-gray-700 leading-relaxed">
              Cloud save data typically includes gameplay progress, settings, and identifiers
              needed to associate the save with your account or device. I retain cloud save data
              only as long as needed to provide the feature or until you request deletion, where
              applicable.
            </p>
          </PolicySection>

          <PolicySection title="6. Advertising">
            <p className="mt-3 text-gray-700 leading-relaxed">
              Some games may display advertising to support free versions of the game. Ads may be
              delivered through advertising networks, including{" "}
              <strong>Google AdMob</strong> and similar partners. Not every game includes ads.
            </p>

            <h3 className="mt-6 font-semibold text-gray-900">Types of ads that may appear</h3>
            <PolicyList
              items={[
                "Banner ads — small ads shown within the game interface",
                "Interstitial ads — full-screen ads shown at natural breaks, such as between levels",
                "Rewarded ads — optional video ads you may choose to watch in exchange for in-game rewards",
              ]}
            />

            <h3 className="mt-6 font-semibold text-gray-900">Data processed for advertising</h3>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Ad networks may collect or receive device and usage information to deliver,
              measure, and personalize ads where permitted by law and platform policies. This may
              include advertising ID, IP address, device model, OS version, app interactions, and
              ad performance data. You can often limit ad personalization through your device or
              Google account settings.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              I do not sell your personal information. Ad partners process data under their own
              privacy policies and applicable consent requirements.
            </p>
          </PolicySection>

          <PolicySection title="7. In-app purchases and premium upgrades">
            <p className="mt-3 text-gray-700 leading-relaxed">
              Some games may offer in-app purchases or premium upgrades — for example, removing
              ads, unlocking content, buying virtual currency, or purchasing cosmetic items.
              Payments are processed by the app store (such as Google Play) and not directly by
              me.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              I do not receive your full payment card details. I may receive purchase receipts,
              product identifiers, transaction status, and information needed to validate and restore
              purchases. Purchase history may be stored locally and, where supported, linked to
              your account or platform profile.
            </p>
          </PolicySection>

          <PolicySection title="8. Analytics">
            <p className="mt-3 text-gray-700 leading-relaxed">
              Some games may use analytics to understand how players use the game, improve
              features, and fix usability issues. Analytics may collect aggregated or pseudonymous
              information such as:
            </p>
            <PolicyList
              items={[
                "Session length, screens viewed, and feature usage",
                "Device type, OS version, language, and app version",
                "Crash-free session rates and performance metrics",
                "General gameplay events (for example, level starts or completions)",
              ]}
            />
            <p className="mt-4 text-gray-700 leading-relaxed">
              Analytics tools may be operated by me or by third-party providers. I use analytics
              to improve my games, not to sell personal information.
            </p>
          </PolicySection>

          <PolicySection title="9. Crash reporting">
            <p className="mt-3 text-gray-700 leading-relaxed">
              Some games may use crash reporting services to diagnose stability problems. Crash
              reports may include technical details such as stack traces, device model, operating
              system version, app version, and the state of the app at the time of the crash.
              Reports are used to identify bugs and improve reliability.
            </p>
          </PolicySection>

          <PolicySection title="10. Leaderboards and achievements">
            <p className="mt-3 text-gray-700 leading-relaxed">
              Some games may offer leaderboards, rankings, or achievements. These features may
              require an Internet connection and may use platform services such as Google Play
              Games. Information displayed or processed may include:
            </p>
            <PolicyList
              items={[
                "Display name or player tag",
                "Scores, ranks, and achievement progress",
                "User or platform identifiers needed to publish results",
              ]}
            />
            <p className="mt-4 text-gray-700 leading-relaxed">
              Leaderboard and achievement data is used to provide competitive and progression
              features within the relevant game.
            </p>
          </PolicySection>

          <PolicySection title="11. Push notifications">
            <p className="mt-3 text-gray-700 leading-relaxed">
              Some games may request permission to send push notifications — for example, reminders,
              event announcements, reward availability, or re-engagement messages. If enabled,
              notifications are sent through platform notification services and may rely on a
              device token or similar identifier.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              You can disable notifications at any time in the game settings or in your device
              system settings.
            </p>
          </PolicySection>

          <PolicySection title="12. Contact forms and customer support">
            <p className="mt-3 text-gray-700 leading-relaxed">
              If you contact me for customer support, bug reports, or privacy questions — by
              email, an in-game support form, or another channel — I may collect the information
              you choose to provide, such as:
            </p>
            <PolicyList
              items={[
                "Your name and email address",
                "Game title, device model, and app version",
                "Description of the issue and any attachments you send",
                "Purchase or account details needed to resolve your request",
              ]}
            />
            <p className="mt-4 text-gray-700 leading-relaxed">
              I use support communications only to respond to your request and improve my games.
              Contact me at <SupportEmail /> for help.
            </p>
          </PolicySection>

          <PolicySection title="13. How information is used">
            <p className="mt-3 text-gray-700 leading-relaxed">
              Depending on the game and features you use, I may process information to:
            </p>
            <PolicyList
              items={[
                "Provide, operate, and maintain gameplay and app functionality",
                "Save and restore progress locally or in the cloud",
                "Authenticate accounts and sync data across devices",
                "Process and validate in-app purchases and premium upgrades",
                "Display ads, including rewarded, banner, and interstitial formats",
                "Measure performance, analytics, and crash reporting",
                "Operate leaderboards, achievements, and notifications",
                "Respond to support requests and legal obligations",
              ]}
            />
          </PolicySection>

          <PolicySection title="14. Sharing of information">
            <p className="mt-3 text-gray-700 leading-relaxed">
              I do not sell, rent, or trade your personal information. I may share limited
              information with service providers that help me operate my games — such as hosting,
              authentication, analytics, crash reporting, advertising, payment validation, and
              notification delivery — only as needed to provide those services.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              I may also disclose information if required by law, to protect rights and safety, or
              in connection with a business transfer, subject to applicable legal requirements.
            </p>
          </PolicySection>

          <PolicySection title="15. Third-party services">
            <p className="mt-3 text-gray-700 leading-relaxed">
              Individual games may integrate third-party services. Examples include:
            </p>
            <PolicyList
              items={[
                "Google AdMob and other advertising networks",
                "Google Play Billing and app store purchase systems",
                "Google Play Games, Firebase, or similar Google services",
                "Analytics, crash reporting, authentication, or cloud hosting providers",
              ]}
            />
            <p className="mt-4 text-gray-700 leading-relaxed">
              Third parties process information under their own privacy policies and terms. I
              encourage you to review the policies of relevant providers. When I add or materially
              change third-party services in a game, I will update this policy or the game&apos;s
              store disclosures as appropriate.
            </p>
          </PolicySection>

          <PolicySection title="16. Data retention">
            <p className="mt-3 text-gray-700 leading-relaxed">
              I retain information only for as long as necessary to provide my games and related
              services, comply with legal obligations, resolve disputes, and enforce agreements.
            </p>
            <PolicyList
              items={[
                "Local game data remains on your device until you delete it or uninstall the game",
                "Cloud saves and account data are kept while your account remains active or as needed for the service",
                "Support emails are retained as long as needed to handle your request and maintain records",
                "Analytics and crash data are generally retained in aggregated or pseudonymous form for a limited period",
              ]}
            />
          </PolicySection>

          <PolicySection title="17. Data deletion requests">
            <p className="mt-3 text-gray-700 leading-relaxed">
              You may delete local game data by clearing app storage or uninstalling the game from
              your device.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              If a game supports accounts, cloud saves, or server-side storage, you may request
              deletion of associated data by emailing <SupportEmail /> with the game name and, if
              available, the email address or user ID tied to your account. I will respond within
              a reasonable time and delete or anonymize data unless I must retain it for legal,
              security, or fraud-prevention reasons.
            </p>
          </PolicySection>

          <PolicySection title="18. Children's privacy">
            <p className="mt-3 text-gray-700 leading-relaxed">
              My games are not directed at children under 13 (or the minimum age required in your
              country) to provide personal information without appropriate parental consent. I do
              not knowingly collect personal information from children in violation of applicable
              law.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              If you believe a child has provided personal information to me, contact{" "}
              <SupportEmail /> and I will take appropriate steps to delete it.
            </p>
          </PolicySection>

          <PolicySection title="19. Security practices">
            <p className="mt-3 text-gray-700 leading-relaxed">
              I take reasonable technical and organizational measures to protect information
              against unauthorized access, loss, misuse, or alteration. No method of transmission or
              storage is completely secure. Security also depends on your device settings, such as
              screen lock, system updates, and app permissions.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Games that store data only on your device rely on the security of your device and
              operating system. Games that use online services may employ encryption, access
              controls, and reputable infrastructure providers where appropriate.
            </p>
          </PolicySection>

          <PolicySection title="20. GDPR and international users">
            <p className="mt-3 text-gray-700 leading-relaxed">
              If you are located in the European Economic Area, United Kingdom, or another region
              with similar data protection laws, you may have additional rights regarding your
              personal information, including:
            </p>
            <PolicyList
              items={[
                "The right to access information I hold about you",
                "The right to request correction of inaccurate information",
                "The right to request deletion in certain circumstances",
                "The right to object to or restrict certain processing",
                "The right to data portability where applicable",
                "The right to lodge a complaint with a supervisory authority",
              ]}
            />
            <p className="mt-4 text-gray-700 leading-relaxed">
              Where required, I rely on appropriate legal bases for processing — such as
              performance of a contract, legitimate interests in operating and improving my games,
              compliance with legal obligations, and consent where applicable (for example, for
              certain ads or notifications).
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              To exercise these rights, contact <SupportEmail />. I may need to verify your
              identity before fulfilling a request.
            </p>
          </PolicySection>

          <PolicySection title="21. Google Play requirements">
            <p className="mt-3 text-gray-700 leading-relaxed">
              My games distributed on Google Play are subject to Google Play policies and
              developer program requirements. This includes providing a privacy policy URL,
              accurately disclosing data collection and sharing in Play Console, and honoring user
              choices related to permissions, purchases, and ads where applicable.
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
              If a game&apos;s actual data practices differ from another title, the game-specific
              disclosures in Google Play and inside the app define which sections of this policy
              apply to that game.
            </p>
          </PolicySection>

          <PolicySection title="22. Changes to this policy">
            <p className="mt-3 text-gray-700 leading-relaxed">
              I may update this Privacy Policy from time to time. When I do, I will revise the
              &quot;Last updated&quot; date at the top of this page. Material changes may also be
              communicated through a game update, store listing notice, or in-app message where
              appropriate. Continued use of my games after an update means you accept the revised
              policy, subject to applicable law.
            </p>
          </PolicySection>

          <PolicySection title="23. Contact">
            <p className="mt-3 text-gray-700 leading-relaxed">
              For privacy questions, data requests, or customer support:
            </p>
            <dl className="mt-4 space-y-2 text-gray-700">
              <div>
                <dt className="inline font-semibold text-gray-900">Publisher: </dt>
                <dd className="inline">{PUBLISHER}</dd>
              </div>
              <div>
                <dt className="inline font-semibold text-gray-900">Email: </dt>
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
