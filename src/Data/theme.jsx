import { createTheme, colors, ThemeProvider } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.deepPurple[500],
      light: 'rgba(255, 255, 255, 0.87)',
      dark: '#1f1f29',
      darkSidebar: '#2d2b3b',
    },
    secondary: {
      main: colors.blue[700],
      dark: colors.blue[200],
    },
    lighter: {
      main: colors.deepPurple[300],
      // main: colors.grey[300]
    },
    darker: {
      main: colors.deepPurple[100],
      // main: colors.grey[300]
    },
    text: {
      main: colors.blueGrey[50],
      light: colors.blueGrey[900],
      dark: colors.blueGrey[50],
    },
    white: {
      main: colors.grey[300],
      light: colors.grey[300],
      dark: colors.grey[300],
    },
  },
});
