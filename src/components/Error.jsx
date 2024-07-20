import React from 'react';
import { Box, ThemeProvider, Link, Typography, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { theme } from '../Data/theme';
import { useNavigate } from 'react-router-dom';

export default function Error() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          color: "crimson",
          padding: 4,
          textAlign: 'center',
        }}
      >
        <ErrorOutlineIcon color="error" sx={{ fontSize: 80, mb: 2 }} />
        <Typography variant="h4" gutterBottom>
          Error!
        </Typography>
        <Typography variant="h6" gutterBottom>
          Page not found
        </Typography>
        <Typography variant="body1" gutterBottom>
          We couldn't find the page you're looking for. Please try again later or go back to the home page.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" sx={{ background: 'crimson' }} onClick={handleGoBack}>
            Go Back to Home
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
