import { describe, it, expect } from 'vitest';
import { siteConfig } from '../../src/config/site';

describe('siteConfig', () => {
  it('has required properties', () => {
    expect(siteConfig.name).toBe('MarketMind');
    expect(siteConfig.url).toBeDefined();
    expect(siteConfig.github).toBeDefined();
    expect(siteConfig.releases).toContain(siteConfig.github);
    expect(siteConfig.author.name).toBe('Nathan Santos');
  });

  it('has navigation items pointing at page anchors', () => {
    expect(siteConfig.nav.length).toBeGreaterThan(0);
    siteConfig.nav.forEach((item) => {
      expect(item.key).toBeDefined();
      expect(item.href).toMatch(/^#/);
    });
  });

  it('has stats values', () => {
    expect(siteConfig.stats.strategies).toMatch(/^\d+$/);
    expect(siteConfig.stats.indicators).toBeDefined();
    expect(siteConfig.stats.mcpTools).toMatch(/^\d+$/);
    expect(siteConfig.stats.tests).toBeDefined();
    expect(siteConfig.stats.languages).toBe('4');
    expect(siteConfig.stats.version).toMatch(/^v\d+\.\d+\.\d+$/);
  });

  it('sums the MCP server tool counts into the tools stat', () => {
    const total = siteConfig.mcpServers.reduce((sum, server) => sum + server.tools, 0);
    expect(String(total)).toBe(siteConfig.stats.mcpTools);
  });
});
