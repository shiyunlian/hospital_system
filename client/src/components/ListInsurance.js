import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Link as NavLink } from "react-router-dom";

import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";

/***************************************************************
 Create a file for showing insurance list and delete records
 * ************************************************************/

const url = "http://localhost:4000/insurances";

const Insurance = () => {
  const [insurances, setInsurance] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setInsurance(response.data);
    });
  }, []);

  if (!insurances) return null;

  const deleteInsurance = (id) => {
    axios.delete(`${url}/${id}`).then(() => {
      alert("Insurance record deleted!");
    });
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Insurance Information</h1>
        <Navbar color="dark" dark>
          <Container>
            <NavbarBrand href="/insurances">Insurance List</NavbarBrand>
          </Container>
        </Navbar>
        <div className="row"></div>
        <br></br>

        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Number</th>
              <th scope="col">Insurance ID</th>
              <th scope="col">Insurance Name</th>
              <th scope="col">Insurance Phone</th>
              <th scope="col">Insurance Address</th>
            </tr>
          </thead>
          <tbody>
            {insurances.map((insurance, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{insurance.INSURANCEID}</td>
                <td>{insurance.NAME}</td>
                <td>{insurance.PHONENUM}</td>
                <td>{insurance.ADDRESS}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Insurance;
