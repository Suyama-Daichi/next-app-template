import { Button } from '@mui/material';

import ProductHeroLayout from './ProductHeroLayout';

import Typography from '@/components/ui/Typography';

const backgroundImage = 'hero.jpg';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" variant="h2">
        野球、見るならやる。
      </Typography>
      <Typography color="inherit" variant="h5" sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}>
        この素晴らしきスポーツは、 やがてベースボールの一派として歴史にその名を刻むだろう。
      </Typography>
      <Button
        variant="contained"
        size="large"
        component="a"
        target="_blank"
        href="https://forms.gle/fuSMY4XLZns888YZ7"
        sx={{ minWidth: 200 }}
      >
        新規チーム申請
      </Button>
    </ProductHeroLayout>
  );
}
