import { useTranslations } from 'next-intl';
import {
  LayoutGrid,
  ChartLine,
  Radio,
  ScrollText,
  Layers,
  FlaskConical,
  Bot,
  ShieldCheck,
  Wallet,
  Gauge,
  ScanSearch,
  HardDrive,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Card, Container } from '@/components/ui';

interface FeatureGroup {
  key: string;
  items: { key: string; icon: LucideIcon }[];
}

const FEATURE_GROUPS: FeatureGroup[] = [
  {
    key: 'charting',
    items: [
      { key: 'layouts', icon: LayoutGrid },
      { key: 'indicators', icon: ChartLine },
      { key: 'liveData', icon: Radio },
    ],
  },
  {
    key: 'strategies',
    items: [
      { key: 'strategies', icon: ScrollText },
      { key: 'confluence', icon: Layers },
      { key: 'backtesting', icon: FlaskConical },
    ],
  },
  {
    key: 'execution',
    items: [
      { key: 'autoTrading', icon: Bot },
      { key: 'risk', icon: ShieldCheck },
      { key: 'trading', icon: Wallet },
    ],
  },
  {
    key: 'market',
    items: [
      { key: 'marketContext', icon: Gauge },
      { key: 'screener', icon: ScanSearch },
      { key: 'local', icon: HardDrive },
    ],
  },
];

export const Features = () => {
  const t = useTranslations('features');

  return (
    <section id="features" className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
        </div>
        <div className="space-y-12">
          {FEATURE_GROUPS.map((group) => (
            <div key={group.key}>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {t(`groups.${group.key}`)}
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map(({ key, icon: Icon }) => (
                  <Card key={key} className="group hover:border-blue-200 dark:hover:border-blue-800">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-blue-600 transition-colors group-hover:bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:group-hover:bg-blue-950">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <h4 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">
                      {t(`items.${key}.title`)}
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {t(`items.${key}.description`)}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
