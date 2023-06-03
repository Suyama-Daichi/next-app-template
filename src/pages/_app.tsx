import { RecoilRoot } from 'recoil';

import type { AppProps } from 'next/app';

import { Initialize } from '@/components/shared/Initialize';
import { MuiTheme } from '@/modules/MuiTheme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MuiTheme variant="light">
      <RecoilRoot>
        <Initialize>
          <Component {...pageProps} />
        </Initialize>
      </RecoilRoot>
    </MuiTheme>
  );
}
