import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Link as NavLink } from "react-router-dom";

import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";

const url = "http://localhost:8080/wards";
/***************************************************************
 Create a file for showing Ward list and delete records
 * ************************************************************/
const Ward = () => {
  const [wards, setWard] = useState([]);

  useEffect(() => {
    axios.get(url).then((result) => {
      setWard(result.data);
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
      setWard(null);
    });
  };

  const test = () => {
    // console.log(wards);
    // for (let i = 0; i < wards.length; i++) {
    //   console.log(wards[i]);
    // }
    // console.log(JSON.stringify(wards));
    // wards.map(JSON.parse);
    // console.log(wards);
    // console.log(wards[0]);
    // wards.map((ward, index) => {
    //   console.log(ward.id);
    //   console.log(index);
    //   console.log(ward.wardId);
    //   console.log(ward.bedId);
    //   console.log(ward.patientId);
    // });
  };

  test();

  return (
    <div>
      <ul>
        {wards.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
    // <div className="container">
    //   <div className="py-4">
    //     <h1>Ward Information</h1>
    //     <Navbar color="dark" dark>
    //       <Container>
    //         <NavbarBrand href="/wards">Ward List</NavbarBrand>
    //         <Nav>
    //           <Link className="btn btn-primary" to="/wards/add">
    //             Add Ward
    //           </Link>
    //         </Nav>
    //       </Container>
    //     </Navbar>
    //     <div className="row"></div>
    //     <br></br>
    //     <table class="table border shadow">
    //       <thead class="thead-dark">
    //         <tr>
    //           <th scope="col">Number</th>
    //           <th scope="col">Ward ID</th>
    //           <th scope="col">Bed Number</th>
    //           <th scope="col">Patient ID</th>
    //           <th>Action</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {wards.map((ward, index) => (
    //           <tr key={ward.id}>
    //             <th scope="row">{index + 1}</th>
    //             <td>{ward.wardId}</td>
    //             <td>{ward.bedId}</td>
    //             <td>{ward.patientId}</td>

    //             {/* {wards.map((ward, index) => (
    //           <tr>
    //             <th scope="row">{index + 1}</th>
    //             <td>{ward.id}</td>
    //             <td>{ward.bedId}</td>
    //             <td>{ward.patientId}</td> */}
    //             <td>
    //               <Link
    //                 class="btn btn-outline-primary mr-2"
    //                 to={"/wards/edit/${ward.id}"}
    //               >
    //                 Edit
    //               </Link>

    //               <Link
    //                 class="btn btn-danger"
    //                 onClick={() => deleteWard(ward.id)}
    //               >
    //                 Delete
    //               </Link>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
  );
};

export default Ward;
