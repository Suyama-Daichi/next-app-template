import { useState } from 'react';

import { Button } from '@mui/material';
import Cookies from 'js-cookie';
import Link from 'next/link';

import { FOURSQUARE_AUTH_URL } from '@/common/constants';
import { CityMap } from '@/components/CityMap';
import { PrefHeatMap } from '@/components/CityMap/heatmap.type';
import { StaticProps } from '@/components/Home/type';
import AppAppBar from '@/components/shared/AppAppBar';
import Footer from '@/components/ui/footer/Footer';

const Home = (props: StaticProps) => {
  const [countWithPref, setCountWithPref] = useState<PrefHeatMap[]>([]);
  const [isAuth, setIsAuth] = useState(Cookies.get('oauth_token'));

  if (!isAuth) return <Link href={FOURSQUARE_AUTH_URL}>ログインすると訪れたエリアが塗られます</Link>;

  return (
    <>
      <AppAppBar />
      <CityMap prefHeatmap={countWithPref} {...props} />
      <Button
        onClick={() =>
          setCountWithPref([
            { id: 3, value: 12345 },
            { id: 12, value: 1 },
            { id: 42, value: 90 },
          ])
        }
      >
        更新
      </Button>
      <Footer />
    </>
  );
};

export const HomeContainer = Home;
