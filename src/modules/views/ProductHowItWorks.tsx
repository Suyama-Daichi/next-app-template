import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'secondary.main',
  fontWeight: 'medium',
};

const image = {
  height: 55,
  my: 4,
};

function ProductHowItWorks() {
  return (
    <Box component="section" sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden' }}>
      <Container
        sx={{
          my: 4,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" sx={{ mb: 4 }}>
          How it works
        </Typography>
        <Grid container rowSpacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box sx={number}>1.</Box>
              <Box component="img" src="productHowItWorks1.svg" alt="suitcase" sx={image} />
              <Typography variant="h5" align="center">
                Appointment every Wednesday 9am.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box sx={number}>2.</Box>
              <Box component="img" src="productHowItWorks2.svg" alt="graph" sx={image} />
              <Typography variant="h5" align="center">
                First come, first served. Our offers are in limited quantities, so be quick.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box sx={number}>3.</Box>
              <Box component="img" src="productHowItWorks3.svg" alt="clock" sx={image} />
              <Typography variant="h5" align="center">
                {'New offers every week. New experiences, new surprises. '}
                {'Your Sundays will no longer be alike.'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Button color="secondary" size="large" variant="contained" component="a" href="/sign-up/" sx={{ mt: 4 }}>
          Get started
        </Button>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
