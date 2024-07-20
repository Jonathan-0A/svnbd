import React from 'react';
import { ThemeProvider } from '@mui/material';
import DrawerAppBar from './DrawerAppBar';
import { theme } from '../Data/theme';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AddMember from './AddMember';
import CheckByFc from './CheckByFc';

export default function Istavrity() {
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <DrawerAppBar title="Dikshyarti Information" />
      <Box sx={{ marginTop: 6 }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              onChange={handleChange}
              textColor="inherit"
              indicatorColor="primary"
              sx={{
                backgroundColor: '#2d2b3b',
              }}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
            >
              <Tab label="Check by F.C." value="1" />
              <Tab label="Add Member" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <CheckByFc />
          </TabPanel>
          <TabPanel value="2">
            <AddMember />
          </TabPanel>
        </TabContext>
      </Box>
    </ThemeProvider>
  );
}
