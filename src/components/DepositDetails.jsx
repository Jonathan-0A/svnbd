import React, { useState, useEffect } from 'react';
import { Box, ThemeProvider, Link, Typography, Button, TextField, CircularProgress } from '@mui/material';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { theme } from '../Data/theme';
import toast, { Toaster } from 'react-hot-toast';
import DrawerAppBar from './DrawerAppBar';
import '../App.css';

export default function MemberDetails() {
    const [data, setData] = useState([]);
    const [currentData, setCurrentData] = useState(null);
    const location = useLocation();
    const urlId = location.pathname.split('/')[3];
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        fc_no: '',
        name: '',
        address: '',
        phone: '',
        pan: '',
        amount: ''
    });

    const getValue = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://script.google.com/macros/s/AKfycbyKUwvsQjj-6sB_Bpq9e7wfHyjHqZjDTDqO1K9Rdd6E54CO19nreqoZWBydLovvz1uOkg/exec');
                setData(res.data.content);
            } catch (error) {
                console.error('Error fetching data:', error);
                toast.error('Error fetching data');
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            const member = data.find((e) => e.id === urlId);
            setCurrentData(member);
        }
    }, [data, urlId]);

    useEffect(() => {
        if (currentData) {
            setFormData({
                fc_no: currentData.fc || '',
                name: currentData.name || '',
                address: currentData.address || '',
                phone: currentData.phone || '',
                pan: currentData.pan || '',
                amount: currentData.amount || ''
            });
        }
    }, [currentData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const form = new FormData(document.querySelector('form'));
        console.log(form)
        axios({
            method: 'post',
            url: 'https://script.google.com/macros/s/AKfycbyGY481BQryWnlk6pYZadF9CLAX4o1q5j7Gjn_bf0LOf5swCOlzukqGcUbvPBHyD4pX7w/exec',
            data: form
        }).then((res) => {
            console.log(res);
            setIsLoading(false);
            toast.success('Data submitted successfully');
        }).catch((err) => {
            console.log(err);
            // toast.error('Something went wrong');
            toast.error(err.message || 'Unknown error');
            setIsLoading(false);
        });
    };

    const handleReset = () => {
        setFormData({
            fc_no: '',
            name: '',
            address: '',
            phone: '',
            pan: '',
            amount: ''
        });
    };

    if (!currentData) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', background: 'rgba(11, 11, 11, 0.25)' }}>
                <CircularProgress sx={{ color: '#5532bb' }} size={85} thickness={5} />
            </Box>
        );
    }

    return (
        <ThemeProvider theme={theme}>
            <DrawerAppBar title='Deposit Form (Export)' />
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
                    marginTop: '71px'
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
                                        sx={{
                                            color: '#ccbbdd',
                                            animationDuration: '550ms',
                                            position: 'relative',
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
