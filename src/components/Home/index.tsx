import ProductCTA from '@/components/Home/elements/ProductCTA';
import ProductCategories from '@/components/Home/elements/ProductCategories';
import ProductHero from '@/components/Home/elements/ProductHero';
import ProductHowItWorks from '@/components/Home/elements/ProductHowItWorks';
import ProductSmokingHero from '@/components/Home/elements/ProductSmokingHero';
import ProductValues from '@/components/Home/elements/ProductValues';
import Footer from '@/components/ui/footer/Footer';
import withRoot from '@/modules/withRoot';

const Index = () => {
  return (
    <>
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <Footer />
    </>
  );
};

export const HomeContainer = withRoot(Index);
