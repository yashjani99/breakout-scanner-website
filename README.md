# Breakout Scanner Global Markets — Website

Marketing site for [Breakout Scanner Global Markets](https://github.com/yashjani99/breakout-scanner-global-markets),
a free Windows breakout scanner. Built with Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Pages

- `/` — landing page (hero, features, markets, download CTA)
- `/setup` — install walkthrough
- `/how-to-use` — using the app
- `/how-it-works` — the scanning logic, explained
- `/privacy`, `/disclaimer`, `/terms` — legal pages

Download links point at the GitHub Release assets of the app repo
(`lib/constants.ts` — bump `APP_VERSION` there when a new release ships).

## Development

```
npm install
npm run dev
```

## Build

```
npm run build
npm start
```

## Deploy

Hosted on Vercel, deployed from this repo. Push to `main` to redeploy.
