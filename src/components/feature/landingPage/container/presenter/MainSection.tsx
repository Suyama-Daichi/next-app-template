import { APP_META_DATA, COLOR } from "@/common/constants";
import { Box, Unstable_Grid2 as Grid2, Typography } from "@mui/material";

type SectionProps = {
  title: string;
  content: string;
  Icon: React.ReactNode;
};

type MainSectionProps = {
  sections: SectionProps[];
};
const Section = ({ title, content, Icon }: SectionProps) => {
  return (
    <Box
      display={"flex"}
      width={290}
      p={2}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Box mb={1}>{Icon}</Box>
      <Typography variant="subtitle1" mb={2}>
        {title}
      </Typography>
      <Typography variant="caption">{content}</Typography>
    </Box>
  );
};
export const MainSection = ({ sections }: MainSectionProps) => {
  return (
    <Grid2
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      height={"100vh"}
    >
      <Typography variant="h5" my={8} color={COLOR.blue}>
        {APP_META_DATA.siteName}の魅力
      </Typography>
      <Grid2 gap={3} display={"flex"}>
        {sections.map((section, index) => (
          <Grid2 xs={4} key={index}>
            <Section {...section} />
          </Grid2>
        ))}
      </Grid2>
    </Grid2>
  );
};
