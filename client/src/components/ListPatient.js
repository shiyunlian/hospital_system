import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavbarBrand, Container } from "reactstrap";

/***************************************************************
 Create a file for showing patient list and delete records
 * ************************************************************/

const url = "http://localhost:4000/patients";

const Patient = ({ searchValue }) => {
  const [patients, setPatient] = useState([]);

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = () => {
    axios.get(url).then((response) => {
      setPatient(response.data);
    });
  };

  const deletePatient = (id) => {
    axios.delete(`${url}/${id}`).then(() => {
      alert("Patient record deleted!");
      loadPatients();
    });
  };

  //filter rows to only include search value
  const search = (data, value) => {
    console.log("VALUE: " + value);
    //if value is empty, just return all data
    if (value === "") {
      return data;
    }
    //check if the value is a number or string, if it is a number search by id, if string search by name
    if (!isNaN(value)) {
      return data.filter((row) => {
        return row.PATIENTID.toString().includes(value);
      });
    } else {
      return data.filter((row) => {
        return (
          row.FIRSTNAME.toLowerCase().includes(value.toLowerCase()) ||
          row.LASTNAME.toLowerCase().includes(value.toLowerCase())
        );
      });
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Patient Information</h1>
        <Navbar color="dark" dark>
          <Container>
            <NavbarBrand href="/patients">Patient List</NavbarBrand>
            <Nav>
              <Link className="btn btn-primary" to="/patients/add">
                Add Patient
              </Link>
            </Nav>
          </Container>
        </Navbar>
        <div className="row"></div>
        <br></br>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Number</th>
              <th scope="col">Patient ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Gender</th>
              <th scope="col">DOB</th>
              <th scope="col">Diagnosis</th>
              <th scope="col">Hospitalized Date</th>
              <th scope="col">Discharged Date</th>
              <th scope="col">Bill ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {search(patients, searchValue).map((patient, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{patient.PATIENTID}</td>
                <td>{patient.FIRSTNAME}</td>
                <td>{patient.LASTNAME}</td>
                <td>{patient.DOB}</td>
                <td>{patient.GENDER}</td>
                <td>{patient.DIAGNOSIS}</td>
                <td>{patient.HOSPITALIZEDDATE}</td>
                <td>{patient.DISCHARGEDDATE}</td>
                <td>{patient.BILLID}</td>
                <td>
                  <Link
                    class="btn btn-primary mr-2"
                    to={`/patients/${patient.PATIENTID}`}
                  >
                    View
                  </Link>

                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/patients/${patient.PATIENTID}`}
                  >
                    Edit
                  </Link>

                  <Link
                    class="btn btn-danger"
                    onClick={() => deletePatient(patient.PATIENTID)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Patient;
