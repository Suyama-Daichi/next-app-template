import { Button, Container } from '@mui/material';

function ProductSmokingHero() {
  return (
    <Container component="section" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 8 }}>
      <Button
        sx={{
          border: '4px solid currentColor',
          borderRadius: 0,
          height: 'auto',
          py: 2,
          px: 5,
        }}
        component={'a'}
        target="_blank"
        href="https://forms.gle/2xhQawkamff6dV1dA"
      >
        お問い合わせはこちら
      </Button>
    </Container>
  );
}

export default ProductSmokingHero;
