import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Link as NavLink } from "react-router-dom";

import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";

/***************************************************************
 Create a file for showing patient list and delete records
 * ************************************************************/

const url = "http://localhost:8090/patients";

const Patient = () => {
  const [patients, setPatient] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setPatient(response.data);
    });
  }, []);

  if (!patients) return null;

  /*
    useEffect(() => {
        loadPatients();
    }, []);
    */

  //Get request using Axios http
  /*
    const loadPatients = async () => {
        const result = await axios.get("http://localhost:8000/patients");
        setPatient(result.data.reverse());
    };
    */

  //delete patient records using axios http
  /*
    const deletePatient = async id => {
        await axios.delete('http://localhost:8000/patients/' + id);
        loadPatients();
    };
    */

  const deletePatient = (id) => {
    axios.delete(`${url}/${id}`).then(() => {
      alert("Patient record deleted!");
    });
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

        <table class="table border shadow">
          <thead class="thead-dark">
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
            {patients.map((patient, index) => (
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
                    to={"/patients/view/${patient.PATIENTID}"}
                  >
                    View
                  </Link>

                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={"/patients/edit/${patient.PATIENTID}"}
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
