import React from 'react';
import { ThemeProvider } from '@mui/material';
import DrawerAppBar from './DrawerAppBar';
import { theme } from '../Data/theme';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <DrawerAppBar title="SVNBD" />
    </ThemeProvider>
  );
}
