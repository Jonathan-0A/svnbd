import React, { useState, useEffect } from 'react';
import { Box, ThemeProvider, Link, Typography, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { theme } from '../Data/theme';
import CircularProgress from '@mui/material/CircularProgress';
import DrawerAppBar from './DrawerAppBar';
import '../App.css';

export default function MemberDetails() {
    const [data, setData] = useState([]);
    const [currentData, setCurrentData] = useState(null);
    const location = useLocation();
    const currentId = location.pathname.split('/')[3];
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://script.google.com/macros/s/AKfycbzFZG1dJ-UVv8aXbLqO4XXO2xI154GL5UHIH7caGHZi08AGqIwpNkrtXUfq3a2JujWbVA/exec');
                // console.log('API Response:', res.data); // Log API response
                setData(res.data.content);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    useEffect(() => {
        // console.log('Data:', data); // Log data
        // console.log('Current ID:', currentId); // Log current ID
        if (data.length > 0) {
            const member = data.find((e) => e.id === currentId);
            // console.log('Current Data:', member); // Log current data
            setCurrentData(member);
        }
    }, [data, currentId]);
    if (!currentData) {
        return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', background: 'rgba(11, 11, 11, 0.25)' }}>
            <CircularProgress sx={{ color: '#5532bb' }} size={85} thickness={5} />
        </Box>
    }

    return (
        <ThemeProvider theme={theme}>
            <DrawerAppBar title='Info Details' />
            <Box sx={{height: '90vh', ml: '30px', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                {/* <div><b>Serial Id:</b> {currentData.id}</div> */}
                <div><b>DP Serial No:</b> {currentData.dp_serial}</div>
                <div><b>Family Code:</b> {currentData.fc}</div>
                <div><b>Name:</b> {currentData.name}</div>
                <div><b>Rittwik:</b> {currentData.rittwik}</div>
                <div><b>Address:</b> {currentData.address}</div>
                <div><b>Phone:</b> {currentData.phone}</div>
                <div><b>Adhaar No:</b> {currentData.adhaar}</div>
                <div><b>Pan Card No:</b> {currentData.pan}</div>
                <div><b>DP Status:</b> {currentData.dp_status}</div>
                <div><b>Dikshyarti:</b> {currentData.dikshyarti}</div>
                <div><b>Swastayani:</b> {currentData.swastayani}</div>
                <div><b>Innitiation Date:</b> {currentData.innitiation_date}</div>
            </Box>
        </ThemeProvider>
    );
}
