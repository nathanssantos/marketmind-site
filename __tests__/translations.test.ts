import { describe, it, expect } from 'vitest';
import en from '../src/messages/en.json';
import pt from '../src/messages/pt.json';
import es from '../src/messages/es.json';
import fr from '../src/messages/fr.json';

const getKeys = (obj: Record<string, unknown>, prefix = ''): string[] =>
  Object.entries(obj).flatMap(([key, value]) => {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null) {
      return getKeys(value as Record<string, unknown>, fullKey);
    }
    return [fullKey];
  });

describe('Translation files', () => {
  const enKeys = getKeys(en);
  const locales = { pt, es, fr } as Record<string, Record<string, unknown>>;

  it('English file should have translation keys', () => {
    expect(enKeys.length).toBeGreaterThan(0);
  });

  Object.entries(locales).forEach(([locale, messages]) => {
    it(`${locale} should have the same keys as English`, () => {
      const localeKeys = getKeys(messages);
      expect(localeKeys).toEqual(enKeys);
    });
  });

  Object.entries(locales).forEach(([locale, messages]) => {
    it(`${locale} should not have empty string values`, () => {
      const localeKeys = getKeys(messages);
      localeKeys.forEach((key) => {
        const value = key.split('.').reduce<unknown>((obj, k) => {
          if (obj && typeof obj === 'object') return (obj as Record<string, unknown>)[k];
          return undefined;
        }, messages);
        expect(value, `${locale}.${key} should not be empty`).not.toBe('');
      });
    });
  });
});
