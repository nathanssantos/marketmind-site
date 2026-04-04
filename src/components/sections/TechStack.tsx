import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui';

interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'infrastructure';
}

const TECH_ITEMS: TechItem[] = [
  { name: 'Electron', category: 'frontend' },
  { name: 'React 19', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Chakra UI', category: 'frontend' },
  { name: 'Canvas API', category: 'frontend' },
  { name: 'Vite', category: 'frontend' },
  { name: 'Fastify', category: 'backend' },
  { name: 'tRPC', category: 'backend' },
  { name: 'Drizzle ORM', category: 'backend' },
  { name: 'Binance SDK', category: 'backend' },
  { name: 'PostgreSQL', category: 'infrastructure' },
  { name: 'TimescaleDB', category: 'infrastructure' },
  { name: 'Vitest', category: 'infrastructure' },
  { name: 'pnpm', category: 'infrastructure' },
];

const CATEGORY_COLORS: Record<TechItem['category'], string> = {
  frontend:
    'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300',
  backend:
    'border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-950 dark:text-green-300',
  infrastructure:
    'border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-800 dark:bg-purple-950 dark:text-purple-300',
};

export const TechStack = () => {
  const t = useTranslations('techStack');

  const categories: TechItem['category'][] = ['frontend', 'backend', 'infrastructure'];

  return (
    <section id="tech-stack" className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
        </div>
        <div className="mx-auto max-w-3xl space-y-10">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {t(category)}
              </h3>
              <div className="flex flex-wrap gap-3">
                {TECH_ITEMS.filter((item) => item.category === category).map((item) => (
                  <span
                    key={item.name}
                    className={`rounded-full border px-4 py-2 text-sm font-medium ${CATEGORY_COLORS[category]}`}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
