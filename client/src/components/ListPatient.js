import  React, { useState, useEffect }  from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import {Link as NavLink} from "react-router-dom";

import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container
} from 'reactstrap';

/***************************************************************
 Create a file for showing patient list and delete records
 * ************************************************************/
const Patient = () => {
    const [patients, setPatient] = useState([]);

    useEffect(() => {
        loadPatients();
    }, []);

    //Get request using Axios http
    const loadPatients = async () => {
        const result = await axios.get("http://localhost:8000/patients");
        setPatient(result.data.reverse());
    };

    //delete patient records using axios http
    const deletePatient = async id => {
        await axios.delete('http://localhost:8000/patients/' + id);
        loadPatients();
    };


    return  (  
        <div className="container" >
            <div className="py-4">
                <h1>Patient Information</h1>
                <Navbar color="dark" dark>
                    <Container>
                    <NavbarBrand href="/patients">Patient List</NavbarBrand>
                    <Nav>
                        <Link className="btn btn-primary" to ="/patients/add">Add Patient</Link>
                    </Nav>
                    </Container>

                </Navbar>
                <div className = "row">
                 
                 </div>
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
                            <th scope="col">Hospitalized_date</th>
                            <th scope="col">Discharged_date</th>
                            <th scope="col">Bill ($)</th>
                            <th scope="col">Ward ID </th>
                            <th scope="col">Insurance ID </th>
                            <th>Action</th>
          
                        </tr>
                    </thead>
                    <tbody>
                        {
                            patients.map((patient, index) => (
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{patient.patientID}</td>
                                    <td>{patient.firstname}</td>
                                    <td>{patient.lastname}</td>
                                    <td>{patient.gender}</td>
                                    <td>{patient.dob}</td>
                                    <td>{patient.diagnosis}</td>
                                    <td>{patient.hospitalized_date}</td>
                                    <td>{patient.discharged_date}</td>
                                    <td>{patient.bill}</td>
                                    <td>{patient.wardID}</td>
                                    <td>{patient.insuranceID}</td>
                                    <td>
                                        <Link class="btn btn-primary mr-2" 
                                            to={'/patients/view/${patient.id}'}>View</Link>

                                        <Link class="btn btn-outline-primary mr-2" 
                                            to={'/patients/edit/${patient.id}'}>Edit</Link>

                                        <Link class="btn btn-danger" 
                                            onClick={() => deletePatient(patient.id)}>Delete</Link>

                                    </td>
                                </tr>                              
                            ) )
                        }
                    </tbody>
                    </table>            
            </div>
        </div> 
    );
};

export default Patient;