import { useTranslations } from 'next-intl';
import { Download } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Badge, Button, Container, GithubIcon } from '@/components/ui';

export const Hero = () => {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden pb-20 pt-24 sm:pb-32 sm:pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl dark:bg-blue-500/10" />
      </div>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-6">{t('badge')}</Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            {t('title')}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300">
              {t('titleHighlight')}
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            {t('description')}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={siteConfig.releases} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto">
                <Download size={18} aria-hidden="true" />
                {t('cta.download')}
              </Button>
            </a>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                <GithubIcon />
                {t('cta.github')}
              </Button>
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">{t('platforms')}</p>
        </div>
      </Container>
    </section>
  );
};
