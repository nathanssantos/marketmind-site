import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Container } from '@/components/ui';

const SCREENSHOTS = [
  { key: 'dashboard', src: '/images/screenshot-0.png', wide: true },
  { key: 'scalping', src: '/images/screenshot-1.png' },
  { key: 'swing', src: '/images/screenshot-2.png' },
  { key: 'autoTrading', src: '/images/screenshot-3.png' },
  { key: 'autoScalping', src: '/images/screenshot-4.png' },
  { key: 'autoTradingDialog', src: '/images/screenshot-5.png' },
  { key: 'marketIndicators', src: '/images/screenshot-6.png' },
  { key: 'wallets', src: '/images/screenshot-8.png' },
  { key: 'settingsChart', src: '/images/screenshot-12.png' },
  { key: 'dashboardLight', src: '/images/screenshot-9.png' },
  { key: 'marketIndicatorsLight', src: '/images/screenshot-10.png' },
  { key: 'classicPalette', src: '/images/screenshot-11.png' },
] as const;

export const Screenshots = () => {
  const t = useTranslations('screenshots');

  return (
    <section id="screenshots" className="bg-gray-50 py-20 dark:bg-gray-900/50 sm:py-28">
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {SCREENSHOTS.map((screenshot, index) => (
            <figure
              key={screenshot.key}
              className={'wide' in screenshot && screenshot.wide ? 'lg:col-span-2' : undefined}
            >
              <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg dark:border-gray-800">
                <Image
                  src={screenshot.src}
                  alt={t(`items.${screenshot.key}.alt`)}
                  width={1920}
                  height={1080}
                  className="w-full"
                  sizes={'wide' in screenshot ? '(min-width: 1280px) 1200px, 100vw' : '(min-width: 1024px) 600px, 100vw'}
                  priority={index === 0}
                />
              </div>
              <figcaption className="mt-3 px-1">
                <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                  {t(`items.${screenshot.key}.title`)}
                </span>
                <span className="block text-sm text-gray-600 dark:text-gray-400">
                  {t(`items.${screenshot.key}.caption`)}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
};
