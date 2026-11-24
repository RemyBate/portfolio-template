# RemyDev Portfolio

Personal portfolio website for **Remy Bate Mbu** (`https://remydev.de`).

## Tech stack

- [Next.js](https://nextjs.org/) (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Nodemailer (contact form email delivery)
- react-icons

## Features

- English / German language switch (stored in `localStorage`)
- Pages: Home, About, Projects, Resume, Contact, Impressum, Datenschutz
- Reusable games privacy policy at `/games/privacy-policy`
- SEO: metadata, Open Graph, canonical URLs, JSON-LD, sitemap, robots.txt
- Contact form API at `/api/contact`
- Responsive layout and accessible navigation

## Local setup

```bash
npm install
cp .env.example .env.local
```

Fill in the environment variables in `.env.local` (see below), then:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Name | Required | Purpose |
|------|----------|---------|
| `GMAIL_USER` | Yes (for contact form) | Gmail address used by Nodemailer |
| `GMAIL_APP_PASSWORD` | Yes (for contact form) | Gmail App Password for SMTP |

Do not commit `.env`, `.env.local`, or any real secrets.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript (`tsc --noEmit`) |

## Deployment

Deployed on [Vercel](https://vercel.com) from the GitHub repository:

`https://github.com/RemyBate/portfolio-template`

Production domain: `https://remydev.de`

Configure `GMAIL_USER` and `GMAIL_APP_PASSWORD` in the Vercel project environment variables so the contact form works in production.

## Important public routes

- `/` – Home
- `/about` – About
- `/projects` – Projects
- `/resume` – professional profile; CV available on request
- `/contact` – Contact form
- `/impressum` – Legal notice
- `/datenschutz` – Website privacy policy
- `/games/privacy-policy` – Master privacy policy for RemyDev mobile games
- `/sitemap.xml` – Sitemap
- `/robots.txt` – Robots rules
