import { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { rtlCache } from 'rtl-cache';

import { Layout } from '../components/layout';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <div dir="ltr">
      <MantineProvider
        theme={{ dir: 'ltr' }}
        withGlobalStyles
        withNormalizeCSS
        emotionCache={rtlCache}
      >
        <Layout title='App - Home'>
        <Component {...pageProps} />
        </Layout>
     </MantineProvider>
     </div>
  );
}
        