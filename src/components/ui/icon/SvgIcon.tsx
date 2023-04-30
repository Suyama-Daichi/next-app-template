import { SvgIcon as MuiSvgIcon } from '@mui/material';

import { COLOR } from '@/common/constants';

export type SvgIconProps = {
  color?: string;
  size: number;
};

type Props = {
  children: React.ReactNode;
};
export const SvgIcon = ({
  color = COLOR.background,
  size,
  children,
  ...rest
}: Props & SvgIconProps) => {
  return (
    <MuiSvgIcon
      sx={{ color: color, width: size, height: size }}
      viewBox={`0 0 ${size + 2} ${size + 2}`}
      {...rest}
    >
      {children}
    </MuiSvgIcon>
  );
};
