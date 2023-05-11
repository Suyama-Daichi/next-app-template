import { useState } from 'react';

import { Button, Menu, MenuItem } from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { APP_META_DATA } from '@/common/constants';
import AppBar from '@/components/ui/AppBar';
import Toolbar from '@/components/ui/Toolbar';
const rightLink = {
  fontSize: 16,
  ml: 3,
};

function AppAppBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <AppBar position="fixed" sx={{ bgcolor: 'common.white' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Link variant="h6" underline="none" color="inherit" href="/" sx={{ fontSize: 24 }}>
            {APP_META_DATA.siteName}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Menu
              id="menu-app-bar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              <MenuItem>
                <Link href="/" underline="none" width={'100%'}>
                  ホーム
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/about" underline="none" width={'100%'}>
                  カラーボール野球とは
                </Link>
              </MenuItem>
            </Menu>
            <Button color="primary" sx={rightLink} onMouseOver={handleMenu}>
              メニュー
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
