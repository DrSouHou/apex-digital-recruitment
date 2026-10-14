import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  metadataBase: new URL('https://apex-digital.uib.ac.ma'),
  title: 'APEX DIGITAL | Recrutement 2026-2027 • Université Internationale Bleue (UIB)',
  description: "Portail officiel de recrutement et d'innovation d'APEX DIGITAL (Université Internationale Bleue - UIB • SupTech Santé • SupTech Environnement • SupTech Sciences Informatiques). Projets majeurs en HealthTech, GreenTech et IA biomédicale pour l'année 2026-2027.",
  keywords: [
    'APEX DIGITAL',
    'UIB',
    'Université Internationale Bleue',
    'SupTech Santé',
    'SupTech Environnement',
    'SupTech Sciences Informatiques',
    'Recrutement 2026-2027',
    'HealthTech',
    'GreenTech',
    'IoT ESP32',
    'IA Biomédicale',
    'CardioPulse',
    'AquaSmart',
  ],
  authors: [{ name: 'APEX DIGITAL' }],
  icons: {
    icon: [
      { url: '/tab-icon.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/tab-icon.png',
    apple: '/tab-icon.png',
  },
  openGraph: {
    title: 'APEX DIGITAL | Recrutement 2026-2027 • Université Internationale Bleue (UIB)',
    description: "Rejoignez la communauté digitale officielle d'APEX DIGITAL. Développez des solutions réelles en HealthTech, IA et GreenTech.",
    type: 'website',
    images: ['/assets/apex-logo.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="light scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/tab-icon.png" type="image/png" />
        <link rel="shortcut icon" href="/tab-icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/tab-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('apex_theme');
                  var theme = saved === 'dark' ? 'dark' : 'light';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-[#FAFCFF] text-slate-900 dark:bg-[#0B1120] dark:text-slate-100 min-h-screen transition-colors duration-200 antialiased selection:bg-[#F97316] selection:text-white">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
