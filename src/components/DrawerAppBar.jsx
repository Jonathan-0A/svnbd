import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LoginRoundedIcon from '@mui/icons-material/Login';
import DrawerSideBar from './DrawerSideBar.jsx';

const settings = ['PC~1', 'PC~2', 'PC~3', 'Disconnect'];

function ResponsiveAppBar({ title }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: 'primary',
          color: 'inherit',
          padding: '0 7px',
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: '51px',
            '@media (min-width: 600px)': {
              minHeight: '51px',
            },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <DrawerSideBar />
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            letterSpacing={'.3rem'}
            fontFamily={'monospace'}
            fontWeight={700}
          >
            {
              <span
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '.1rem',
                  fontSize: '1rem',
                }}
              >
                {title}
              </span>
            }
          </Typography>
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Connection settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ pr: 1 }}>
                <Avatar alt="Connect To"><LoginRoundedIcon /></Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default ResponsiveAppBar;
