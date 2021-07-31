import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Link as NavLink } from "react-router-dom";

import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";

const url = "http://localhost:8090/wards";
/***************************************************************
 Create a file for showing Ward list and delete records
 * ************************************************************/
const Ward = () => {
  const [wards, setWard] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setWard(response.data);
    });
  }, []);

  if (!wards) return null;


  return (
    <div className="container">
      <div className="py-4">
        <h1>Ward Information</h1>
        <Navbar color="dark" dark>
          <Container>
            <NavbarBrand href="/wards">Ward List</NavbarBrand>
          </Container>
        </Navbar>
        <div className="row"></div>
        <br></br>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Number</th>
              <th scope="col">Ward ID</th>
              <th scope="col">Bed Number</th>
              <th scope="col">Patient ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {wards.map((ward, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{ward.WARDID}</td>
                <td>{ward.BEDID}</td>
                <td>{ward.PATIENTID}</td>
                <td>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={"/wards/edit/${ward.WARDID}"}
                  >
                    Edit
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

export default Ward;
