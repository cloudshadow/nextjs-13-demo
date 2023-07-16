'use client';

import { SessionProvider } from 'next-auth/react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import createEmotionCache from './createEmotionCache';

export default function ProvidersWrapper({ children }: { children: React.ReactNode }) {
  const emotionCache = createEmotionCache();
  const theme = createTheme({
    palette: {
      primary: {
        main: '#275cee',
      },
    },
  });
  return (
    <SessionProvider>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </CacheProvider>
    </SessionProvider>
  );
}
