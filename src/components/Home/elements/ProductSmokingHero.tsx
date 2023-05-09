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
      >
        お問い合わせはこちら
      </Button>
    </Container>
  );
}

export default ProductSmokingHero;
