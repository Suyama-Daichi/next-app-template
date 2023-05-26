import useSWR from 'swr';

import { fetcher } from '@/common/fetcher';
import { ACCESS_TOKEN_RESPONSE } from '@/common/type';
import { makeQueryString } from '@/common/utils';

const useFetchAccessToken = (code?: string) => {
  const queryString = makeQueryString({ code });
  const swr = useSWR<ACCESS_TOKEN_RESPONSE>(code ? `http://localhost:3000/api/auth?${queryString}` : null, fetcher);
  return { ...swr, isLoading: swr.isLoading || swr.isValidating };
};

export default useFetchAccessToken;
