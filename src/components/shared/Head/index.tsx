import NextHead from 'next/head';

type Props = {
  title: string;
  description?: string;
};
export const Head = ({ title, description = title }: Props) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};
