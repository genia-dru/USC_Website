// import * as React from 'react';
import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchBar from 'material-ui-search-bar';

function createData( name, position, resources) {
  return { name, position, resources };
}

const dataRows = [
  createData('Viterbi', 'Researcher', 'housing'),
  createData('Marshall', 'Professor', 'lab'),
  createData('Viterbi', 'Professor', 'ho'),
  createData('Marshall', 'Graduate', 'aef'),
  createData('Viterbi', 'Staff', 'c'),
  createData('Marshall', 'Prof', 'hel'),
  createData('Viterbi', 'Lead', 'pet'),
  createData('Marshall', 'SWE', 'spin'),
  createData('Viterbi', 'Prof', 'food'),
  createData('Marshall', 'Graduate', 'money'),
  createData('Viterbi', 'Researcher', 'funds'),
  createData('Marshall', 'Researcher', 'help'),

];

const DataTable = () => {

  //SEACH FUNCTION
  const [rows, setRows] = useState(dataRows);
  const [searched, setSearched] = useState("");

  const requestSearch = (searchedVal) => {
    const filteredRows = dataRows.filter((row) => {
      return Object.keys(row).some((key) =>
        row[key].toLowerCase().includes(searchedVal)
      );
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  return (
    <Paper sx={{ boxShadow: "none", minHeight: 500 }}>

    <SearchBar class="searchbar"
          value={searched}
          onChange={(search) => requestSearch(search)}
          onCancelSearch={() => cancelSearch()}
    />
    <br></br>

    <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
      <Table  stickyHeader>

        <TableHead>
          <TableRow class="table-heading">
            <TableCell align="left" sx={{color: "white", background: "#900"}}>Position</TableCell>
            <TableCell align="left" sx={{color: "white", background: "#900"}}>School/Department</TableCell>
            <TableCell align="left" sx={{color: "white", background: "#900"}}>Resources Available</TableCell>
          </TableRow>
        </TableHead>

        <TableBody class="table-body" >
          {rows.map((row) => (
            <TableRow
              key={row.resources}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.position}</TableCell>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="left">{row.resources}</TableCell>

            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
    </Paper>
  );
}

export default DataTable;