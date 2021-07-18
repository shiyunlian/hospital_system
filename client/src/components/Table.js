import React from "react";
import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

// Generate Order Data
function createData(id, hospitalized_date, name, address, diagnosis, amount) {
  return { id, hospitalized_date, name, address, diagnosis, amount };
}

const rows = [
  createData(0, "16 Mar, 2021", "Elvis Presley", "US", "COVID-19", 111.11),
  createData(1, "16 Mar, 2021", "Paul McCartney", "US", "US", 111.11),
  createData(2, "16 Mar, 2021", "Tom Scholz", "Boston, MA", "COVID-19", 111.11),
];

export default function PatientRecords() {
  return (
    <>
      <Table size="large">
        <TableHead>
          <TableRow>
            <TableCell>Patient ID</TableCell>
            <TableCell>Hospitalized date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Diagnosis</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.hospitalized_date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.diagnosis}</TableCell>
              <TableCell align="right">${row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
