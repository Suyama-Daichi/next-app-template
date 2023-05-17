import { Box, Typography } from '@mui/material';

type Props = { caption: string; src: string };
const ImageWithCaption = ({ caption, src }: Props) => {
  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Box component={'img'} src={src} maxWidth={'100%'} />
      <Typography variant="caption" align="center" color={'gray'}>
        {caption}
      </Typography>
    </Box>
  );
};

export default ImageWithCaption;
