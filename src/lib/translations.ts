export type Locale = "en" | "de";

const dict = {
  en: {
    meta: {
      home: {
        title: "Remy Bate Mbu | Web & Application Developer in Germany",
        description:
          "Freelance web and application developer in Germany. Portfolio sites, business websites, and web apps with Astro, React, Next.js, TypeScript, and Tailwind CSS.",
      },
      about: {
        title: "About Remy Bate Mbu | Application Developer",
        description:
          "About Remy Bate Mbu, an IT specialist in application development from Mülheim an der Ruhr, Germany. Skills in React, Astro, WordPress, WooCommerce, and more.",
      },
      projects: {
        title: "Web Development Projects | RemyDev Portfolio",
        description:
          "Websites and web apps built by Remy Bate Mbu, including Next.js projects, WordPress shops, business sites, and portfolio work.",
      },
      resume: {
        title: "Resume | Remy Bate Mbu – Application Developer",
        description:
          "View or download the resume of Remy Bate Mbu, including education, technical skills, projects, and work background.",
      },
      contact: {
        title: "Contact Remy Bate Mbu | Hire a Web Developer",
        description:
          "Contact Remy Bate Mbu for freelance web development. Based in Mülheim an der Ruhr, Germany. Email, phone, and contact form available.",
      },
    },
    nav: {
      landing: "Home",
      about: "About Me",
      projects: "Projects",
      resume: "Resume",
      contact: "Contact",
      hireMe: "Hire Me",
      toggleMenu: "Toggle menu",
      langEnglish: "EN",
      langGerman: "DE",
      langTitleEn: "Switch to English",
      langTitleDe: "Auf Deutsch wechseln",
      langGroup: "Language",
    },
    home: {
      title: "Web & Application Developer",
      role: "Freelance Web Developer",
      line1:
        "I build websites and web applications for small businesses, freelancers, and personal projects.",
      line2:
        "I work mainly with Astro, Next.js, React, TypeScript, Tailwind CSS, WordPress, and WooCommerce.",
      location: "Based in Mülheim an der Ruhr, Germany",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      heroAlt:
        "Remy Bate Mbu, freelance web and application developer based in Germany",
    },
    projectsLanding: {
      heading: "Projects",
      subtitle:
        "Practical templates and starters you can buy or hire me to customize.",
      items: {
        restaurant: {
          title: "Restaurant Website Template",
          description:
            "Landing page with menu, opening hours, Google Maps, and a contact form.",
        },
        portfolio: {
          title: "Portfolio Website Template",
          description:
            "Clean, responsive personal site for freelancers and students.",
        },
        ecommerce: {
          title: "E-Commerce Starter",
          description:
            "Simple store layout with products, cart, and a mock checkout flow.",
        },
        booking: {
          title: "Appointment Booking App",
          description:
            "Booking interface with calendar layout, ready for Calendly integration.",
        },
        blog: {
          title: "Blog/Docs Starter (MDX)",
          description: "Blog and docs starter using MDX content files.",
        },
        whatsapp: {
          title: "WhatsApp Order Form",
          description: "Single-page order form that sends orders through WhatsApp.",
        },
      } as const,
    },
    about: {
      heading: "About Me",
      introLead: "A short introduction to my background and the kind of work I do.",
      introBody:
        "I am an application developer based in Germany. I build business websites, small web apps, WordPress shops, and portfolio sites. Most of my work uses React, Next.js, Astro, TypeScript, and Tailwind CSS. When a project needs a CMS, I also work with WordPress and WooCommerce. I care about clear layouts, readable code, and sites that work well on phones and desktops. I am still growing my skills, but I aim to deliver reliable work that clients can actually use.",
      roleTitle: "Application Developer (IT Specialist)",
      birthday: "Birthday:",
      age: "Age:",
      website: "Website:",
      degree: "Degree:",
      phone: "Phone:",
      email: "Email:",
      address: "Address:",
      freelance: "Freelance:",
      degreeValue: "Bachelor's degree",
      freelanceValue: "Available",
      closing:
        "I like working through practical problems, whether on my own or with a team. I try to stay organised, explain things clearly, and keep deadlines realistic.",
      photoAlt: "Portrait photo of Remy Bate Mbu, web application developer",
      skillsHeading: "Technical Skills",
      skillsIntro:
        "Technologies I use regularly in client work and personal projects.",
      skillsCategories: {
        frontend: "Frontend",
        backend: "Backend",
        cms: "CMS & E-Commerce",
        database: "Database",
        tools: "Tools & Deployment",
        ai: "AI & Automation",
        gamedev: "Game Development",
      } as const,
      skillsItems: {
        openai: "OpenAI / ChatGPT",
        claude: "Claude AI",
        cursor: "Cursor AI",
        copilot: "GitHub Copilot",
        promptEngineering: "Prompt Engineering",
        aiAssistedDev: "AI-assisted coding",
        workflowAutomation: "Workflow automation",
        aiContentCreation: "AI content helpers",
      } as const,
    },
    footer: {
      tagline:
        "Web and application developer building responsive websites and web apps from Germany.",
      quickLinks: "Quick Links",
      connect: "Connect",
      emailLabel: "Email:",
      phoneLabel: "Phone:",
      githubLabel: "GitHub:",
      linkedinLabel: "LinkedIn:",
      rights: "All rights reserved.",
    },
    contact: {
      heading: "Contact",
      intro:
        "Need a website, a small web app, or help with an existing project? Send a message through the form or use the details below. I usually reply within one to two business days.",
      mapTitle: "Map showing Mülheim an der Ruhr, Germany",
      locationHeading: "Location",
      locationLines: "Mülheim an der Ruhr,\nGermany",
      emailHeading: "Email",
      callHeading: "Phone",
      placeholderName: "Your Name",
      placeholderEmail: "Your Email",
      placeholderSubject: "Subject",
      placeholderMessage: "Message",
      submit: "Send Message",
      sending: "Sending...",
      success: "Thanks — your message was sent. I will get back to you soon.",
      error:
        "Your message could not be sent. Please try again or email me directly.",
    },
    projectsPage: {
      heading: "Projects",
      subtitle:
        "A selection of websites and web apps I have built for clients and personal use.",
      viewProject: "View Project",
      items: {
        dingado: {
          title: "Dingado",
          description:
            "Business website built with Next.js, React, and Tailwind CSS. Responsive layout with a clean, structured UI.",
          imageAlt: "Screenshot of the Dingado website homepage",
        },
        skyrivers: {
          title: "SkyRivers Limited (E-Commerce Shop)",
          description:
            "WordPress business site with WooCommerce shop, product pages, and a mobile-friendly layout.",
          imageAlt: "Screenshot of the SkyRivers Limited online shop",
        },
        portfolio: {
          title: "Portfolio Website",
          description:
            "Personal portfolio built with Astro, React, and Tailwind CSS to present projects and skills.",
          imageAlt: "Screenshot of the RemyDev portfolio website",
        },
        breedbabies: {
          title: "Business Website (Bootstrap)",
          description:
            "Responsive business site based on a Bootstrap template with custom styling and interactive sections.",
          imageAlt: "Screenshot of the BreedBabies Daily business website",
        },
        spendwise: {
          title: "SpendWise",
          description:
            "Landing page for a budget tracker app with a clear hero section, feature list, and simple financial visuals.",
          imageAlt: "Screenshot of the SpendWise budget tracker landing page",
        },
      } as const,
    },
    resumePage: {
      heading: "Resume",
      intro:
        "My resume covers my education, technical skills, projects, and work history. Open it in the browser or download the PDF below.",
      open: "Open Resume",
      download: "Download PDF",
      iframeTitle: "Resume of Remy Bate Mbu, application developer",
    },
  },
  de: {
    meta: {
      home: {
        title: "Remy Bate Mbu | Web- & Anwendungsentwickler in Deutschland",
        description:
          "Freelance Web- und Anwendungsentwickler in Deutschland. Portfolio-Websites, Business-Seiten und Web-Apps mit Astro, React, Next.js, TypeScript und Tailwind CSS.",
      },
      about: {
        title: "Über Remy Bate Mbu | Anwendungsentwickler",
        description:
          "Über Remy Bate Mbu, Fachinformatiker für Anwendungsentwicklung aus Mülheim an der Ruhr. Skills in React, Astro, WordPress, WooCommerce und mehr.",
      },
      projects: {
        title: "Webentwicklungs-Projekte | RemyDev Portfolio",
        description:
          "Websites und Web-Apps von Remy Bate Mbu, darunter Next.js-Projekte, WordPress-Shops, Business-Websites und Portfolio-Arbeit.",
      },
      resume: {
        title: "Lebenslauf | Remy Bate Mbu – Anwendungsentwickler",
        description:
          "Lebenslauf von Remy Bate Mbu ansehen oder herunterladen – mit Ausbildung, technischen Skills, Projekten und Berufserfahrung.",
      },
      contact: {
        title: "Kontakt Remy Bate Mbu | Webentwickler beauftragen",
        description:
          "Kontakt zu Remy Bate Mbu für Freelance-Webentwicklung. Standort Mülheim an der Ruhr, Deutschland. E-Mail, Telefon und Kontaktformular.",
      },
    },
    nav: {
      landing: "Startseite",
      about: "Über mich",
      projects: "Projekte",
      resume: "Lebenslauf",
      contact: "Kontakt",
      hireMe: "Mich beauftragen",
      toggleMenu: "Menü umschalten",
      langEnglish: "EN",
      langGerman: "DE",
      langTitleEn: "Zu Englisch wechseln",
      langTitleDe: "Auf Deutsch wechseln",
      langGroup: "Sprache",
    },
    home: {
      title: "Web- & Anwendungsentwickler",
      role: "Freelance Webentwickler",
      line1:
        "Ich entwickle Websites und Webanwendungen für kleine Unternehmen, Freelancer und persönliche Projekte.",
      line2:
        "Hauptsächlich arbeite ich mit Astro, Next.js, React, TypeScript, Tailwind CSS, WordPress und WooCommerce.",
      location: "Standort: Mülheim an der Ruhr, Deutschland",
      viewProjects: "Projekte ansehen",
      contactMe: "Kontakt aufnehmen",
      heroAlt:
        "Remy Bate Mbu, Freelance Web- und Anwendungsentwickler aus Deutschland",
    },
    projectsLanding: {
      heading: "Projekte",
      subtitle:
        "Praktische Vorlagen und Starter, die Sie kaufen oder von mir anpassen lassen können.",
      items: {
        restaurant: {
          title: "Vorlage Restaurant-Website",
          description:
            "Landingpage mit Speisekarte, Öffnungszeiten, Google Maps und Kontaktformular.",
        },
        portfolio: {
          title: "Vorlage Portfolio-Website",
          description:
            "Übersichtliche, responsive Website für Freelancer und Studierende.",
        },
        ecommerce: {
          title: "E-Commerce-Starter",
          description:
            "Einfacher Shop mit Produkten, Warenkorb und Beispiel-Checkout.",
        },
        booking: {
          title: "Terminbuchungs-App",
          description:
            "Buchungsoberfläche mit Kalenderlayout, vorbereitet für Calendly.",
        },
        blog: {
          title: "Blog/Dokumentation-Starter (MDX)",
          description: "Blog- und Dokumentations-Starter mit MDX-Dateien.",
        },
        whatsapp: {
          title: "WhatsApp-Bestellformular",
          description: "Einseitiges Formular, das Bestellungen per WhatsApp sendet.",
        },
      } as const,
    },
    about: {
      heading: "Über mich",
      introLead: "Kurz zu meinem Hintergrund und der Art von Projekten, die ich umsetze.",
      introBody:
        "Ich bin Anwendungsentwickler mit Standort in Deutschland. Ich erstelle Business-Websites, kleinere Web-Apps, WordPress-Shops und Portfolio-Seiten. Meist arbeite ich mit React, Next.js, Astro, TypeScript und Tailwind CSS. Wenn ein Projekt ein CMS braucht, setze ich auch WordPress und WooCommerce ein. Mir sind klare Layouts, gut lesbarer Code und Websites wichtig, die auf Handy und Desktop funktionieren. Ich entwickle meine Fähigkeiten weiter und möchte zuverlässige Arbeit liefern, die Kunden wirklich nutzen können.",
      roleTitle: "Fachinformatiker für Anwendungsentwicklung",
      birthday: "Geburtsdatum:",
      age: "Alter:",
      website: "Website:",
      degree: "Abschluss:",
      phone: "Telefon:",
      email: "E-Mail:",
      address: "Adresse:",
      freelance: "Freelance:",
      degreeValue: "Bachelor",
      freelanceValue: "Verfügbar",
      closing:
        "Ich arbeite gern an konkreten Aufgaben – allein oder im Team. Ich versuche, strukturiert zu arbeiten, Dinge verständlich zu erklären und realistische Zeitpläne einzuhalten.",
      photoAlt: "Porträtfoto von Remy Bate Mbu, Webanwendungsentwickler",
      skillsHeading: "Technische Fähigkeiten",
      skillsIntro:
        "Technologien, die ich regelmäßig in Kundenprojekten und eigenen Arbeiten nutze.",
      skillsCategories: {
        frontend: "Frontend",
        backend: "Backend",
        cms: "CMS & E-Commerce",
        database: "Datenbank",
        tools: "Tools & Deployment",
        ai: "KI & Automatisierung",
        gamedev: "Spieleentwicklung",
      } as const,
      skillsItems: {
        openai: "OpenAI / ChatGPT",
        claude: "Claude AI",
        cursor: "Cursor AI",
        copilot: "GitHub Copilot",
        promptEngineering: "Prompt Engineering",
        aiAssistedDev: "KI-unterstütztes Programmieren",
        workflowAutomation: "Workflow-Automatisierung",
        aiContentCreation: "KI-Hilfen für Inhalte",
      } as const,
    },
    footer: {
      tagline:
        "Web- und Anwendungsentwickler für responsive Websites und Web-Apps aus Deutschland.",
      quickLinks: "Schnellzugriff",
      connect: "Kontakt",
      emailLabel: "E-Mail:",
      phoneLabel: "Telefon:",
      githubLabel: "GitHub:",
      linkedinLabel: "LinkedIn:",
      rights: "Alle Rechte vorbehalten.",
    },
    contact: {
      heading: "Kontakt",
      intro:
        "Sie brauchen eine Website, eine kleine Web-App oder Hilfe bei einem bestehenden Projekt? Schreiben Sie mir über das Formular oder die Kontaktdaten unten. In der Regel antworte ich innerhalb von ein bis zwei Werktagen.",
      mapTitle: "Karte mit Mülheim an der Ruhr, Deutschland",
      locationHeading: "Standort",
      locationLines: "Mülheim an der Ruhr,\nDeutschland",
      emailHeading: "E-Mail",
      callHeading: "Telefon",
      placeholderName: "Ihr Name",
      placeholderEmail: "Ihre E-Mail",
      placeholderSubject: "Betreff",
      placeholderMessage: "Nachricht",
      submit: "Nachricht senden",
      sending: "Wird gesendet...",
      success:
        "Danke — Ihre Nachricht wurde gesendet. Ich melde mich bald bei Ihnen.",
      error:
        "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie mir direkt per E-Mail.",
    },
    projectsPage: {
      heading: "Projekte",
      subtitle:
        "Eine Auswahl an Websites und Web-Apps, die ich für Kunden und eigene Projekte umgesetzt habe.",
      viewProject: "Projekt ansehen",
      items: {
        dingado: {
          title: "Dingado",
          description:
            "Business-Website mit Next.js, React und Tailwind CSS. Responsives Layout mit klarer Struktur.",
          imageAlt: "Screenshot der Dingado-Website Startseite",
        },
        skyrivers: {
          title: "SkyRivers Limited (E-Commerce-Shop)",
          description:
            "WordPress-Business-Website mit WooCommerce-Shop, Produktseiten und mobilem Layout.",
          imageAlt: "Screenshot des SkyRivers Limited Onlineshops",
        },
        portfolio: {
          title: "Portfolio-Website",
          description:
            "Persönliches Portfolio mit Astro, React und Tailwind CSS zur Präsentation von Projekten und Skills.",
          imageAlt: "Screenshot der RemyDev Portfolio-Website",
        },
        breedbabies: {
          title: "Business-Website (Bootstrap)",
          description:
            "Responsive Business-Website auf Bootstrap-Basis mit eigenem Styling und interaktiven Bereichen.",
          imageAlt: "Screenshot der BreedBabies Daily Business-Website",
        },
        spendwise: {
          title: "SpendWise",
          description:
            "Landingpage für eine Budget-Tracker-App mit Hero-Bereich, Feature-Liste und einfachen Finanz-Grafiken.",
          imageAlt: "Screenshot der SpendWise Budget-Tracker Landingpage",
        },
      } as const,
    },
    resumePage: {
      heading: "Lebenslauf",
      intro:
        "Mein Lebenslauf enthält Ausbildung, technische Fähigkeiten, Projekte und Berufserfahrung. Sie können ihn im Browser öffnen oder als PDF herunterladen.",
      open: "Lebenslauf öffnen",
      download: "PDF herunterladen",
      iframeTitle: "Lebenslauf von Remy Bate Mbu, Anwendungsentwickler",
    },
  },
} as const;

export type TranslationTree = (typeof dict)["en"];

function getLeaf(
  tree: Record<string, unknown>,
  parts: readonly string[]
): string | undefined {
  let cur: unknown = tree;
  for (const p of parts) {
    if (cur === null || typeof cur !== "object" || !(p in cur)) return undefined;
    cur = (cur as Record<string, unknown>)[p];
  }
  return typeof cur === "string" ? cur : undefined;
}

export function translate(
  locale: Locale,
  path: string,
  fallback?: string
): string {
  const parts = path.split(".");
  const fromLocale = getLeaf(dict[locale] as unknown as Record<string, unknown>, parts);
  if (fromLocale) return fromLocale;
  const fromEn = getLeaf(dict.en as unknown as Record<string, unknown>, parts);
  if (fromEn) return fromEn;
  return fallback ?? path;
}

export { dict };
