import { APP_META_DATA } from "@/common/constants";
import { Box, Typography } from "@mui/material";
const currentDate = new Date();
export const CopyRight = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} mb={2}>
      <Typography variant="caption">
        Copyright {currentDate.getFullYear()} {APP_META_DATA.owner} All Rights
        Reserved.
      </Typography>
    </Box>
  );
};
