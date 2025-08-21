import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { DarkModeProvider } from '@/lib/context/DarkModeContext';
import { AnimatePresence } from 'framer-motion';
import { playfair, lora } from '@/lib/fonts';
import Head from 'next/head';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div className={`${playfair.variable} ${lora.variable} font-sans`}>
      <DarkModeProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Design Dile - Elegant Book Design</title>
          <meta name="description" content="A minimalist portfolio for a book design studio, focusing on clean design and elegant typography." />
        </Head>
        <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </DarkModeProvider>
    </div>
  );
}

export default MyApp;
