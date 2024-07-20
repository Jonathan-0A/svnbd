import React, { useState } from 'react';
import { Button, TextField, ThemeProvider, Box, CircularProgress, circularProgressClasses } from '@mui/material';
import { theme } from '../Data/theme';
import { getData } from '../api/DepositData'; // Ensure correct import
import DataTableDeposit from './DataTableDeposit'; // Ensure correct import
import toast, { Toaster } from 'react-hot-toast';
import NoData from './NoData'; // Ensure correct import
import '../App.css';

export default function CheckByDepositFc() {
  const [searchTerm, setSearchTerm] = useState('005384456400');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.length === 12) {
      setIsLoading(true);
      getData(searchTerm)
        .then((res) => {
          console.log(res.content);
          setData(res.content || []); // Ensure res.content is an array
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
          setData([]); // Set data to an empty array in case of error
        });
    } else {
      toast.error('Please enter a valid family code number');
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    setData([]); // Clear the data when clearing the search term
  };

  return (
    <ThemeProvider theme={theme}>
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            duration: 3500,
            style: {
              background: '#02c94b',
              color: 'white',
              iconTheme: {
                primary: 'green',
                secondary: 'white',
              },
            },
          },
          error: {
            duration: 3500,
            style: {
              background: 'crimson',
              color: 'white',
              iconTheme: {
                primary: 'red',
                secondary: 'white',
              },
            },
          },
        }}
      />
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          id="fc"
          name="fc"
          required
          fullWidth
          value={searchTerm}
          onChange={handleChange}
          variant="outlined"
          placeholder="Please enter name here to check..."
          sx={{
            marginBottom: 3,
            '& .MuiOutlinedInput-root': {
              color: '#ddddee',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#777799',
              },
              '&:hover:not(.Mui-focused)': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#8855ff',
                },
              },
            },
            '& .MuiInputLabel-outlined': {
              color: '#ccccdd',
            },
          }}
          inputProps={{ maxLength: 12 }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Button
            type="button"
            variant="outlined"
            sx={{ marginBottom: 3 }}
            className="form-btn"
            onClick={handleClear}
          >
            Clear
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{ marginBottom: 3 }}
            className="form-btn"
          >
            {isLoading ? (
              <CircularProgress
                variant="indeterminate"
                sx={{
                  color: '#ccbbdd',
                  animationDuration: '550ms',
                  position: 'relative',
                  [`& .${circularProgressClasses.circle}`]: {
                    strokeLinecap: 'round',
                  },
                }}
                size={25}
                thickness={5}
              />
            ) : (
              'Check'
            )}
          </Button>
        </Box>
      </Box>
      {data.length > 0 ? (
        <DataTableDeposit tableData={data} />
      ) : (
        <NoData />
      )}
    </ThemeProvider>
  );
}
