# RemyDev Portfolio (Astro)

Personal portfolio website built with [Astro](https://astro.build), React islands, and Tailwind CSS.

## Pages

- `/` — Landing page
- `/about` — About me & technical skills
- `/projects` — Project showcase
- `/resume` — Resume viewer & download
- `/contact` — Contact form & map
- `/games/privacy-policy` — Games privacy policy

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
npm run preview
```

The contact form API (`/api/contact`) requires server output and uses the `@astrojs/node` adapter. Set these environment variables for email delivery:

- `GMAIL_USER`
- `GMAIL_APP_PASSWORD`

## Deploy

Deploy with any Node-compatible host (or switch the Astro adapter for Vercel, Netlify, etc.). Static pages are pre-rendered; the contact API runs as a server endpoint.
