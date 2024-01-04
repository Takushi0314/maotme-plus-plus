'use client';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material';
import { useServerInsertedHTML } from 'next/navigation';
import React, { useState } from 'react';

const theme = createTheme();

const EmotionRegistry = ({ children }: { children: React.ReactNode }) => {
  const [emotionCache] = useState(() => {
    const emotionCache = createCache({ key: 'css', prepend: true });
    emotionCache.compat = true;
    return emotionCache;
  });

  useServerInsertedHTML(() => {
    return (
      <style
        data-emotion={`${emotionCache.key} ${Object.keys(
          emotionCache.inserted
        ).join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: Object.values(emotionCache.inserted).join(' '),
        }}
      />
    );
  });
  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
};

export default EmotionRegistry;
