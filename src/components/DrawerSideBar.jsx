import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { VscListSelection } from "react-icons/vsc";
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { sidebarLinks } from '../Data/links';
import { Link } from 'react-router-dom';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250, bgcolor: 'var(--dark-sidebar)', color: 'var(--text)' }}
      role="presentation"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
      }}
    >
      <List>
        <IconButton
          onClick={toggleDrawer(false)}
          size="large"
          style={{ marginLeft: '80%', marginTop: '-9px', color: 'var(--text)' }}
        >
          <KeyboardDoubleArrowLeftRoundedIcon />
        </IconButton>
        {sidebarLinks.map((v, i) => (
          <ListItem key={v.id} disablePadding>
            <ListItemButton>
              <Link
                to={v.link}
                style={{
                  color: 'var(--text)',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '11px',
                  width: '100%'
                }}
              >
                {v.icon} {v.title}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Divider /> */}
      <List>
        <Box sx={{ padding: 2, paddingLeft: 0 }}>
          <ListItem disablePadding>
            <ListItemButton>
              <Link
                to="/settings"
                style={{
                  color: 'var(--text)',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '11px',
                }}
              >
                <SettingsRoundedIcon />
                Settings
              </Link>
            </ListItemButton>
          </ListItem>
        </Box>
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton color="inherit" onClick={toggleDrawer(true)}>
      <VscListSelection />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
