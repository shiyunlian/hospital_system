import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";

// Generate Order Data
function createData(id, bedNum, patientName) {
  return {
    id,
    bedNum,
    patientName,
  };
}

const rows = [
  createData(1, 10, "John Doe"),
  createData(2, 10, ""),
  createData(3, 10, "John Doe"),
];

export default function WardTable() {
  return (
    <>
      <Table size="large">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <Typography variant="h6">Ward Number</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6">Bed Number</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6">Patient Name</Typography>
            </TableCell>
            {/* <TableCell align="center">
              <Typography variant="h6">Managed by</Typography>
            </TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.bedNum}</TableCell>
              <TableCell align="center">{row.patientName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
