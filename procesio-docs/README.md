# PROCESIO Docs

The documentation site for PROCESIO, built with [Fumadocs](https://fumadocs.dev)
(Next.js). Content lives in `content/docs` as MDX files. The sidebar is built
automatically from the folder structure and the `meta.json` files.

## Editing content
- Each `.mdx` file in `content/docs` is one page.
- Folders become sidebar groups. A `meta.json` in a folder sets the title and
  the order of its pages.
- Full-text search (Orama) is built in — no extra service needed.

## Running locally (optional, needs Node.js 20+)
```bash
npm install
npm run dev
```
Then open http://localhost:3000 — it redirects to /docs.

## Deploying
See `DEPLOY-GUIDE.md` for a step-by-step, no-terminal deployment to Vercel
with the custom domain docs.procesio.com.
