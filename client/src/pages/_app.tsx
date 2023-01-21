import { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { rtlCache } from 'rtl-cache';

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
        <Component {...pageProps} />
     </MantineProvider>
     </div>
  );
}
