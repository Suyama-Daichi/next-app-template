import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';

import { MuiTheme } from '@/modules/MuiTheme';

export default function withRoot<P extends JSX.IntrinsicAttributes>(Component: React.ComponentType<P>) {
  function WithRoot(props: P) {
    return (
      <MuiTheme>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiTheme>
    );
  }

  return WithRoot;
}
