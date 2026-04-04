import { describe, it, expect } from 'vitest';
import { siteConfig } from '../../src/config/site';

describe('siteConfig', () => {
  it('has required properties', () => {
    expect(siteConfig.name).toBe('MarketMind');
    expect(siteConfig.url).toBeDefined();
    expect(siteConfig.github).toBeDefined();
    expect(siteConfig.author.name).toBe('Nathan Santos');
  });

  it('has navigation items', () => {
    expect(siteConfig.nav.length).toBeGreaterThan(0);
    siteConfig.nav.forEach((item) => {
      expect(item.key).toBeDefined();
      expect(item.href).toMatch(/^#/);
    });
  });

  it('has stats values', () => {
    expect(siteConfig.stats.tests).toBeDefined();
    expect(siteConfig.stats.strategies).toBeDefined();
    expect(siteConfig.stats.indicators).toBeDefined();
    expect(siteConfig.stats.languages).toBeDefined();
    expect(siteConfig.stats.exchanges).toBeDefined();
    expect(siteConfig.stats.version).toMatch(/^v\d+/);
  });
});
