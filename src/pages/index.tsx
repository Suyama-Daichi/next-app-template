import { Inter } from "next/font/google";
import { LandingPageContainer } from "@/components/feature/landingPage/container/LandingPage.container";
import { Head } from "@/components/shared/Head";
import { APP_META_DATA } from "@/common/constants";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head title={APP_META_DATA.siteName} />
      <LandingPageContainer />
    </>
  );
}
