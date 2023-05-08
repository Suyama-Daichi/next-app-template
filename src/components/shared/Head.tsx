import NextHead from 'next/head';

import { APP_META_DATA } from '@/common/constants';

type Props = {
  title?: string;
  description?: string;
};
const Head = ({ title, description = title }: Props) => {
  return (
    <NextHead>
      <title>{title ? title + ' | ' + APP_META_DATA.siteName : APP_META_DATA.siteName}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};

export default Head;
