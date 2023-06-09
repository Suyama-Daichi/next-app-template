import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import AppAppBar from '@/components/shared/AppAppBar';
import Head from '@/components/shared/Head';
import Markdown from '@/components/ui/Markdown';
import Typography from '@/components/ui/Typography';
import Footer from '@/components/ui/footer/Footer';
import terms from '@/markdown/terms.md';
import withRoot from '@/modules/withRoot';

function Terms() {
  return (
    <React.Fragment>
      <Head title="利用規約" />
      <AppAppBar />
      <Container>
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant="h3" gutterBottom align="center">
            Terms
          </Typography>
          <Markdown>{terms}</Markdown>
        </Box>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(Terms);
