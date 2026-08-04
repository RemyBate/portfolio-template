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
      impressum: {
        title: "Legal Notice (Impressum) | RemyDev",
        description:
          "Legal notice and provider information for the RemyDev portfolio website of Remy Bate Mbu, freelance web developer in Germany.",
      },
      datenschutz: {
        title: "Privacy Policy (Datenschutz) | RemyDev",
        description:
          "Privacy policy for remydev.de: information on contact forms, hosting, server logs, Google Maps, and your rights under GDPR.",
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
      legalHeading: "Legal",
      impressum: "Legal Notice",
      datenschutz: "Privacy Policy",
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
        nexorare: {
          title: "Nexorare",
          description:
            "A multilingual digital agency website presenting professional web development, software solutions, digital services, case studies, and project inquiry features.",
          imageAlt: "Nexorare digital agency website homepage",
        },
        ecoplate: {
          title: "EcoPlate",
          description:
            "A multilingual AgriTech marketplace prototype that connects farmers and vendors with buyers to reduce post-harvest food loss and create sustainable opportunities.",
          imageAlt: "EcoPlate AgriTech marketplace homepage",
        },
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
            "Personal portfolio built with Next.js, React, and Tailwind CSS to present projects and skills.",
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
    impressum: {
      heading: "Legal Notice (Impressum)",
      intro:
        "This page provides the legally required provider information for this portfolio website of a freelance web developer based in Germany.",
      tmgHeading: "Information according to § 5 TMG",
      tmgBody:
        "Freelance web and application developer. This website presents portfolio work and offers contact options for project enquiries. No products are sold directly through this website and no online checkout is offered.",
      contactHeading: "Contact",
      nameLabel: "Name",
      nameValue: "Remy Bate Mbu",
      addressLabel: "Location",
      addressValue: "Mülheim an der Ruhr, Germany",
      emailLabel: "Email",
      phoneLabel: "Phone",
      responsibleHeading: "Responsible for content according to § 18 (2) MStV",
      responsibleBody:
        "Responsible for editorial content on this website within the meaning of § 18 (2) MStV:",
      liabilityContentHeading: "Liability for content",
      liabilityContentBody:
        "As a service provider, I am responsible for my own content on these pages in accordance with general legislation. I am nevertheless obliged to remove or block the use of third-party information upon becoming aware of a specific infringement. Liability in this regard is only possible from the time at which the infringement becomes known. Upon notification of such violations, I will remove the content without delay.",
      externalLinksHeading: "Liability for links",
      externalLinksBody:
        "This website contains links to external websites of third parties over whose content I have no influence. I therefore cannot accept any liability for this external content. The respective provider or operator of the linked pages is always responsible for their content. The linked pages were checked for possible legal violations at the time of linking. Permanent monitoring of the content of linked pages without concrete evidence of a violation is not reasonable. If I become aware of legal violations, I will remove such links immediately.",
      copyrightHeading: "Copyright",
      copyrightBody:
        "The content and works created by the site operator on these pages are subject to German copyright law. Reproduction, editing, distribution, and any kind of use outside the limits of copyright law require the written consent of the respective author.",
      lastUpdated: "Last updated: June 2026",
    },
    datenschutz: {
      heading: "Privacy Policy",
      intro:
        "This privacy policy explains how personal data is processed when you use this portfolio website. The site is operated by Remy Bate Mbu, a freelance web developer in Germany. This website does not use analytics tools, tracking cookies, or social media embeds.",
      controllerHeading: "Data controller",
      controllerBody: "The data controller within the meaning of the GDPR is:",
      nameLabel: "Name",
      nameValue: "Remy Bate Mbu",
      addressValue: "Mülheim an der Ruhr, Germany",
      emailLabel: "Email",
      hostingHeading: "Hosting via Vercel",
      hostingBody:
        "This website is built with Next.js and hosted on Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Vercel provides hosting and may process personal data on my behalf to deliver and secure the service. Further information: https://vercel.com/legal/privacy-policy",
      serverLogsHeading: "Server log files",
      serverLogsBody:
        "When you visit this website, Vercel may automatically collect and store technical data transmitted by your browser, such as IP address, date and time of access, requested URL, referrer URL, browser type, and operating system. This data is processed to ensure technical operation, security, and stability. The data is not combined with other data sources and is usually deleted after a limited retention period.",
      localStorageHeading: "Language setting in the browser",
      localStorageBody:
        "If you switch the website language (EN/DE), your choice is saved in your browser's local storage under the key \"portfolio-locale\". Only the selected language code (\"en\" or \"de\") is stored. No personal data is saved. You can delete this entry at any time by clearing your browser's site data.",
      contactFormHeading: "Contact form",
      contactFormBody:
        "When you submit the contact form, the data you enter (name, email address, subject, and message) is sent to a server-side API route on this website and forwarded by email using Nodemailer via Gmail SMTP. The message is delivered to remybatem@gmail.com. The data is used solely to respond to your enquiry and is not shared with third parties for marketing purposes. The legal basis is Art. 6 (1) (b) GDPR (steps prior to entering into a contract) or Art. 6 (1) (f) GDPR (legitimate interest in responding to enquiries).",
      emailContactHeading: "Contact by email",
      emailContactBody:
        "If you contact me by email, I process the personal data you provide (such as your name, email address, and message content) to handle your enquiry. The legal basis is Art. 6 (1) (b) GDPR or Art. 6 (1) (f) GDPR. Please do not send sensitive personal data unless it is necessary.",
      externalLinksHeading: "External links",
      externalLinksBody:
        "This website contains links to external websites, for example GitHub or LinkedIn. I have no influence on whether and how these providers process personal data. Please refer to the privacy policies of the respective third-party providers.",
      googleMapsHeading: "Google Maps",
      googleMapsBody:
        "The contact page embeds a map via an iframe from Google Maps (google.com/maps). When you open the contact page, a connection to Google is established and Google may process personal data, including your IP address. Provider: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. Further information: https://policies.google.com/privacy",
      rights: {
        heading: "Rights of data subjects under the GDPR",
        intro:
          "You have the following rights in relation to your personal data, subject to the statutory requirements:",
        items: {
          access: "Right of access (Art. 15 GDPR)",
          rectification: "Right to rectification (Art. 16 GDPR)",
          erasure: "Right to erasure (Art. 17 GDPR)",
          restriction: "Right to restriction of processing (Art. 18 GDPR)",
          portability: "Right to data portability (Art. 20 GDPR)",
          objection: "Right to object (Art. 21 GDPR)",
          complaint: "Right to lodge a complaint with a supervisory authority",
        },
        outro:
          "To exercise your rights, please contact me at remybatem@gmail.com. I will respond within the statutory period.",
      },
      retentionHeading: "Deletion of data",
      retentionBody:
        "Personal data is stored only for as long as necessary for the respective purpose or as required by law. Email enquiries are deleted when they are no longer required, unless statutory retention obligations apply.",
      updatesHeading: "Updates to this privacy policy",
      updatesBody:
        "I may update this privacy policy when the website, legal requirements, or data processing practices change. The current version is always available on this page. If you have questions about data protection, please contact me at remybatem@gmail.com.",
      lastUpdated: "Last updated: June 2026",
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
      impressum: {
        title: "Impressum | RemyDev",
        description:
          "Impressum und Anbieterkennzeichnung für die RemyDev-Portfolio-Website von Remy Bate Mbu, Freelance-Webentwickler in Deutschland.",
      },
      datenschutz: {
        title: "Datenschutzerklärung | RemyDev",
        description:
          "Datenschutzerklärung für remydev.de: Informationen zu Kontaktformular, Hosting, Server-Logfiles, Google Maps und Ihren Rechten nach der DSGVO.",
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
      legalHeading: "Rechtliches",
      impressum: "Impressum",
      datenschutz: "Datenschutz",
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
        nexorare: {
          title: "Nexorare",
          description:
            "Eine mehrsprachige Website für eine Digitalagentur mit professioneller Webentwicklung, Softwarelösungen, digitalen Dienstleistungen, Fallstudien und Projektanfragen.",
          imageAlt: "Startseite der Nexorare-Digitalagentur",
        },
        ecoplate: {
          title: "EcoPlate",
          description:
            "Ein mehrsprachiger AgriTech-Marktplatz-Prototyp, der Landwirte und Händler mit Käufern verbindet, um Lebensmittelverluste nach der Ernte zu reduzieren und nachhaltige Chancen zu schaffen.",
          imageAlt: "Startseite des EcoPlate-AgriTech-Marktplatzes",
        },
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
            "Persönliches Portfolio mit Next.js, React und Tailwind CSS zur Präsentation von Projekten und Skills.",
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
    impressum: {
      heading: "Impressum",
      intro:
        "Auf dieser Seite finden Sie die gesetzlich vorgeschriebenen Anbieterinformationen zu dieser Portfolio-Website eines Freelance-Webentwicklers mit Sitz in Deutschland.",
      tmgHeading: "Angaben gemäß § 5 TMG",
      tmgBody:
        "Freelance Web- und Anwendungsentwickler. Diese Website dient der Präsentation von Portfolio-Arbeiten und der Kontaktaufnahme für Projektanfragen. Über diese Website werden keine Produkte direkt verkauft und kein Online-Checkout angeboten.",
      contactHeading: "Kontakt",
      nameLabel: "Name",
      nameValue: "Remy Bate Mbu",
      addressLabel: "Standort",
      addressValue: "Mülheim an der Ruhr, Deutschland",
      emailLabel: "E-Mail",
      phoneLabel: "Telefon",
      responsibleHeading: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
      responsibleBody:
        "Verantwortlich für den redaktionellen Inhalt dieser Website im Sinne von § 18 Abs. 2 MStV:",
      liabilityContentHeading: "Haftung für Inhalte",
      liabilityContentBody:
        "Als Diensteanbieter bin ich gemäß den allgemeinen Gesetzen für die eigenen Inhalte auf diesen Seiten verantwortlich. Ich bin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.",
      externalLinksHeading: "Haftung für Links",
      externalLinksBody:
        "Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.",
      copyrightHeading: "Urheberrecht",
      copyrightBody:
        "Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors.",
      lastUpdated: "Stand: Juni 2026",
    },
    datenschutz: {
      heading: "Datenschutzerklärung",
      intro:
        "Diese Datenschutzerklärung informiert Sie darüber, wie personenbezogene Daten bei der Nutzung dieser Portfolio-Website verarbeitet werden. Betreiber ist Remy Bate Mbu, Freelance-Webentwickler mit Sitz in Deutschland. Diese Website verwendet keine Analyse-Tools, keine Tracking-Cookies und keine Social-Media-Einbindungen.",
      controllerHeading: "Verantwortlicher",
      controllerBody: "Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:",
      nameLabel: "Name",
      nameValue: "Remy Bate Mbu",
      addressValue: "Mülheim an der Ruhr, Deutschland",
      emailLabel: "E-Mail",
      hostingHeading: "Hosting über Vercel",
      hostingBody:
        "Diese Website ist mit Next.js erstellt und wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA gehostet. Vercel stellt das Hosting bereit und kann personenbezogene Daten in meinem Auftrag verarbeiten, um den Dienst bereitzustellen und abzusichern. Weitere Informationen: https://vercel.com/legal/privacy-policy",
      serverLogsHeading: "Server-Log-Dateien",
      serverLogsBody:
        "Beim Besuch dieser Website können durch Vercel automatisch technische Daten erfasst und gespeichert werden, die Ihr Browser übermittelt, zum Beispiel IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene URL, Referrer-URL, Browsertyp und Betriebssystem. Diese Daten werden zur technischen Bereitstellung, Sicherheit und Stabilität der Website verarbeitet. Eine Zusammenführung mit anderen Datenquellen findet nicht statt. Die Daten werden in der Regel nach einer begrenzten Aufbewahrungsdauer gelöscht.",
      localStorageHeading: "Spracheinstellung im Browser",
      localStorageBody:
        "Wenn Sie die Website-Sprache (EN/DE) wechseln, wird Ihre Auswahl im lokalen Speicher (localStorage) Ihres Browsers unter dem Schlüssel \"portfolio-locale\" gespeichert. Es wird nur der gewählte Sprachcode (\"en\" oder \"de\") gespeichert. Es werden keine personenbezogenen Daten gespeichert. Sie können den Eintrag jederzeit löschen, indem Sie die Website-Daten in Ihrem Browser entfernen.",
      contactFormHeading: "Kontaktformular",
      contactFormBody:
        "Wenn Sie das Kontaktformular absenden, werden die von Ihnen eingegebenen Daten (Name, E-Mail-Adresse, Betreff und Nachricht) an eine serverseitige API-Route dieser Website übermittelt und per E-Mail mit Nodemailer über Gmail-SMTP weitergeleitet. Die Nachricht geht an remybatem@gmail.com. Die Daten werden ausschließlich zur Beantwortung Ihrer Anfrage verwendet und nicht zu Werbezwecken an Dritte weitergegeben. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).",
      emailContactHeading: "Kontaktaufnahme per E-Mail",
      emailContactBody:
        "Wenn Sie mich per E-Mail kontaktieren, verarbeite ich die von Ihnen übermittelten personenbezogenen Daten (z. B. Name, E-Mail-Adresse und Inhalt der Nachricht) zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO oder Art. 6 Abs. 1 lit. f DSGVO. Bitte übermitteln Sie keine sensiblen personenbezogenen Daten, sofern dies nicht erforderlich ist.",
      externalLinksHeading: "Externe Links",
      externalLinksBody:
        "Diese Website enthält Links zu externen Websites, zum Beispiel GitHub oder LinkedIn. Ich habe keinen Einfluss darauf, ob und wie diese Anbieter personenbezogene Daten verarbeiten. Bitte beachten Sie die Datenschutzhinweise der jeweiligen Drittanbieter.",
      googleMapsHeading: "Google Maps",
      googleMapsBody:
        "Auf der Kontaktseite ist eine Karte per iframe von Google Maps (google.com/maps) eingebunden. Beim Aufruf der Kontaktseite wird eine Verbindung zu Google hergestellt und Google kann personenbezogene Daten verarbeiten, einschließlich Ihrer IP-Adresse. Anbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Weitere Informationen: https://policies.google.com/privacy",
      rights: {
        heading: "Rechte der betroffenen Personen nach DSGVO",
        intro:
          "Sie haben im Rahmen der gesetzlichen Voraussetzungen folgende Rechte in Bezug auf Ihre personenbezogenen Daten:",
        items: {
          access: "Auskunft (Art. 15 DSGVO)",
          rectification: "Berichtigung (Art. 16 DSGVO)",
          erasure: "Löschung (Art. 17 DSGVO)",
          restriction: "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
          portability: "Datenübertragbarkeit (Art. 20 DSGVO)",
          objection: "Widerspruch (Art. 21 DSGVO)",
          complaint: "Beschwerde bei einer Aufsichtsbehörde",
        },
        outro:
          "Zur Ausübung Ihrer Rechte kontaktieren Sie mich bitte unter remybatem@gmail.com. Ich werde innerhalb der gesetzlichen Frist antworten.",
      },
      retentionHeading: "Löschung von Daten",
      retentionBody:
        "Personenbezogene Daten werden nur so lange gespeichert, wie es für den jeweiligen Zweck erforderlich ist oder gesetzlich vorgeschrieben wird. E-Mail-Anfragen werden gelöscht, wenn sie nicht mehr benötigt werden, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
      updatesHeading: "Aktualisierung dieser Datenschutzerklärung",
      updatesBody:
        "Ich kann diese Datenschutzerklärung anpassen, wenn sich die Website, gesetzliche Anforderungen oder die Datenverarbeitung ändern. Die jeweils aktuelle Version finden Sie auf dieser Seite. Bei Fragen zum Datenschutz erreichen Sie mich unter remybatem@gmail.com.",
      lastUpdated: "Stand: Juni 2026",
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
