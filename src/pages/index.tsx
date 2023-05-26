import { promises as fs } from 'fs';
import path from 'path';

import { HomeContainer } from '@/components/Home';
import { StaticProps } from '@/components/Home/type';
import Head from '@/components/shared/Head';

export async function getStaticProps() {
  const jsonDirectory = path.join(process.cwd(), 'public');
  const jpCities = await fs.readFile(jsonDirectory + '/jp_cities.json', 'utf8');
  const jpPrefectures = await fs.readFile(jsonDirectory + '/prefectures.json', 'utf8');

  return {
    props: {
      jpCities: JSON.parse(jpCities),
      jpPrefectures: JSON.parse(jpPrefectures),
    },
  };
}

export default function Home(props: StaticProps) {
  return (
    <>
      <Head />
      <HomeContainer {...props} />
    </>
  );
}
