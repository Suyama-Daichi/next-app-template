import * as React from 'react';

import { KeyboardArrowDown } from '@mui/icons-material';
import Box, { BoxProps } from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Theme, styled } from '@mui/material/styles';
import { SxProps } from '@mui/system';

const ProductHeroLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    height: '80vh',
    minHeight: 500,
    maxHeight: 1300,
  },
}));

const Background = (props: BoxProps) => {
  const { sx } = props;
  return (
    <Box
      sx={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        zIndex: -2,
        ...sx,
      }}
    />
  );
};

const BackGroundLayer = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'common.black',
        opacity: 0.5,
        zIndex: -1,
      }}
    />
  );
};

interface ProductHeroLayoutProps {
  sxBackground: SxProps<Theme>;
}

export default function ProductHeroLayout(props: React.HTMLAttributes<HTMLDivElement> & ProductHeroLayoutProps) {
  const { sxBackground, children } = props;

  return (
    <ProductHeroLayoutRoot>
      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Container
          sx={{
            mb: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src="/productHeroWonder.png" alt="wonder" width={'128px'} />
          {children}
          <BackGroundLayer />
          <Background sx={sxBackground} />
        </Container>
        <KeyboardArrowDown />
      </Container>
    </ProductHeroLayoutRoot>
  );
}
