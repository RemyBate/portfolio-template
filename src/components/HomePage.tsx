import { useLocale } from "@/lib/localeStore";

export default function HomePage() {
  const { t } = useLocale();

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <div className="hidden md:block absolute inset-0">
        <img
          src="/remy-hero.png"
          alt={t("home.heroAlt")}
          className="w-full h-full object-contain object-right"
        />
      </div>

      <section className="relative z-10 w-full py-10 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-6xl font-bold text-black leading-tight md:whitespace-nowrap">
              {t("home.title")}
            </h1>

            <div className="mt-6">
              <p className="font-semibold text-xl md:text-2xl text-black">Remy Bate Mbu</p>

              <p className="mt-3 font-semibold text-lg md:text-xl bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
                {t("home.role")}
              </p>

              <div className="mt-5 space-y-4 text-black text-lg md:text-xl font-medium leading-relaxed">
                <p>{t("home.line1")}</p>
                <p>{t("home.line2")}</p>
                <p>{t("home.location")}</p>
              </div>
            </div>

            <div className="flex gap-4 pt-8 flex-wrap">
              <a
                href="/projects"
                className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg transition"
              >
                {t("home.viewProjects")}
              </a>

              <a
                href="/contact"
                className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg transition"
              >
                {t("home.contactMe")}
              </a>
            </div>
          </div>

          <div className="mt-8 flex justify-center md:hidden">
            <img
              src="/remy-hero.png"
              alt={t("home.heroAlt")}
              width={350}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
