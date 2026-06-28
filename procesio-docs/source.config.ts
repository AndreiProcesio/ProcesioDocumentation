import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';

export const docs = defineDocs({
  dir: 'content/docs',
  docs: { schema: pageSchema, postprocess: { includeProcessedMarkdown: true } },
  meta: { schema: metaSchema },
});

// remarkImageOptions:false -> don't fetch/measure images at build time.
// Images are served statically from /public (downloaded via download-assets.command).
export default defineConfig({
  mdxOptions: {
    remarkImageOptions: false,
  },
});
