import { Box, Unstable_Grid2 as Grid2, Link } from "@mui/material";

import { CopyRight } from "@/components/ui/footer/CopyRight";
import { APP_META_DATA } from "@/common/constants";

const LINK_STYLE = { textDecoration: "none" };
export const Footer = () => {
  return (
    <Box>
      <Grid2
        container
        mb={2}
        gap={8}
        display={"flex"}
        justifyContent={"center"}
      >
        <Link href="" style={LINK_STYLE}>
          {APP_META_DATA.siteName}
        </Link>
        <a href={"https://hcproduce.co.jp/"} style={LINK_STYLE}>
          運営会社
        </a>
        <Link href="privacy" style={LINK_STYLE}>
          プライバシーポリシー
        </Link>
      </Grid2>
      <CopyRight />
    </Box>
  );
};
