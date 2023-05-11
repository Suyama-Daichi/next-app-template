import { useState } from 'react';

import { Button, Menu, MenuItem } from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useRouter } from 'next/router';

import AppBar from '@/components/ui/AppBar';
import Toolbar from '@/components/ui/Toolbar';
const rightLink = {
  fontSize: 16,
  ml: 3,
};

function AppAppBar() {
  const router = useRouter();
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
          <Box
            component={'img'}
            src="/jcbl-logo.png"
            height={'70%'}
            onClick={() => router.push('/')}
            sx={{ cursor: 'pointer' }}
          />
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
