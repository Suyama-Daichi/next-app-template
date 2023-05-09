import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { APP_META_DATA } from '@/common/constants';
import AppBar from '@/components/ui/AppBar';
import Toolbar from '@/components/ui/Toolbar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link variant="h6" underline="none" color="inherit" href="/" sx={{ fontSize: 24 }}>
            {APP_META_DATA.siteName}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link color="inherit" variant="h6" underline="none" href="/sign-in/" sx={rightLink}>
              {'Sign In'}
            </Link>
            <Link variant="h6" underline="none" href="/sign-up/" sx={{ ...rightLink, color: 'secondary.main' }}>
              {'Sign Up'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;