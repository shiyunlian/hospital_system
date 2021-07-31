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
function createData(id, name, address) {
  return {
    id,
    name,
    address,
  };
}

const rows = [
  createData(1, "Pharmacy 1", "SJ"),
  createData(2, "Pharmacy 2", "SJ"),
  createData(3, "Pharmacy 3", "SJ"),
];

export default function PharmacyTable() {
  return (
    <>
      <Table size="large">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <Typography variant="h6">Pharmacy Number</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6">Pharmacy Name</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6">Pharmacy Address</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
