export type Locale = "en" | "de";

const dict = {
  en: {
    nav: {
      landing: "Landing Page",
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
      title: "Welcome to my Portfolio!",
      role: "Web Application Developer",
      line1:
        "I build modern, responsive and user-friendly web applications for businesses and individuals.",
      line2:
        "Specialized in Next.js, React, TypeScript, Prisma and Tailwind CSS.",
      location: "Based in Germany",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
    },
    projectsLanding: {
      heading: "Projects",
      subtitle:
        "Practical templates & starters you can buy or hire me to customize.",
      items: {
        restaurant: {
          title: "Restaurant Website Template",
          description:
            "Modern landing page with menu, hours, Google Map & contact form.",
        },
        portfolio: {
          title: "Portfolio Website Template",
          description:
            "Clean, responsive personal site for freelancers & students.",
        },
        ecommerce: {
          title: "E-Commerce Starter",
          description:
            "Simple store with products, cart, and mock checkout flow.",
        },
        booking: {
          title: "Appointment Booking App",
          description:
            "Service booking UI with calendar integration (Calendly-ready).",
        },
        blog: {
          title: "Blog/Docs Starter (MDX)",
          description: "SEO-friendly blog/docs template using MDX content files.",
        },
        whatsapp: {
          title: "WhatsApp Order Form",
          description: "One-page order form that sends orders via WhatsApp.",
        },
      } as const,
    },
    about: {
      heading: "ABOUT ME",
      introLead: "This is the page where you can learn more about me.",
      introBody:
        "I am a motivated and detail-oriented Full-Stack Developer passionate about creating digital solutions that help businesses and individuals succeed. I enjoy building professional websites, e-commerce platforms, custom web applications, and interactive games that provide real value to users. I am committed to delivering reliable, user-friendly, and high-quality solutions while continuously learning and improving my skills. Whether working independently or collaborating with a team, I focus on problem-solving, clear communication, and achieving outstanding results.",
      roleTitle: "IT specialist - application development",
      birthday: "Birthday:",
      age: "Age:",
      website: "Website:",
      degree: "Degree:",
      phone: "Phone:",
      email: "Email:",
      address: "Address:",
      freelance: "Freelance:",
      degreeValue: "Bachelors",
      freelanceValue: "Available",
      closing:
        "I have a creative mind and am always up for new challenges. I am well organized and always plan ahead to make sure I manage my time well.",
      skillsHeading: "Technical Skills",
      skillsCategories: {
        frontend: "Frontend",
        backend: "Backend",
        cms: "CMS & E-Commerce",
        database: "Database",
        tools: "Tools & Deployment",
        gamedev: "Game Development",
      } as const,
    },
    footer: {
      tagline:
        "Web Application Developer focused on building modern, responsive and user-friendly web applications.",
      quickLinks: "Quick Links",
      connect: "Connect",
      emailLabel: "Email:",
      phoneLabel: "Phone:",
      githubLabel: "GitHub:",
      linkedinLabel: "LinkedIn:",
      rights: "All rights reserved.",
    },
    contact: {
      heading: "CONTACT",
      intro:
        "If you have any questions, you can use the contact details below or fill out the form. I will get back to you as soon as possible.",
      mapTitle: "Map",
      locationHeading: "Location:",
      locationLines: "Mülheim an der Ruhr,\nGermany",
      emailHeading: "Email:",
      callHeading: "Call:",
      placeholderName: "Your Name",
      placeholderEmail: "Your Email",
      placeholderSubject: "Subject",
      placeholderMessage: "Message",
      submit: "Send Message",
      sending: "Sending...",
      success:
        "Thank you, your message has been sent. I will get back to you.",
      error:
        "Sorry, your message could not be sent. Please try again or email me directly.",
    },
    projectsPage: {
      heading: "Projects",
      subtitle: "Practical templates & projects I have built.",
      viewProject: "View Project",
      items: {
        dingado: {
          title: "Dingado",
          description:
            "Modern web application built with Next.js featuring responsive design and clean UI.",
        },
        skyrivers: {
          title: "SkyRivers Limited (E-Commerce Shop)",
          description:
            "Custom WordPress business website with a responsive layout and fully functional e-commerce system.",
        },
        portfolio: {
          title: "Portfolio Website",
          description:
            "Personal portfolio website to showcase projects and skills.",
        },
        breedbabies: {
          title: "Business Website (Bootstrap)",
          description:
            "Responsive business website built using a Bootstrap template with custom styling and interactive UI components.",
        },
        spendwise: {
          title: "SpendWise",
          description:
            "Income-Expenses budget tracker landing page with a clear hero, feature highlights, and friendly financial illustration.",
        },
      } as const,
    },
    resumePage: {
      heading: "Resume",
      intro:
        "Here you can view or download my resume. It includes my education, technical skills, projects, and professional background.",
      open: "Open Resume",
      download: "Download PDF",
      iframeTitle: "Remy Bate Resume",
    },
  },
  de: {
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
      title: "Willkommen auf meinem Portfolio!",
      role: "Fachinformatikerin für Anwendungsentwicklung",
      line1:
        "Ich entwickle moderne, responsive und benutzerfreundliche Webanwendungen für Unternehmen und Privatpersonen.",
      line2:
        "Spezialisiert auf Next.js, React, TypeScript, Prisma und Tailwind CSS.",
      location: "Standort Deutschland",
      viewProjects: "Projekte ansehen",
      contactMe: "Kontakt aufnehmen",
    },
    projectsLanding: {
      heading: "Projekte",
      subtitle:
        "Praktische Vorlagen und Starter, die Sie kaufen oder von mir anpassen lassen können.",
      items: {
        restaurant: {
          title: "Vorlage Restaurant-Website",
          description:
            "Moderne Landingpage mit Speisekarte, Öffnungszeiten, Google Maps und Kontaktformular.",
        },
        portfolio: {
          title: "Vorlage Portfolio-Website",
          description:
            "Klare, responsive persönliche Website für Freelancer und Studierende.",
        },
        ecommerce: {
          title: "E-Commerce-Starter",
          description:
            "Einfacher Shop mit Produkten, Warenkorb und Beispiel-Checkout.",
        },
        booking: {
          title: "Terminbuchungs-App",
          description:
            "Oberfläche zur Dienstleistungsbuchung mit Kalenderintegration (Calendly-kompatibel).",
        },
        blog: {
          title: "Blog/Dokumentation-Starter (MDX)",
          description:
            "SEO-freundliche Blog-/Dokumentationsvorlage mit MDX-Dateien.",
        },
        whatsapp: {
          title: "WhatsApp-Bestellformular",
          description: "Einseitiges Formular, das Bestellungen per WhatsApp sendet.",
        },
      } as const,
    },
    about: {
      heading: "ÜBER MICH",
      introLead: "Auf dieser Seite können Sie mehr über mich erfahren.",
      introBody:
        "Ich bin ein motivierter und detailorientierter Full-Stack-Entwickler mit der Leidenschaft, digitale Lösungen zu schaffen, die Unternehmen und Privatpersonen zum Erfolg verhelfen. Ich entwickle professionelle Websites, E-Commerce-Plattformen, individuelle Webanwendungen und interaktive Spiele, die echten Mehrwert bieten. Mir ist wichtig, zuverlässige, benutzerfreundliche und hochwertige Lösungen zu liefern und meine Fähigkeiten kontinuierlich weiterzuentwickeln. Ob eigenständig oder im Team – ich konzentriere mich auf Problemlösung, klare Kommunikation und herausragende Ergebnisse.",
      roleTitle: "Fachinformatikerin für Anwendungsentwicklung",
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
        "Ich denke kreativ und freue mich über neue Herausforderungen. Ich arbeite strukturiert und plane vorausschauend, damit ich meine Zeit gut einteilen kann.",
      skillsHeading: "Technische Fähigkeiten",
      skillsCategories: {
        frontend: "Frontend",
        backend: "Backend",
        cms: "CMS & E-Commerce",
        database: "Datenbank",
        tools: "Tools & Deployment",
        gamedev: "Spieleentwicklung",
      } as const,
    },
    footer: {
      tagline:
        "Webentwickler mit Fokus auf moderne, responsive und benutzerfreundliche Webanwendungen.",
      quickLinks: "Schnellzugriff",
      connect: "Kontakt",
      emailLabel: "E-Mail:",
      phoneLabel: "Telefon:",
      githubLabel: "GitHub:",
      linkedinLabel: "LinkedIn:",
      rights: "Alle Rechte vorbehalten.",
    },
    contact: {
      heading: "KONTAKT",
      intro:
        "Bei Fragen erreichen Sie mich über die untenstehenden Daten oder das Formular. Ich melde mich so schnell wie möglich.",
      mapTitle: "Karte",
      locationHeading: "Standort:",
      locationLines: "Mülheim an der Ruhr,\nDeutschland",
      emailHeading: "E-Mail:",
      callHeading: "Anruf:",
      placeholderName: "Ihr Name",
      placeholderEmail: "Ihre E-Mail",
      placeholderSubject: "Betreff",
      placeholderMessage: "Nachricht",
      submit: "Nachricht senden",
      sending: "Wird gesendet...",
      success:
        "Vielen Dank, Ihre Nachricht wurde gesendet. Ich melde mich bei Ihnen.",
      error:
        "Ihre Nachricht konnte leider nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie mir direkt per E-Mail.",
    },
    projectsPage: {
      heading: "Projekte",
      subtitle: "Praktische Vorlagen und Projekte, die ich umgesetzt habe.",
      viewProject: "Projekt ansehen",
      items: {
        dingado: {
          title: "Dingado",
          description:
            "Moderne Webanwendung mit Next.js, responsivem Design und klarer Oberfläche.",
        },
        skyrivers: {
          title: "SkyRivers Limited (E-Commerce-Shop)",
          description:
            "Individuelle WordPress-Business-Website mit responsivem Layout und voll funktionsfähigem Onlineshop.",
        },
        portfolio: {
          title: "Portfolio-Website",
          description:
            "Persönliche Portfolio-Website zur Präsentation von Projekten und Fähigkeiten.",
        },
        breedbabies: {
          title: "Business-Website (Bootstrap)",
          description:
            "Responsive Business-Website auf Basis eines Bootstrap-Templates mit individuellem Styling und interaktiven Komponenten.",
        },
        spendwise: {
          title: "SpendWise",
          description:
            "Einkommen -Ausgaben Budget-Tracker mit klarer Hero-Section, Feature-Highlights und freundlicher Finanz-Illustration.",
        },
      } as const,
    },
    resumePage: {
      heading: "Lebenslauf",
      intro:
        "Hier können Sie meinen Lebenslauf ansehen oder herunterladen – mit Ausbildung, technischen Skills, Projekten und beruflicher Laufbahn.",
      open: "Lebenslauf öffnen",
      download: "PDF herunterladen",
      iframeTitle: "Lebenslauf Remy Bate",
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
