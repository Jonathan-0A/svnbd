import React, { useEffect, useState } from 'react';
import { ThemeProvider, TextField, Box, Button, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import CircularProgress, { circularProgressClasses, } from '@mui/material/CircularProgress';
import { theme } from '../Data/theme';
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"
import '../App.css';
// import { api } from '..api/DikshyartiData.jsx';

export default function AddMember() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fc_no: '0',
    name: 'Null',
    address: 'Null',
    phone: '0',
    pan: '0',
    amount: '0'
  });
  const getValue = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    let form = new FormData(document.querySelector('form'))
    e.preventDefault();
    setIsLoading(true)
    axios({
      method: 'post',
      url: 'https://script.google.com/macros/s/AKfycbyKUwvsQjj-6sB_Bpq9e7wfHyjHqZjDTDqO1K9Rdd6E54CO19nreqoZWBydLovvz1uOkg/exec',
      data: form
    }).then((res) => {
      console.log(res)
      setIsLoading(false)
      toast.success('Data submitted successfully')
    }).catch((err) => {
      console.log(err)
      toast.error('Something went wrong')
      setIsLoading(false)
    })
  };
  const handleReset = () => {
    setFormData({
      fc_no: '0',
      name: '',
      address: '',
      phone: '0',
      pan: '0',
      amount: '0'
    })
  };

  return (
    <ThemeProvider theme={theme}>
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            duration: 5000,
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
            duration: 5000,
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          component="form"
          sx={{
            width: 'calc(100% - 3rem)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            id="fc_no"
            name="fc_no"
            value={formData.fc_no}
            onChange={getValue}
            required
            fullWidth
            label="Family Code Number"
            variant="outlined"
            placeholder="Enter your family code number here"
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
          <TextField
            id="name"
            name="name"
            value={formData.name}
            onChange={getValue}
            required
            fullWidth
            label="Name"
            variant="outlined"
            placeholder="Enter your full name here"
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
            inputProps={{ minLength: 5 }}
          />
          <TextField
            id="address"
            name="address"
            value={formData.address}
            onChange={getValue}
            required
            fullWidth
            label="Address"
            variant="outlined"
            placeholder="Enter your full address here"
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
            inputProps={{ minLength: 5 }}
          />
          <TextField
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={getValue}
            required
            fullWidth
            label="Mobile Number"
            variant="outlined"
            placeholder="Enter your phone number here"
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
            inputProps={{ minLength: 10, maxLength: 10 }}
          />
          <TextField
            id="pan"
            name="pan"
            value={formData.pan}
            onChange={getValue}
            required
            fullWidth
            label="Pan Card Number"
            variant="outlined"
            placeholder="Enter your pan card number here"
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
            inputProps={{ minLength: 5 }}
          />
          <TextField
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={getValue}
            required
            fullWidth
            label="Amount"
            variant="outlined"
            placeholder="Enter your amount here"
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
            inputProps={{ minLength: 5 }}
          />
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Button
              type="reset"
              variant="outlined"
              sx={{
                marginBottom: 3,
                height: '50px',
                whiteSpace: 'nowrap',
              }}
              className="form-btn"
              onClick={handleReset}
            >
              Reset
            </Button>
            <Button
              type="submit"
              id="addDikshyarti"
              variant="contained"
              sx={{
                marginBottom: 3,
                height: '50px',
                whiteSpace: 'nowrap',
              }}
              className="form-btn"
            >
              {
                isLoading ?
                  <CircularProgress
                    variant="indeterminate"
                    // disableShrink
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
                  /> :
                  'Submit'
              }
            </Button>
          </div>
        </Box>
      </div>
    </ThemeProvider>
  );
}
