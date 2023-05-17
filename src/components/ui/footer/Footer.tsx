import { Box, Grid, Link } from '@mui/material';
import { useRouter } from 'next/router';

import { APP_META_DATA } from '@/common/constants';
import { CopyRight } from '@/components/ui/footer/CopyRight';

const LINK_STYLE = { textDecoration: 'none' };
const Footer = () => {
  const router = useRouter();
  return (
    <Box
      height={'200px'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      rowGap={2}
    >
      <Box
        component={'img'}
        height={'40%'}
        src="/jcbl-logo.png"
        onClick={() => router.push('/')}
        sx={{ cursor: 'pointer' }}
      />
      <Grid container mb={2} display={'flex'} justifyContent={'center'} columnSpacing={2}>
        <Grid item>
          <Link href="" style={LINK_STYLE}>
            {APP_META_DATA.siteName}
          </Link>
        </Grid>
        <Grid item>
          <Link href="privacy" style={LINK_STYLE}>
            プライバシーポリシー
          </Link>
        </Grid>
        <Grid item>
          <Link href="terms" style={LINK_STYLE}>
            利用規約
          </Link>
        </Grid>
      </Grid>
      <CopyRight />
    </Box>
  );
};
export default Footer;
