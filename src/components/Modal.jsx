import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    height: 'auto',
    bgcolor: 'var(--dark)',
    border: '2px solid #fff',
    boxShadow: 24,
    p: 3,
    borderRadius: '7px'
};

const ModalComponent = ({ open, handleClose, data }) => {
    return (
        <Modal
            keepMounted
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                <CancelTwoToneIcon
                    sx={{ position: 'absolute', float: 'right', cursor: 'pointer', top: '10px', right: '10px' }}
                    onClick={handleClose}
                />
                <Box id="keep-mounted-modal-title" variant="h6" component="h2" sx={{mt: 1}}>
                    {data ? data.name : 'No Data'}
                </Box>
                <Box id="keep-mounted-modal-description" sx={{ mt: 0.5 }}>
                    {data ? (
                        <>
                            <Box>Serial Id: {data.id}</Box>
                            <Box>DP Serial No: {data.dp_serial}</Box>
                            <Box>Family Code: {data.fc}</Box>
                            <Box>Rittwik's Name: {data.rittwik}</Box>
                            <Box>Address: {data.address}</Box>
                            <Box>Phone: {data.phone}</Box>
                            <Box>Aadhaar No: {data.adhaar}</Box>
                            <Box>Pan No: {data.pan}</Box>
                            <Box>DP Status: {data.dp_status}</Box>
                            <Box>Dikshyarti: {data.dikshyarti}</Box>
                            <Box>Swastayani: {data.swastayani}</Box>
                            <Box>Initiation Date: {data.innitiation_date}</Box>
                        </>
                    ) : 'No Data Available'}
                </Box>
            </Box>
        </Modal>
    );
};

export default ModalComponent;
