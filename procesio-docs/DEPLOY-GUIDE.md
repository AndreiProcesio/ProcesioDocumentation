# PROCESIO Docs — Go-Live Guide (no coding required)

Your Archbee docs are now a complete Fumadocs website in this `procesio-docs` folder.
This guide takes it live at **docs.procesio.com**. No terminal needed except one
double-click to download images.

---

## Step 1 — Download the images (do this first, ~10–20 min)
The pages reference ~1,300 images that still live on Archbee's servers. While your
Archbee account is still active, **double-click `download-assets.command`** in this
folder. It downloads every image into `public/images/docs` so your site no longer
depends on Archbee.

- If macOS blocks it: right-click → Open → Open.
- When it finishes it prints `ok=… fail=…`. Any failures are listed in
  `scripts/download-failures.log` (usually none).

## Step 2 — Put the project in your GitHub repo (GitHub Desktop)
1. Download **GitHub Desktop** (desktop.github.com) and sign in.
2. **File → Clone repository →** choose `PROCESIO/Documentation-Export` → Clone.
3. In Finder, copy this whole **`procesio-docs`** folder into the cloned
   `Documentation-Export` folder.
4. Back in GitHub Desktop you'll see the new files. Type a summary like
   "Add Fumadocs site" and click **Commit to main**, then **Push origin**.

## Step 3 — Deploy on Vercel (free)
1. Go to vercel.com → **Sign up → Continue with GitHub**.
2. **Add New… → Project →** import `Documentation-Export`.
3. IMPORTANT: set **Root Directory** to `procesio-docs` (click Edit, pick the folder).
4. Leave everything else as detected (Next.js). Click **Deploy**.
5. After ~2 minutes you get a live URL like `documentation-export-xxxx.vercel.app`.
   Open it — your docs are live with working search. 🎉

## Step 4 — Point docs.procesio.com to it
1. In Vercel: project → **Settings → Domains** → add `docs.procesio.com`.
2. Vercel shows a **CNAME** record (Name: `docs`, Value: `cname.vercel-dns.com`).
3. Add that record where procesio.com's DNS is managed.
4. Wait for "Valid". Only do this once you're happy — the old Archbee docs stay up
   until you switch.

---

## Editing docs later (no terminal)
- **In GitHub Desktop / github.com:** open any file in `content/docs`, edit, commit,
  push. Vercel redeploys automatically in ~1 minute.
- New page = new `.mdx` file in the right space folder. Add its filename to that
  folder's `meta.json` to place it in the sidebar.

## Notes
- `MIGRATION-REPORT.md` summarizes what was converted and the few blocks to review.
- `content/docs/getting-started.mdx` and `test.mdx` are leftover starter files (not in
  the sidebar). Delete them whenever you like.
- Internal/Helper Archbee spaces were intentionally not published.
- Set your GitHub username in `lib/shared.ts` to enable the "Edit on GitHub" button.
