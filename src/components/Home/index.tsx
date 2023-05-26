import { useState } from 'react';

import { Button } from '@mui/material';

import { CityMap } from '@/components/CityMap';
import { PrefHeatMap } from '@/components/CityMap/heatmap.type';
import { StaticProps } from '@/components/Home/type';
import AppAppBar from '@/components/shared/AppAppBar';
import Footer from '@/components/ui/footer/Footer';

const Home = (props: StaticProps) => {
  const [countWithPref, setCountWithPref] = useState<PrefHeatMap[]>([]);
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
