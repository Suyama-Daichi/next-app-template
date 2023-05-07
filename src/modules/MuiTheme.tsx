import { ReactNode } from 'react';

import { CssBaseline, PaletteMode } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import theme from '@/modules/theme';

interface Props {
  children?: ReactNode;
  variant?: PaletteMode;
}
/** MUIのカスタマイズ */
export const MuiTheme = ({ children }: Props) => {
  // Color definitions: https://next.material-ui.com/system/palette/

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
