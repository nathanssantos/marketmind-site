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
    tests: '7,200+',
    strategies: '105',
    indicators: '25+',
    languages: '4',
    exchanges: '2',
    version: 'v0.85.0',
  },
} as const;
