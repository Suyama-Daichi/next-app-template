import type { AppProps } from 'next/app';

import { MuiTheme } from '@/modules/MuiTheme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MuiTheme variant="light">
      <Component {...pageProps} />
    </MuiTheme>
  );
}
