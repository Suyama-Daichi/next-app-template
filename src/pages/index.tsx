import { promises as fs } from 'fs';
import path from 'path';

import { HomeContainer } from '@/components/Home';
import { StaticProps } from '@/components/Home/type';
import Head from '@/components/shared/Head';
export async function getStaticProps() {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'public');
  //Read the json data file data.json
  const jpCities = await fs.readFile(jsonDirectory + '/jp_cities.json', 'utf8');
  const jpPrefectures = await fs.readFile(jsonDirectory + '/prefectures.json', 'utf8');
  //Return the content of the data file in json format

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
