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
import { Link } from "react-router-dom";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import EditIcon from "@material-ui/icons/Edit";

// Generate Order Data
function createData(
  id,
  name,
  gender,
  dob,
  diagnosis,
  hospitalized_date,
  ward,
  address,
  amount
) {
  return {
    id,
    name,
    gender,
    dob,
    diagnosis,
    hospitalized_date,
    ward,
    address,
    amount,
  };
}

const rows = [
  createData(
    1,
    "John Doe",
    "M",
    "1980-1-1",
    "COVID-19",
    "7/1/2021",
    "1",
    "8/1/2021",
    111.11
  ),
  createData(
    2,
    "John Doe",
    "M",
    "1980-1-1",
    "COVID-19",
    "7/1/2021",
    "1",
    "8/1/2021",
    111.11
  ),
  createData(
    3,
    "John Doe",
    "M",
    "1980-1-1",
    "COVID-19",
    "7/1/2021",
    "1",
    "8/1/2021",
    111.11
  ),
];

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function PatientTable() {
  const classes = useStyles();

  return (
    <>
      <Table size="large">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <Typography variant="h6">Patient ID</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6">Name</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6">Gender</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6">Date of birth</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6">Diagnosis</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6">Hospitalized date</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6">Ward</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6">Discharged date</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6">Bill</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center" component={Link} to="/patientID">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.gender}</TableCell>
              <TableCell align="center">{row.dob}</TableCell>
              <TableCell align="center">{row.diagnosis}</TableCell>
              <TableCell align="center">{row.hospitalized_date}</TableCell>
              <TableCell align="center">{row.ward}</TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell align="center">${row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        variant="contained"
        color="primary"
        size="medium"
        className={classes.button}
        startIcon={<PersonAddIcon />}
      >
        Add a patient
      </Button>
      {/* <Button
        variant="contained"
        color="secondary"
        size="medium"
        className={classes.button}
        startIcon={<EditIcon />}
      >
        Edit a patient
      </Button> */}

      {/* <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button> */}
    </>
  );
}
