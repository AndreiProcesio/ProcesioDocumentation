import { redirect } from 'next/navigation';

// docs.procesio.com is a docs-only site, so send the root straight to /docs.
export default function HomePage() {
  redirect('/docs');
}
