import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Link as NavLink } from "react-router-dom";

import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";
/***************************************************************
 Create a file for showing Ward list and delete records
 * ************************************************************/

const url = "http://localhost:8090/wards";

const Ward = () => {
  const [wards, setWard] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setWard(response.data);
    });
  }, []);

  if (!wards) return null;
  // useEffect(() => {
  //   loadWards();
  // }, []);

  // //Get request using Axios http
  // const loadWards = async () => {
  //   const result = await axios.get("http://localhost:8080/wards");
  //   setWard(result.data.reverse());
  // };

  // //delete Ward records using axios http
  // const deleteWard = async id => {
  //     await axios.delete('http://localhost:8000/wards/' + id);
  //     loadWards();
  // };

  const deleteWard = (id) => {
    axios.delete(`${url}/${id}`).then(() => {
      alert("Ward record deleted!");
    });
  };

  const test = () => {
    console.log(wards);
  };

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
                        {
                            wards.map((ward, index) => (
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{ward.wardID}</td>
                                    <td>{ward.bedNumber}</td>
                                    <td>{ward.patientID}</td>
                                    <td>
                                        <Link class="btn btn-outline-primary mr-2" 
                                            to={'/wards/edit/${ward.id}'}>Edit</Link>

  return (
    <div className="container">
      <div className="py-4">
        <h1>Ward Information</h1>
        <Navbar color="dark" dark>
          <Container>
            <NavbarBrand href="/wards">Ward List</NavbarBrand>
            <Nav>
              <Link className="btn btn-primary" to="/wards/add">
                Add Ward
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
                    to={"/wards/edit/${ward.id}"}
                  >
                    Edit
                  </Link>

                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteWard(ward.WARDID)}
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

export default Ward;