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
import IosShareIcon from '@mui/icons-material/IosShare';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@mui/material';
import { theme } from '../Data/theme';
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
  const [modalData, setModalData] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (data) => () => {
    setModalData(data);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper} id="tableContainer">
        <Table sx={{ minWidth: '100%', maxHeight: '70vh' }} id="table">
          <TableHead id="tableHead">
            <TableRow>
              <StyledTableCell align="left">Serial Id</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Address</StyledTableCell>
              <StyledTableCell align="left">Phone No</StyledTableCell>
              <StyledTableCell align="left">Family Code No</StyledTableCell>
              <StyledTableCell align="left">Pan Card No</StyledTableCell>
              <StyledTableCell align="left">Amount</StyledTableCell>
              <StyledTableCell align="left">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody id="tableBody" sx={{ background: 'rgba(10, 0, 20, 0.75)' }}>
            {tableData && tableData.length > 0 ? (
              tableData.map((e) => (
                <StyledTableRow key={e.id} onClick={handleOpen(e)} sx={{ cursor: 'pointer' }}>
                  <StyledTableCell data-title="Serial Id" align="left">{e.id}</StyledTableCell>
                  <StyledTableCell data-title="Name" align="left">{e.name}</StyledTableCell>
                  <StyledTableCell data-title="Address" align="left">{e.address}</StyledTableCell>
                  <StyledTableCell data-title="Phone No" align="left">{e.phone}</StyledTableCell>
                  <StyledTableCell data-title="Family Code No" align="left">{e.fc}</StyledTableCell>
                  <StyledTableCell data-title="Pan Card No" align="left">{e.pan}</StyledTableCell>
                  <StyledTableCell data-title="Amount" align="left">{e.amount}</StyledTableCell>
                  <StyledTableCell data-title="Actions" align="left">
                    <Tooltip title="Export" placement="top" arrow>
                      <Link to={`/deposit-info/member/${e.id}`}>
                        <IconButton style={{ color: '#8855ff' }}>
                          <IosShareIcon />
                        </IconButton>
                      </Link>
                    </Tooltip>
                  </StyledTableCell>
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
    </ThemeProvider>
  );
}
