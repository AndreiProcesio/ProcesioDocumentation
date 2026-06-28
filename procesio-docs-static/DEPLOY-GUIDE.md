# PROCESIO Docs — Go-Live Guide (Cloudflare Pages, free)

Your Archbee docs are now a self-contained **static** Fumadocs site (no server
needed), ready to host free on Cloudflare Pages with commercial use allowed.

## Step 1 — Download the images (do first, while Archbee is active)
Double-click **`download-assets.command`**. It saves ~1,300 images into
`public/images/docs`. Safe to re-run; it skips files already there.
(If you copied this folder from the previous one, your images are already here —
you can skip this.)

## Step 2 — Put the project in your GitHub repo (GitHub Desktop)
1. In **GitHub Desktop**, make sure `PROCESIO/Documentation-Export` is cloned.
2. In Finder, copy this **`procesio-docs`** folder into the cloned repo
   (replacing the previous one — see the swap note at the bottom).
3. In GitHub Desktop: write a summary, **Commit to main**, then **Push origin**.

## Step 3 — Deploy on Cloudflare Pages (free, commercial OK)
1. Go to dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git**. Sign in / authorize GitHub and pick
   `PROCESIO/Documentation-Export`.
2. In the build settings:
   - **Framework preset:** Next.js (Static HTML Export). If not listed, choose
     “None”.
   - **Root directory:** `procesio-docs`   ← important (the site is in this subfolder)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
3. Click **Save and Deploy**. After ~2 minutes you get a live URL like
   `documentation-export.pages.dev` — open it; search works (press ⌘/Ctrl-K).

## Step 4 — Point docs.procesio.com at it
1. In the Pages project → **Custom domains** → **Set up a custom domain** →
   enter `docs.procesio.com`.
2. If procesio.com's DNS is on Cloudflare, it adds the record automatically.
   Otherwise add the CNAME it shows you at your DNS provider.
3. The old Archbee docs stay live until this is done — switch only when happy.

## Editing docs later (no terminal)
- Edit any `.mdx` file in `content/docs` on github.com (pencil ✏️) or in GitHub
  Desktop, commit, push — Cloudflare rebuilds automatically in ~1 minute.
- New page = new `.mdx` file in a space folder; add its name to that folder's
  `meta.json` to place it in the sidebar.

---
## Folder swap note (one-time)
This corrected folder replaces the earlier `procesio-docs`. In Finder:
1. Copy `public/images/docs` (and `public/files`) from your OLD `procesio-docs`
   into THIS folder's `public/` — so you don't re-download images. (Or just run
   Step 1.)
2. Delete the old `procesio-docs` folder, and rename this one to `procesio-docs`.
3. Then do Step 2 (commit & push).

See `MIGRATION-REPORT.md` for what was converted.
