import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

// Sections accessible only by direct link — hidden from the top tabs and menus.
const HIDDEN = ['/docs/crash-course', '/docs/appsumo', '/docs/etransport-hub'];

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      tabMode="top"
      tabs={{ transform: (option) => (HIDDEN.some((h) => option.url.startsWith(h)) ? null : option) }}
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  );
}
