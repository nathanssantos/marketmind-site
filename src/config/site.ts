export const siteConfig = {
  name: 'MarketMind',
  url: 'https://marketmind-app.vercel.app',
  github: 'https://github.com/nathanssantos/marketmind',
  author: {
    name: 'Nathan Santos',
    github: 'https://github.com/nathanssantos',
    linkedin: 'https://linkedin.com/in/nathanssantos',
  },
  nav: [
    { key: 'features', href: '#features' },
    { key: 'screenshots', href: '#screenshots' },
    { key: 'techStack', href: '#tech-stack' },
    { key: 'openSource', href: '#open-source' },
  ],
  stats: {
    tests: '7,500+',
    strategies: '106',
    indicators: '35+',
    languages: '4',
    exchanges: '1',
    version: 'v0.105.0',
  },
} as const;
