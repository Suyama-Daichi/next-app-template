import React, { FC, ReactNode } from "react";
import { CssBaseline } from "@mui/material";

import { PaletteMode } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { COLOR } from "@/common/constants";

interface Props {
  children?: ReactNode;
  variant?: PaletteMode;
}
/** MUIのカスタマイズ */
export const MuiTheme = ({ children, variant = "light" }: Props) => {
  // Color definitions: https://next.material-ui.com/system/palette/
  const theme = createTheme({
    palette: {
      mode: variant,
      text: {
        primary: variant === "light" ? "#444" : "#ccc",
      },
      background:
        variant === "light"
          ? { default: COLOR.blue_bg }
          : { default: COLOR.black },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
