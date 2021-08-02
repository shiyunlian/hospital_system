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
 Create a file for showing insurance list and delete records
 * ************************************************************/
const Insurance = () => {
    const [insurances, setInsurance] = useState([]);

    useEffect(() => {
        loadInsurances();
    }, []);

    //Get request using Axios http
    const loadInsurances = async () => {
        const result = await axios.get("http://localhost:8000/insurances");
        setInsurance(result.data.reverse());
    };

    //delete insurance records using axios http
    const deleteInsurance = async id => {
        await axios.delete('http://localhost:8000/insurances/' + id);
        loadInsurances();
    };


    return  ( 
        <div className="container" >
            <div className="py-4">
                <h1>Insurance Information</h1>
                <Navbar color="dark" dark>
                    <Container>
                    <NavbarBrand href="/insurances">Insurance List</NavbarBrand>
            
                    </Container>

                </Navbar>
                <div className = "row">
                 
                 </div>
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
                        {
                            insurances.map((insurance, index) => (
                                <tr>
                                    <th scope="row">{index+1}</th>
                                  
                                    <td>{insurance.insuranceID}</td>
                                 
                                    <td>{insurance.name}</td>
                                    <td>{insurance.phone}</td>
                                    <td>{insurance.address}</td>

                                </tr>                              
                            ) )
                        }
                    </tbody>
                    </table>            
            </div>
        </div> 
    );
};

export default Insurance;