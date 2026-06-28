'use client';
import { useEffect } from 'react';

// docs.procesio.com is docs-only: send the root straight to /docs.
export default function HomePage() {
  useEffect(() => { window.location.replace('/docs'); }, []);
  return null;
}
