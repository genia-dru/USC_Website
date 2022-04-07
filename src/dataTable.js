// import * as React from 'react';
import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchBar from 'material-ui-search-bar';
import { Divider } from "@mui/material";

function createData(name, resources) {
  return { name, resources };
}

const dataRows = [
  createData('Viterbi', 'housing'),
  createData('Marshall', 'lab'),
  createData('Viterbi', 'ho'),
  createData('Marshall', 'aef'),
  createData('Viterbi', 'c'),
  createData('Marshall', 'hel'),
  createData('Viterbi', 'pet'),
  createData('Marshall', 'spin'),
  createData('Viterbi', 'food'),
  createData('Marshall', 'money'),
  createData('Viterbi', 'funds'),
  createData('Marshall', 'help'),

];

const DataTable = () => {
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
    <Paper sx={{ boxShadow: "none" }}>
    <SearchBar class="searchbar"
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
    />
    <br></br>
    <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
      <Table  stickyHeader>
        <TableHead>
          <TableRow class="table-heading">
            <TableCell align="left" sx={{color: "white", background: "#900"}}>School/Department:</TableCell>
            <TableCell align="left" sx={{color: "white", background: "#900"}}>Resources Available:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody class="table-body" >
          {rows.map((row) => (
            <TableRow
              key={row.resources}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
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