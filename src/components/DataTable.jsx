import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@mui/material';
import { theme } from '../Data/theme';
import Modal from './Modal';
import '../App.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#666688',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: theme.palette.common.white,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function DataTable({ tableData }) {
  // const [copy, setCopy] = useState('Copy');
  const [modalData, setModalData] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (data) => () => {
    setModalData(data);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  // const handleCopy = (dp_serial) => () => {
  //   navigator.clipboard.writeText(dp_serial).then(() => {
  //     setCopy('Copied');
  //     setTimeout(() => {
  //       setCopy('Copy');
  //     }, 2000);
  //   });
  // };

  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper} id="tableContainer">
        <Table sx={{ minWidth: '100%', maxHeight: '70vh' }} id="table">
          <TableHead id="tableHead">
            <TableRow>
              <StyledTableCell align="left">Serial Id</StyledTableCell>
              {/* <StyledTableCell align="left">DP Serial No</StyledTableCell> */}
              {/* <StyledTableCell align="left">Family Code</StyledTableCell> */}
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Rittwik's Name</StyledTableCell>
              <StyledTableCell align="left">DP Status</StyledTableCell>
              {/* <StyledTableCell align="left">Address</StyledTableCell> */}
              {/* <StyledTableCell align="left">Phone</StyledTableCell> */}
              {/* <StyledTableCell align="left">Aadhaar No</StyledTableCell>
              <StyledTableCell align="left">Pan No</StyledTableCell> */}
              {/* <StyledTableCell align="left">Dikshyarti</StyledTableCell> */}
              {/* <StyledTableCell align="left">Swastayani</StyledTableCell> */}
              <StyledTableCell align="left">Initiation Date</StyledTableCell>
              <StyledTableCell align="left">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody id="tableBody" sx={{ background: 'rgba(10, 0, 20, 0.75)' }}>
            {tableData && tableData.length > 0 ? (
              tableData.map((e) => (
                <StyledTableRow key={e.id} onClick={handleOpen(e)} sx={{ cursor: 'pointer' }}>
                  <StyledTableCell data-title="Serial Id" align="left">{e.id}</StyledTableCell>
                  {/* <StyledTableCell data-title="DP Serial No" align="left">
                    <Tooltip title={copy} placement="top" arrow>
                      <Box className="dp_serial" onClick={handleCopy(e.dp_serial)}>
                        {e.dp_serial}
                      </Box>
                    </Tooltip>
                  </StyledTableCell> */}
                  {/* <StyledTableCell data-title="Family Code" align="left">{e.fc}</StyledTableCell> */}
                  <StyledTableCell data-title="Name" align="left">{e.name}</StyledTableCell>
                  <StyledTableCell data-title="Rittwik Name" align="left">{e.rittwik}</StyledTableCell>
                  <StyledTableCell data-title="DP Status" align="left">
                    <Box>{e.dp_status}</Box>
                  </StyledTableCell>
                  {/* <StyledTableCell data-title="Address" align="left">{e.address}</StyledTableCell> */}
                  {/* <StyledTableCell data-title="Phone" align="left">{e.phone}</StyledTableCell> */}
                  {/* <StyledTableCell data-title="Adhaar Number" align="left">{e.adhaar}</StyledTableCell>
                  <StyledTableCell data-title="Pan Card Number" align="left">{e.pan}</StyledTableCell> */}
                  {/* <StyledTableCell data-title="Dikshyarti" align="left">{e.dikshyarti}</StyledTableCell> */}
                  {/* <StyledTableCell data-title="Swastayani" align="left">{e.swastayani}</StyledTableCell> */}
                  <StyledTableCell data-title="Initiation Date" align="left">{(e.innitiation_date).toString().split('T')[0]}</StyledTableCell>
                  <StyledTableCell data-title="Actions" align="left">
                    <Tooltip title="Edit Details" placement="top" arrow>
                      <Link to={`/dikshyarti-info/member/${e.id}`}>
                        <IconButton style={{ color: '#8855ff' }}>
                          <ModeEditOutlineRoundedIcon />
                        </IconButton>
                      </Link>
                    </Tooltip>
                  </StyledTableCell>
                  <Button variant="contained" className="more-btn" onClick={handleOpen(e)}>More Details</Button>
                </StyledTableRow>
              ))
            ) : (
              <StyledTableRow>
                <StyledTableCell colSpan={13} align="left">
                  No data found.
                </StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={open} handleClose={handleClose} data={modalData} />
    </ThemeProvider>
  );
}
