import { Box, Button, Unstable_Grid2 as Grid2, Typography } from '@mui/material';

import { COLOR } from '@/common/constants';

type Props = {
  logo: string;
  title: string;
  description: string[];
  imageUrl: string;
};
export const HeroSection = ({ logo, title, description, imageUrl }: Props) => {
  return (
    <Grid2 container sx={{ backgroundColor: COLOR.white }}>
      <Grid2 xs={5} xsOffset={1} display={'flex'} flexDirection={'column'} justifyContent={'center'} rowGap={2}>
        <Grid2 display={'flex'} flexDirection={'column'}>
          <Box mb={4}>
            <img src={logo} />
          </Box>
          <Typography variant="h4" mb={2} color={COLOR.blue}>
            {title}
          </Typography>
          {description.map((m) => (
            <Typography key={m} variant="subtitle2">
              {m}
            </Typography>
          ))}
        </Grid2>
        <Grid2 container gap={2}>
          <Button href={'/login'}>ログイン</Button>
          <Button variant="outlined" href={'/dashboard'}>
            お問い合せ
          </Button>
        </Grid2>
      </Grid2>
      <Grid2 xs={6}>
        <img width={'100%'} height={'auto'} src={imageUrl} alt="Hero Image" />
      </Grid2>
    </Grid2>
  );
};
