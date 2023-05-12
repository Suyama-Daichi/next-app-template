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

const MENU_LIST = [
  { label: 'ホーム', link: '/' },
  { label: 'カラーボール野球とは', link: '/about' },
  { label: 'Q&A', link: '/faq' },
];

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
              {MENU_LIST.map((menu, i) => (
                <MenuItem key={i}>
                  <Link href={menu.link} underline="none" width={'100%'}>
                    {menu.label}
                  </Link>
                </MenuItem>
              ))}
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
