import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui';

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
        <div className="mx-auto max-w-5xl">
          <div className="flex aspect-video items-center justify-center rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto mb-4 text-gray-300 dark:text-gray-600"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
              <p className="text-sm text-gray-400 dark:text-gray-500">{t('placeholder')}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
