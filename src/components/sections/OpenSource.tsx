import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site';
import { Button, Container } from '@/components/ui';

export const OpenSource = () => {
  const t = useTranslations('openSource');

  return (
    <section id="open-source" className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-green-100 p-3 dark:bg-green-900/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-600 dark:text-green-400"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
          <div className="mb-8 inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            </svg>
            {t('license')}
          </div>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {t('cta.github')}
              </Button>
            </a>
            <a
              href={`${siteConfig.github}/blob/main/CONTRIBUTING.md`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                {t('cta.contribute')}
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
