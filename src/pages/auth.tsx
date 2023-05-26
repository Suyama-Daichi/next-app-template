import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

import useFetchAccessToken from '@/components/Home/hooks/useFetchAccessToken';

const Auth = () => {
  const router = useRouter();
  const queryParams = router.query;
  const { data, error } = useFetchAccessToken(typeof queryParams.code === 'string' ? queryParams.code : undefined);

  if (data) {
    Cookies.set('oauth_token', data.access_token);
    router.push('/');
  }

  if (error) return <>認証に失敗しました</>;

  return <>認証中</>;
};

export default Auth;
