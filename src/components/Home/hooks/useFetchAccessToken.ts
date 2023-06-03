import useSWR from 'swr';

import { fetcher } from '@/common/fetcher';
import { ACCESS_TOKEN_RESPONSE } from '@/common/types';
import { makeQueryString } from '@/common/utils';

const useFetchAccessToken = (code?: string) => {
  const queryString = makeQueryString({ code });
  // TODO: ホストを切り替えたい
  const swr = useSWR<ACCESS_TOKEN_RESPONSE>(
    code ? `https://complete-cities.vercel.app/api/auth?${queryString}` : null,
    fetcher,
  );
  return { ...swr, isLoading: swr.isLoading || swr.isValidating };
};

export default useFetchAccessToken;
