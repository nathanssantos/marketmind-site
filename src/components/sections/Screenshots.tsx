import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Container } from '@/components/ui';

const SCREENSHOTS = [
  { src: '/images/screenshot-0.png', alt: 'MarketMind trading dashboard with multi-timeframe charts, checklist, and live portfolio' },
  { src: '/images/screenshot-5.png', alt: 'MarketMind trading dashboard — secondary view' },
  { src: '/images/screenshot-1.png', alt: 'MarketMind multi-timeframe chart with indicators' },
  { src: '/images/screenshot-2.png', alt: 'MarketMind weekly and monthly charts with Fibonacci' },
  { src: '/images/screenshot-3.png', alt: 'MarketMind multi-timeframe chart with volume profile and moving averages' },
  { src: '/images/screenshot-4.png', alt: 'MarketMind dark theme chart with trend lines and Bollinger Bands' },
];

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
        <div className="mx-auto max-w-6xl space-y-6">
          {SCREENSHOTS.map((screenshot) => (
            <div
              key={screenshot.src}
              className="overflow-hidden rounded-xl border border-gray-200 shadow-lg dark:border-gray-800"
            >
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={1920}
                height={1080}
                className="w-full"
                quality={90}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
