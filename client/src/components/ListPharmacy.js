import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navbar, NavbarBrand, Container } from "reactstrap";
const url = "http://localhost:4000/pharmacy";
/***************************************************************
 Create a file for showing pharmacy list and delete records
 * ************************************************************/
const Pharmacy = () => {
  const [pharmacys, setPharmacy] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setPharmacy(response.data);
    });
  }, []);

  if (!pharmacys) return null;

  return (
    <div className="container">
      <div className="py-4">
        <h1>Pharmacy Information</h1>
        <Navbar color="dark" dark>
          <Container>
            <NavbarBrand href="/pharmacys">Pharmacy List</NavbarBrand>
          </Container>
        </Navbar>
        <div className="row"></div>
        <br></br>

        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Number</th>
              <th scope="col">Pharmacy ID</th>
              <th scope="col">Pharmacy Name</th>
              <th scope="col">Business Hour</th>
            </tr>
          </thead>
          <tbody>
            {pharmacys.map((pharmacy, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{pharmacy.PHARMACYID}</td>
                <td>{pharmacy.NAME}</td>
                <td>{pharmacy.OPERATIONHOUR}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pharmacy;
