import { setRequestLocale } from 'next-intl/server';
import { Hero, Features, Screenshots, TechStack, Stats, OpenSource } from '@/components/sections';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Features />
      <Screenshots />
      <TechStack />
      <Stats />
      <OpenSource />
    </>
  );
}
