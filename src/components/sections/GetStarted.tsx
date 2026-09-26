import { useTranslations } from 'next-intl';
import { Download, Container as ContainerIcon, KeyRound } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Badge, Button, Container } from '@/components/ui';

const STEPS: { key: string; icon: LucideIcon }[] = [
  { key: 'download', icon: Download },
  { key: 'backend', icon: ContainerIcon },
  { key: 'connect', icon: KeyRound },
];

const REQUIREMENT_KEYS = ['macos', 'windows', 'node', 'docker', 'binance'] as const;

export const GetStarted = () => {
  const t = useTranslations('getStarted');

  return (
    <section
      id="get-started"
      className="border-y border-gray-200 bg-gray-50 py-20 dark:border-gray-800 dark:bg-gray-900/50 sm:py-28"
    >
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
        </div>
        <ol className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-3">
          {STEPS.map(({ key, icon: Icon }, index) => (
            <li key={key} className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-blue-600 dark:bg-gray-800 dark:text-blue-400">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="font-mono text-sm text-gray-400 dark:text-gray-500">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">
                {t(`steps.${key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {t(`steps.${key}.description`)}
              </p>
            </li>
          ))}
        </ol>
        <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">{t('requirements.label')}</span>
            {REQUIREMENT_KEYS.map((key) => (
              <Badge key={key} variant="outline">
                {t(`requirements.${key}`)}
              </Badge>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={siteConfig.releases} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto">
                <Download size={18} aria-hidden="true" />
                {t('cta.download')}
              </Button>
            </a>
            <a href={siteConfig.docs.quickStart} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                {t('cta.quickStart')}
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
