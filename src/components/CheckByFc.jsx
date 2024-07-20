import React, { useState } from 'react';
import { Button, TextField, ThemeProvider, Box } from '@mui/material';
import { theme } from '../Data/theme';
import { getData, totalData } from '../api/DikshyartiData';
import DataTable from './DataTable';
import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress';
import '../App.css';
import toast, { Toaster } from 'react-hot-toast';
import NoData from './NoData'; // Import the NoData component

export default function CheckByFc() {
  const [searchTerm, setSearchTerm] = useState('');
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
          setData(res.content);
          if (res.content.length === 0) {
            toast.error('No Data Found');
          }
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
          toast.error('Something went wrong');
        });
    } else {
      toast.error('Please enter a 12 digit family code number');
    }
    // totalData();
  };

  const handleClear = () => {
    setSearchTerm('');
    setData([]); // Clear the data as well when clearing the search term
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
          placeholder="Please enter 12 digit family code number here to check..."
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
        <DataTable tableData={data} />
      ) : (
        <NoData />
      )}
    </ThemeProvider>
  );
}
