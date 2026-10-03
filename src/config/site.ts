export const siteConfig = {
  name: 'MarketMind',
  url: 'https://marketmind-app.vercel.app',
  github: 'https://github.com/nathanssantos/marketmind',
  releases: 'https://github.com/nathanssantos/marketmind/releases/latest',
  docs: {
    quickStart: 'https://github.com/nathanssantos/marketmind/blob/main/QUICK_START.md',
    mcp: 'https://github.com/nathanssantos/marketmind/blob/main/docs/MCP_SERVERS.md',
    contributing: 'https://github.com/nathanssantos/marketmind/blob/main/CONTRIBUTING.md',
    license: 'https://github.com/nathanssantos/marketmind/blob/main/LICENSE',
  },
  author: {
    name: 'Nathan Santos',
    github: 'https://github.com/nathanssantos',
    linkedin: 'https://linkedin.com/in/nathanssantos',
  },
  nav: [
    { key: 'features', href: '#features' },
    { key: 'screenshots', href: '#screenshots' },
    { key: 'agents', href: '#agents' },
    { key: 'getStarted', href: '#get-started' },
    { key: 'openSource', href: '#open-source' },
  ],
  stats: {
    strategies: '107',
    indicators: '45+',
    mcpTools: '57',
    tests: '8,500+',
    languages: '4',
    version: 'v1.29.0',
  },
  mcpServers: [
    { key: 'app', tools: 19 },
    { key: 'backend', tools: 14 },
    { key: 'strategy', tools: 8 },
    { key: 'trading', tools: 10 },
    { key: 'screenshot', tools: 6 },
  ],
} as const;
