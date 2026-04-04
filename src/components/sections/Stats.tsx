import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui';

const STAT_KEYS = [
  'tests',
  'strategies',
  'indicators',
  'languages',
  'exchanges',
  'version',
] as const;

export const Stats = () => {
  const t = useTranslations('stats');

  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900/50 sm:py-28">
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {STAT_KEYS.map((key) => (
            <div key={key} className="text-center">
              <div className="mb-1 text-3xl font-bold text-gray-900 dark:text-white">
                {siteConfig.stats[key]}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{t(key)}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
