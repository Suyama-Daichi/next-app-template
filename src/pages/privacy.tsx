import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import AppAppBar from '@/components/shared/AppAppBar';
import Markdown from '@/components/ui/Markdown';
import Typography from '@/components/ui/Typography';
import { Footer } from '@/components/ui/footer/Footer';
import privacy from '@/markdown/privacy.md';
import withRoot from '@/modules/withRoot';

function Privacy() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Container>
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant="h3" gutterBottom align="center">
            Privacy
          </Typography>
          <Markdown>{privacy}</Markdown>
        </Box>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(Privacy);
