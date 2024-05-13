import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Pagination } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

export default function UniversityTables({ universities }) {
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 5; 
  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedData = universities.slice(startIndex, endIndex);

  return (
    <>
      <TableContainer>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>S.No</StyledTableCell>
              <StyledTableCell align="center">University Name</StyledTableCell>
              <StyledTableCell align="center">Website</StyledTableCell>
              <StyledTableCell align="center">State</StyledTableCell>
              <StyledTableCell align="center">Country</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((university, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {startIndex + index + 1}
                </StyledTableCell>
                <StyledTableCell align="center">{university.name}</StyledTableCell>
                <StyledTableCell align="center">{university.website}</StyledTableCell>
                <StyledTableCell align="center">{university.state}</StyledTableCell>
                <StyledTableCell align="center">{university.country}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'center' }}>
        <Pagination count={Math.ceil(universities.length / itemsPerPage)} page={page} onChange={handleChange} />
      </Box>
    </>
  );
}
