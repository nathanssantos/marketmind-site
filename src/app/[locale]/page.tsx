import { setRequestLocale } from 'next-intl/server';
import {
  Hero,
  Workflow,
  Features,
  Screenshots,
  Agents,
  GetStarted,
  Stats,
  TechStack,
  OpenSource,
} from '@/components/sections';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Workflow />
      <Features />
      <Screenshots />
      <Agents />
      <GetStarted />
      <Stats />
      <TechStack />
      <OpenSource />
    </>
  );
}
