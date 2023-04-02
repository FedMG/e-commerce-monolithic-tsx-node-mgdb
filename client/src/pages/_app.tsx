import { MantineProvider } from '@mantine/core';
import { rtlCache } from 'rtl-cache';

import { AppPropsWithLayout } from '_app-types';
import '@/styles/globals.css'


export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
    
  return (
    <div dir="ltr">
      <MantineProvider
        theme={{ dir: 'ltr' }}
        withGlobalStyles
        withNormalizeCSS
        emotionCache={rtlCache}
      >
       {getLayout(<Component {...pageProps} />, pageProps)}
     </MantineProvider>
    </div>
  );
}
