import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui';

export const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <Container>
        <div className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="mb-3 flex items-center gap-2.5">
              <Image src="/images/logo.svg" alt="MarketMind" width={28} height={28} />
              <span className="text-base font-bold text-gray-900 dark:text-white">
                {siteConfig.name}
              </span>
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400">{t('description')}</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">
              {t('links')}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={`${siteConfig.github}/releases`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Releases
                </a>
              </li>
              <li>
                <a
                  href={`${siteConfig.github}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Issues
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">
              {t('legal')}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`${siteConfig.github}/blob/main/LICENSE`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  {t('license')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6 dark:border-gray-800">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            {t('builtBy')}{' '}
            <a
              href={siteConfig.author.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              {siteConfig.author.name}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};
