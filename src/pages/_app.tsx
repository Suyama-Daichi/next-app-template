import { MuiTheme } from "@/modules/MuiTheme";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MuiTheme variant="light">
      <Component {...pageProps} />
    </MuiTheme>
  );
}
