import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { DarkModeProvider } from '@/lib/context/DarkModeContext';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <DarkModeProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Design Dile - Book Design Portfolio</title>
        <meta name="description" content="Design Dile is a portfolio showcasing professional book design services, from covers to full layouts." />
        <meta property="og:title" content="Design Dile - Book Design Portfolio" />
        <meta property="og:description" content="Explore stunning book designs and professional layout services." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" /> {/* Add a placeholder OG image path */}
      </Head>
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </DarkModeProvider>
  );
}

export default MyApp;
