import { Box } from "@mui/material";
import { BoxProps } from "@mui/system";

import { COLOR } from "@/common/constants";
import { SvgIcon, type SvgIconProps } from "@/components/ui/icon/SvgIcon";

export const Charts = ({
  color = COLOR.background,
  size,
  m,
}: SvgIconProps & { m?: BoxProps["m"] }) => {
  return (
    <Box m={m} display={"flex"} alignItems={"center"}>
      <SvgIcon color={color} size={size}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2333_42574)">
            <path
              d="M1.43332 84.5667H10.0333V67.3667H18.6333V84.5667H24.3667V55.9H32.9667V84.5667H38.7V50.1667H47.3V84.5667H53.148V58.7667H61.6333V84.5667H67.3667V38.7H75.9667V84.5667H84.5667"
              stroke="#6C97FA"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M43 18.6333C45.3748 18.6333 47.3 16.7082 47.3 14.3333C47.3 11.9585 45.3748 10.0333 43 10.0333C40.6252 10.0333 38.7 11.9585 38.7 14.3333C38.7 16.7082 40.6252 18.6333 43 18.6333Z"
              stroke="#6C97FA"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M57.3333 32.9667C59.7082 32.9667 61.6333 31.0415 61.6333 28.6667C61.6333 26.2918 59.7082 24.3667 57.3333 24.3667C54.9585 24.3667 53.0333 26.2918 53.0333 28.6667C53.0333 31.0415 54.9585 32.9667 57.3333 32.9667Z"
              stroke="#6C97FA"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.73332 53.0333C8.10814 53.0333 10.0333 51.1082 10.0333 48.7333C10.0333 46.3585 8.10814 44.4333 5.73332 44.4333C3.35849 44.4333 1.43332 46.3585 1.43332 48.7333C1.43332 51.1082 3.35849 53.0333 5.73332 53.0333Z"
              stroke="#6C97FA"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M80.2667 10.0333C82.6415 10.0333 84.5667 8.10816 84.5667 5.73334C84.5667 3.35851 82.6415 1.43333 80.2667 1.43333C77.8919 1.43333 75.9667 3.35851 75.9667 5.73334C75.9667 8.10816 77.8919 10.0333 80.2667 10.0333Z"
              stroke="#6C97FA"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.44568 46.4543L39.2877 16.6123"
              stroke="#6C97FA"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M60.372 25.628L77.228 8.772"
              stroke="#6C97FA"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M46.0387 17.372L54.2947 25.628"
              stroke="#6C97FA"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2333_42574">
              <rect width="86" height="86" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </SvgIcon>
    </Box>
  );
};
