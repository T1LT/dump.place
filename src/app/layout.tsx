import NavigationMenuComp from '@/components/NavigationMenu';
import '@/styles/global.css';
import localFont from 'next/font/local';
import { HydrationOverlay } from '@builder.io/react-hydration-overlay';

import { Inter } from 'next/font/google';
import { AnimatePresence, motion } from 'framer-motion';
import Background from '@/components/landing-components/hero-section/background';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontHeading = localFont({
  src: '../../assets/fonts/CalSans-SemiBold.ttf',
  variable: '--font-heading',
});

const fontSubHeading = localFont({
  src: '../../assets/fonts/product-font.ttf',
  variable: '--font-subheading',
});

const fontHeaderAlt = localFont({
  src: '../../assets/fonts/cd-semi.otf',
  variable: '--font-headingAlt',
});

export const metadata = {
  title: 'Dump.place',
  description: 'A minimal place to dump your thoughts.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          defer
          data-website-id="ecec2b13-0f08-416d-921b-94a601eb414f"
          src="https://u.dhr.wtf/umami.js"
        ></script>
      </head>
      <body
        className={`dark overflow-x-hidden overflow-y-autofont-sans ${inter.variable} ${fontHeaderAlt.variable} ${fontHeading.variable} ${fontSubHeading.variable}`}
      >
        <div className="loader" />

        <HydrationOverlay>
          <NavigationMenuComp />

          {children}
    
        </HydrationOverlay>
      </body>
    </html>
  );
}
