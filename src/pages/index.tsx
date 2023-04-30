import { APP_META_DATA } from '@/common/constants';
import { LandingPageContainer } from '@/components/feature/landingPage/container/LandingPage.container';
import { Head } from '@/components/shared/Head';

export default function Home() {
  return (
    <>
      <Head title={APP_META_DATA.siteName} />
      <LandingPageContainer />
    </>
  );
}
