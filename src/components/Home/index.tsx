import { CityMap } from '@/components/CityMap';
import { StaticProps } from '@/components/Home/type';
import AppAppBar from '@/components/shared/AppAppBar';
import Footer from '@/components/ui/footer/Footer';

const Home = (props: StaticProps) => {
  return (
    <>
      <AppAppBar />
      <CityMap {...props} />
      <Footer />
    </>
  );
};

export const HomeContainer = Home;
