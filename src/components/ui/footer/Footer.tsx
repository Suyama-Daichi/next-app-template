import { Box, Unstable_Grid2 as Grid2, Link } from '@mui/material';

import { APP_META_DATA } from '@/common/constants';
import { CopyRight } from '@/components/ui/footer/CopyRight';

const LINK_STYLE = { textDecoration: 'none' };
const Footer = () => {
  return (
    <Box>
      <Grid2 container mb={2} gap={8} display={'flex'} justifyContent={'center'}>
        <Link href="" style={LINK_STYLE}>
          {APP_META_DATA.siteName}
        </Link>
        <a href={'https://google.com/'} style={LINK_STYLE}>
          運営会社
        </a>
        <Link href="privacy" style={LINK_STYLE}>
          プライバシーポリシー
        </Link>
        <Link href="terms" style={LINK_STYLE}>
          利用規約
        </Link>
      </Grid2>
      <CopyRight />
    </Box>
  );
};
export default Footer;
