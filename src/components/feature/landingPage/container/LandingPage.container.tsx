
import { Box } from '@mui/material';

import { APP_META_DATA } from '@/common/constants';
import { HeroSection } from '@/components/feature/landingPage/container/presenter/HeroSection';
import { MainSection } from '@/components/feature/landingPage/container/presenter/MainSection';
import { Footer } from '@/components/ui/footer/Footer';
import { Charts } from '@/components/ui/icon';

const sections = [
  {
    title: 'リード文が入ります',
    content:
      'クラウドサービスは、ユーザーが自分でサーバーを運用する必要がないため、コスト削減やスケーラビリティの向上などのメリットが',
    Icon: <Charts size={100} />,
  },
  {
    title: 'リード文が入ります',
    content:
      'クラウドサービスは、ユーザーが自分でサーバーを運用する必要がないため、コスト削減やスケーラビリティの向上などのメリットが',
    Icon: <Charts size={100} />,
  },
  {
    title: 'リード文が入ります',
    content:
      'クラウドサービスは、ユーザーが自分でサーバーを運用する必要がないため、コスト削減やスケーラビリティの向上などのメリットが',
    Icon: <Charts size={100} />,
  },
];
export const LandingPageContainer = () => {
  return (
    <Box>
      <HeroSection
        logo="https://picsum.photos/seed/logo/400/200"
        title={`${APP_META_DATA.siteName}`}
        description={APP_META_DATA.siteDescription}
        imageUrl="https://picsum.photos/seed/heroimage/400/300"
      />
      <MainSection sections={sections} />
      <Footer />
    </Box>
  );
};
