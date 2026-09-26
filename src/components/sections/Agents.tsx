import { useTranslations } from 'next-intl';
import { AppWindow, Database, ScrollText, ArrowLeftRight, Camera, Lock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Button, Card, Container } from '@/components/ui';

const SERVER_ICONS: Record<(typeof siteConfig.mcpServers)[number]['key'], LucideIcon> = {
  app: AppWindow,
  backend: Database,
  strategy: ScrollText,
  trading: ArrowLeftRight,
  screenshot: Camera,
};

export const Agents = () => {
  const t = useTranslations('agents');

  return (
    <section id="agents" className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.mcpServers.map((server) => {
            const Icon = SERVER_ICONS[server.key];
            return (
              <Card key={server.key}>
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-blue-600 dark:bg-gray-800 dark:text-blue-400">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-gray-100 px-2.5 py-0.5 font-mono text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                    {t('toolCount', { count: server.tools })}
                  </span>
                </div>
                <h3 className="mb-2 font-mono text-sm font-semibold text-gray-900 dark:text-white">
                  {t(`servers.${server.key}.name`)}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {t(`servers.${server.key}.description`)}
                </p>
              </Card>
            );
          })}
          <Card className="border-amber-200 bg-amber-50/60 dark:border-amber-900 dark:bg-amber-950/30">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300">
              <Lock size={20} aria-hidden="true" />
            </div>
            <h3 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
              {t('safety.title')}
            </h3>
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              {t('safety.description')}
            </p>
          </Card>
        </div>
        <div className="mt-10 flex justify-center">
          <a href={siteConfig.docs.mcp} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary">{t('cta')}</Button>
          </a>
        </div>
      </Container>
    </section>
  );
};
