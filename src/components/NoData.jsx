import React from 'react';
import { Box, Typography } from '@mui/material';
import SearchOffIcon from '@mui/icons-material/SearchOff'; // Import the SearchOff icon

const NoData = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // height: '70vh',
        mt: 11,
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <SearchOffIcon sx={{ fontSize: 80, color: '#777799', marginBottom: 2 }} />
      <Typography variant="h6" sx={{ color: '#8888aa' }}>
        No data found
      </Typography>
    </Box>
  );
};

export default NoData;
