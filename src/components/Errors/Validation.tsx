import { Typography, TypographyProps } from '@mui/material';

import { COLOR } from '@/common/constants';

type Props = {
  message: string;
};
export const ValidationError = ({ message, ...others }: Props & TypographyProps) => {
  return (
    <Typography color={COLOR.red} fontSize={'small'} {...others}>
      {message}
    </Typography>
  );
};
