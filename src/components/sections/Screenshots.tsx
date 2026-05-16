import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Container } from '@/components/ui';

const SCREENSHOTS = [
  { src: '/images/screenshot-0.png', alt: 'MarketMind trading dashboard with multi-timeframe charts (15m / 1h / 4h), live Confluence scoring, and active positions' },
  { src: '/images/screenshot-1.png', alt: 'MarketMind scalping layout (1m / 5m / 15min) with EMAs, volume profile, and active orders' },
  { src: '/images/screenshot-2.png', alt: 'MarketMind swing trading layout (1h / 4h / 1d) with multi-indicator Confluence panel' },
  { src: '/images/screenshot-3.png', alt: 'MarketMind Auto-Trading layout with watcher list, active executions, and positions panel' },
  { src: '/images/screenshot-4.png', alt: 'MarketMind Auto-Scalping layout with order flow metrics and session P&L' },
  { src: '/images/screenshot-5.png', alt: 'MarketMind Auto-Trading dialog with Trading Profiles, multi-asset watcher list (BTC / ETH / SOL futures), trading mode, and dynamic symbol selection' },
  { src: '/images/screenshot-6.png', alt: 'MarketMind Market Indicators dashboard — Altcoin Season Index, ADX trend strength, Order Book, Funding Rates, Fear & Greed, BTC Dominance, MVRV Ratio' },
  { src: '/images/screenshot-8.png', alt: 'MarketMind Wallets dialog with paper-trading wallets, balances, initial balances, and net P&L percentages' },
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
