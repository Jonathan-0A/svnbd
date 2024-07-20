import React, { useEffect, useState } from 'react';
import { ThemeProvider, TextField, Box, Button, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import CircularProgress, { circularProgressClasses, } from '@mui/material/CircularProgress';
import { theme } from '../Data/theme';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"
import '../App.css';
// import { api } from '..api/DikshyartiData.jsx';

export default function AddMember() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    dp_serial: '0',
    fc_no: '0',
    name: 'Null',
    rittwik: 'Null',
    address: 'Null',
    phone: '0',
    adhaar: '0',
    pan: '0',
    dp_status: 'FW Pending',
    dikshyarti: 'Yes',
    swastayani: 'No',
    innitiation_date: dayjs(new Date())
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
      url: 'https://script.google.com/macros/s/AKfycbzFZG1dJ-UVv8aXbLqO4XXO2xI154GL5UHIH7caGHZi08AGqIwpNkrtXUfq3a2JujWbVA/exec',
      data: form
    }).then((res) => {
      console.log(res)
      setIsLoading(false)
      toast.success('Member added successfully')
    }).catch((err) => {
      console.log(err)
      toast.error('Something went wrong')
      setIsLoading(false)
    })
  };
  const handleReset = () => {
    setFormData({
      dp_serial: '0',
      fc_no: '0',
      name: '',
      rittwik: '',
      address: '',
      phone: '0',
      adhaar: '0',
      pan: '0',
      dp_status: 'FW Pending',
      dikshyarti: 'No',
      swastayani: 'No',
      innitiation_date: dayjs(new Date())
    })
  };
  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
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
            id="dp_serial"
            name="dp_serial"
            value={formData.dp_serial}
            onChange={getValue}
            required
            fullWidth
            label="DP Serial Number"
            variant="outlined"
            placeholder="Enter your dp serial number here"
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
            inputProps={{ minLength: 1 }}
          />
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
            id="rittwik"
            name="rittwik"
            value={formData.rittwik}
            onChange={getValue}
            required
            fullWidth
            label="Rittwik Name"
            variant="outlined"
            placeholder="Enter your rittwik name here"
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
            id="adhaar"
            name="adhaar"
            value={formData.adhaar}
            onChange={getValue}
            required
            fullWidth
            label="Adhaar Number"
            variant="outlined"
            placeholder="Enter your adhaar number here"
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
          <FormControl
            fullWidth
            sx={{
              marginBottom: 3,
              '& .MuiInputLabel-outlined': {
                color: '#ccccdd',
              },
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
              '& .MuiSelect-icon': {
                color: '#ddddee',
              },
            }}
          >
            <InputLabel id="dp-status-label">DP Status*</InputLabel>
            <Select
              id="dp_status"
              name="dp_status"
              label="DP Status"
              value={formData.dp_status}
              onChange={getValue}
              labelId="dp-status-label"
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: 'var(--dark)', // Change the background color here
                    '& .MuiMenuItem-root': {
                      bgcolor: 'var(--dark)', // Change the background color of MenuItem
                      color: 'var(--light)', // Change the text color of MenuItem
                      '&:hover': {
                        bgcolor: 'rgba(100, 100, 100, 0.3)', // Change the hover background color of MenuItem
                      },
                    },
                  },
                },
              }}
            >
              <MenuItem value="FW Pending">FW Pending</MenuItem>
              <MenuItem value="FW Completed">FW Completed</MenuItem>
              <MenuItem value="DA Approved">DA Approved</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            sx={{
              marginBottom: 3,
              '& .MuiInputLabel-outlined': {
                color: '#ccccdd',
              },
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
              '& .MuiSelect-icon': {
                color: '#ddddee',
              },
            }}
          >
            <InputLabel id="dikshyarti-label">Dikshyarti*</InputLabel>
            <Select
              id="dikshyarti"
              name="dikshyarti"
              label="Dikshyarti"
              value={formData.dikshyarti}
              onChange={getValue}
              labelId="dikshyarti-label"
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: 'var(--dark)', // Change the background color here
                    '& .MuiMenuItem-root': {
                      bgcolor: 'var(--dark)', // Change the background color of MenuItem
                      color: 'var(--light)', // Change the text color of MenuItem
                      '&:hover': {
                        bgcolor: 'rgba(100, 100, 100, 0.3)', // Change the hover background color of MenuItem
                      },
                    },
                  },
                },
              }}
            >
              <MenuItem value="No">No</MenuItem>
              <MenuItem value="Yes">Yes</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            sx={{
              marginBottom: 3,
              '& .MuiInputLabel-outlined': {
                color: '#ccccdd',
              },
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
              '& .MuiSelect-icon': {
                color: '#ddddee',
              },
            }}
          >
            <InputLabel id="swastayani-label">Swastayani*</InputLabel>
            <Select
              id="swastayani"
              name="swastayani"
              label="Swastayani"
              value={formData.swastayani}
              onChange={getValue}
              labelId="swastayani-label"
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: 'var(--dark)', // Change the background color here
                    '& .MuiMenuItem-root': {
                      bgcolor: 'var(--dark)', // Change the background color of MenuItem
                      color: 'var(--light)', // Change the text color of MenuItem
                      '&:hover': {
                        bgcolor: 'rgba(100, 100, 100, 0.3)', // Change the hover background color of MenuItem
                      },
                    },
                  },
                },
              }}
            >
              <MenuItem value="No">No</MenuItem>
              <MenuItem value="Yes">Yes</MenuItem>
            </Select>
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker  defaultValue={dayjs(new Date())}
              format="DD-MM-YYYY"
              id="innitiation_date"
              name="innitiation_date"
              label="Innitiation Date"
              value={selectedDate}
              onChange={handleDateChange}
              fullWidth
              sx={{
                marginBottom: 3,
                width: '100%',
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
              slotsProps={{
                popper: {
                  sx: {
                    '& .MuiPaper-root': {
                      backgroundColor: 'black',
                      color: '#ddddee',
                    },
                    '& .MuiPickersDay-root': {
                      backgroundColor: 'black',
                      color: '#ddddee',
                      '&:hover': {
                        backgroundColor: '#555566',
                      },
                    },
                    '& .MuiPickersDay-root.Mui-selected': {
                      backgroundColor: '#666677',
                      color: '#ffffff',
                    },
                    '& .MuiPickersDay-root.Mui-selected:hover': {
                      backgroundColor: '#777788',
                    },
                    '& .MuiPickersCalendarHeader-root': {
                      backgroundColor: '#222233',
                      color: '#dddddd',
                    },
                  },
                },
              }}
            />
          </LocalizationProvider>
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
              Reset Form
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
                  'Add Dikshyarti'
              }
            </Button>
          </div>
        </Box>
      </div>
    </ThemeProvider>
  );
}
