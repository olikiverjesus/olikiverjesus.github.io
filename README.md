# Olikiver Barros Portfolio

Static proof-of-work hub for Olikiver Barros, focused on operational AI systems, workflow automation, data analytics, full-stack systems, systems thinking, open-source projects, and practical builder infrastructure.

Live target: <https://olikiverjesus.github.io>

## Stack

- Astro
- TypeScript
- Tailwind CSS
- MDX
- GitHub Pages
- GitHub Actions

## Local Setup

```bash
npm install
npm run dev
```

The development server runs locally at the URL printed by Astro, usually `http://localhost:4321`.

## Commands

```bash
npm run dev
npm run build
npm run preview
```

- `npm run dev` starts the local development server.
- `npm run build` type-checks and builds the static site into `dist/`.
- `npm run preview` previews the production build locally.

## Deployment

Deployment is handled by `.github/workflows/deploy.yml`.

The workflow follows the official Astro GitHub Pages deployment approach:

- pushes to `main` trigger the workflow
- `withastro/action@v6` installs dependencies, builds the site, and uploads the artifact
- `actions/deploy-pages@v5` publishes the artifact to GitHub Pages

Because this repository is `olikiverjesus.github.io`, `astro.config.mjs` sets:

```js
site: 'https://olikiverjesus.github.io'
```

No `base` path is configured because this is a username GitHub Pages repository.

## GitHub Pages Settings

In the GitHub repository settings:

1. Go to **Settings > Pages**.
2. Set **Source** to **GitHub Actions**.
3. Push to `main`.

GitHub Actions will build and deploy the site automatically.

## Add Projects

Project data lives in `src/data/projects.ts`.

Add a new object with:

- `title`
- `description`
- optional `href`
- optional `status`
- `tags`

Projects without `href` render as non-linked cards, which works well for private or internal work.

## Add Writing Entries

Writing placeholders live in `src/data/writing.ts`.

Add a new object with:

- `title`
- `description`
- `status`
- `topics`

The `src/content/writing/` directory is reserved for future MDX writing entries if the site grows into full articles.
