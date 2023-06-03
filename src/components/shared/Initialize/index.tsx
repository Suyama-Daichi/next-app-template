import { PropsWithChildren, useEffect } from 'react';

import Cookies from 'js-cookie';
import { useSetRecoilState } from 'recoil';

import { accessTokenAtom } from '@/recoil/atoms';

/** 初回読み込み時に一度だけ読み込む特別なコンポーネントです。 _app.tsxで一度のみ呼び出されます */
export const Initialize = ({ children }: PropsWithChildren) => {
  const setIsAuth = useSetRecoilState(accessTokenAtom);

  useEffect(() => {
    console.log('start initialize ');
    const accessToken = Cookies.get('oauth_token');
    if (typeof accessToken !== 'string') return;
    setIsAuth(accessToken);
  }, []);

  return <>{children}</>;
};
