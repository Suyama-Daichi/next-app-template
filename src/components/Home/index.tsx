import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRecoilValue } from 'recoil';

import { FOURSQUARE_AUTH_URL, PREFECTURES } from '@/common/constants';
import { CheckinItem } from '@/common/types/UserCheckinsResponse';
import { CityMap } from '@/components/CityMap';
import { PrefHeatMap } from '@/components/CityMap/heatmap.type';
import useFetchUserCheckins from '@/components/Home/hooks/useFetchUserCheckins';
import { StaticProps } from '@/components/Home/type';
import AppAppBar from '@/components/shared/AppAppBar';
import Footer from '@/components/ui/footer/Footer';
import { accessTokenAtom } from '@/recoil/atoms';

const generatePrefHeatMapData = (checkins: CheckinItem[]): PrefHeatMap[] => {
  const result: PrefHeatMap[] = checkins.reduce(
    (accumulator: PrefHeatMap[], currentValue: CheckinItem): PrefHeatMap[] => {
      const prefectureName = currentValue.venue.location.state as keyof typeof PREFECTURES;
      const prefectureCode = PREFECTURES[prefectureName];
      const index = accumulator.findIndex((i) => i.id === prefectureCode);
      if (index !== -1) {
        accumulator[index].value++;
      } else {
        accumulator.push({ id: prefectureCode, value: 1 });
      }
      return accumulator;
    },
    [],
  );

  return result;
};

const Home = (props: StaticProps) => {
  const [countWithPref, setCountWithPref] = useState<PrefHeatMap[]>([]);
  const accessToken = useRecoilValue(accessTokenAtom);
  const { data, error, isLoading } = useFetchUserCheckins();

  useEffect(() => {
    if (!data) return;
    generatePrefHeatMapData(data.items);
    setCountWithPref(generatePrefHeatMapData(data.items));
  }, [data]);

  if (isLoading) return <>読み込み中</>;

  if (!accessToken) return <Link href={FOURSQUARE_AUTH_URL}>ログインすると訪れたエリアが塗られます</Link>;
  return (
    <>
      <AppAppBar />
      <CityMap prefHeatmap={countWithPref} {...props} />
      <Footer />
    </>
  );
};

export const HomeContainer = Home;
