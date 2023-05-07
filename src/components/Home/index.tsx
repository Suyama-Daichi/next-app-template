import React from 'react';

import { Footer } from '@/components/ui/footer/Footer';
import AppAppBar from '@/modules/views/AppAppBar';
import ProductCTA from '@/modules/views/ProductCTA';
import ProductCategories from '@/modules/views/ProductCategories';
import ProductHero from '@/modules/views/ProductHero';
import ProductHowItWorks from '@/modules/views/ProductHowItWorks';
import ProductSmokingHero from '@/modules/views/ProductSmokingHero';
import ProductValues from '@/modules/views/ProductValues';
import withRoot from '@/modules/withRoot';

const Index = () => {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <Footer />
    </React.Fragment>
  );
};

export const HomeContainer = withRoot(Index);
