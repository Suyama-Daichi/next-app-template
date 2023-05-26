// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next';

import { FOURSQUARE_BACKEND } from '@/common/constants';
import { ACCESS_TOKEN_RESPONSE } from '@/common/type';
import { makeQueryString } from '@/common/utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse<ACCESS_TOKEN_RESPONSE>) {
  if (typeof req.query.code !== 'string') return;
  const queryString = makeQueryString({
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
    client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    grant_type: 'authorization_code',
    redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
    code: req.query.code,
  });
  const result = (await axios.get<ACCESS_TOKEN_RESPONSE>(`${FOURSQUARE_BACKEND}/oauth2/access_token?${queryString}`))
    .data;
  if (!result) res.status(500);
  res.status(200).json(result);
}
