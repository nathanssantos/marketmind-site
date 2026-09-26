import { useTranslations } from 'next-intl';
import { ChartCandlestick, Crosshair, FlaskConical, Bot } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Container } from '@/components/ui';

const STEPS: { key: string; icon: LucideIcon }[] = [
  { key: 'chart', icon: ChartCandlestick },
  { key: 'detect', icon: Crosshair },
  { key: 'backtest', icon: FlaskConical },
  { key: 'trade', icon: Bot },
];

export const Workflow = () => {
  const t = useTranslations('workflow');

  return (
    <section className="border-y border-gray-200 bg-gray-50 py-20 dark:border-gray-800 dark:bg-gray-900/50 sm:py-28">
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
        </div>
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ key, icon: Icon }, index) => (
            <li key={key} className="relative">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white dark:bg-blue-500">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="font-mono text-sm text-gray-400 dark:text-gray-500">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                {t(`steps.${key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {t(`steps.${key}.description`)}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};
