import { Alert, AlertTitle, Box, Container, Divider, Grid } from '@mui/material';

import AppAppBar from '@/components/shared/AppAppBar';
import Head from '@/components/shared/Head';
import ImageWithCaption from '@/components/ui/ImageWithCaption';
import Typography from '@/components/ui/Typography';
import Footer from '@/components/ui/footer/Footer';

const StrikeZone = () => {
  return (
    <>
      <Head title="ストライクゾーンについて" />
      <AppAppBar />
      <Container maxWidth={'md'}>
        <Typography variant="h4" align="center">
          ストライクゾーンについて
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Box>
          <Typography>
            カラーボールではみんなが交代で審判をやりますが、「ストライクゾーンがよく分らない」
            という人も結構いると思いますので参考にしてください。
          </Typography>
          <Typography>図は一般的な野球のゾーンです。</Typography>
          <Typography color={'warning.main'} fontWeight={'bold'}></Typography>
          <Alert severity="info">
            <AlertTitle>※カラーボール野球のストライクゾーンはこれよりも甘めです。</AlertTitle>
          </Alert>
        </Box>
        <Grid container display={'flex'} justifyContent={'center'} mb={1}>
          <Grid item sm={6}>
            <ImageWithCaption caption="左打者" src="/jcbl-strike-zone-left.jpg" />
          </Grid>
          <Grid item sm={6}>
            <ImageWithCaption caption="右打者" src="/jcbl-strike-zone-right.jpg" />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default StrikeZone;
