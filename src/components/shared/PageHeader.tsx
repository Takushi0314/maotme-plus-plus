import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { SITE_CONFIG } from '@/constants';

export default function PageHeader() {
  return (
    <Box component='header' sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon></MenuIcon>
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flwxGrow: 1 }}>
            {SITE_CONFIG.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
