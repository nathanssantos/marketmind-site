import { ImageResponse } from 'next/og';
import { LOCALES, type Locale } from '@/i18n/routing';

export const alt = 'MarketMind — Algorithmic Trading Assistant';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function Image({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const heroTitle: string = messages.hero.title;
  const heroHighlight: string = messages.hero.titleHighlight;
  const heroDescription: string = messages.hero.description;
  const badge: string = messages.hero.badge;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #1a1f2e 0%, #0d1117 100%)',
          padding: '64px 72px',
          position: 'relative',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -160,
            left: -160,
            width: 480,
            height: 480,
            background: 'radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(59,130,246,0) 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -200,
            right: -200,
            width: 540,
            height: 540,
            background: 'radial-gradient(circle, rgba(16,185,129,0.30) 0%, rgba(16,185,129,0) 70%)',
            display: 'flex',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 18, zIndex: 1 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: 'linear-gradient(135deg, #1a1f2e 0%, #0d1117 100%)',
              border: '2px solid rgba(59,130,246,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
              <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
              <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
            </svg>
          </div>
          <span style={{ fontSize: 36, fontWeight: 700, color: '#f8fafc', letterSpacing: -0.5 }}>
            MarketMind
          </span>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 78, fontWeight: 700, color: '#f8fafc', letterSpacing: -2, lineHeight: 1.05 }}>
              {heroTitle}
            </span>
            <span
              style={{
                fontSize: 78,
                fontWeight: 700,
                letterSpacing: -2,
                lineHeight: 1.05,
                background: 'linear-gradient(90deg, #60a5fa 0%, #34d399 100%)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {heroHighlight}
            </span>
          </div>
          <p
            style={{
              fontSize: 26,
              color: '#94a3b8',
              marginTop: 28,
              lineHeight: 1.4,
              maxWidth: 1000,
            }}
          >
            {heroDescription}
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 1 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 18px',
              borderRadius: 999,
              background: 'rgba(59,130,246,0.12)',
              border: '1px solid rgba(59,130,246,0.4)',
              color: '#93c5fd',
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            {badge}
          </div>
          <span style={{ fontSize: 22, color: '#64748b', fontWeight: 500 }}>
            marketmind-app.vercel.app
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
