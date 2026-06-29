import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <img src="/logo-light.png" alt="PROCESIO" className="h-6 w-auto block dark:hidden" />
          <img src="/logo-dark.png" alt="PROCESIO" className="h-6 w-auto hidden dark:block" />
        </>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
