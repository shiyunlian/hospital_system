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
 Create a file for showing pharmacy list and delete records
 * ************************************************************/
const Pharmacy = () => {
    const [pharmacys, setPharmacy] = useState([]);

    useEffect(() => {
        loadPharmacys();
    }, []);

    //Get request using Axios http
    const loadPharmacys = async () => {
        const result = await axios.get("http://localhost:8000/pharmacys");
        setPharmacy(result.data.reverse());
    };



    return  ( 
        <div className="container" >
            <div className="py-4">
                <h1>Pharmacy Information</h1>
                <Navbar color="dark" dark>
                    <Container>
                    <NavbarBrand href="/pharmacys">Pharmacy List</NavbarBrand>
                 
                    </Container>

                </Navbar>
                <div className = "row">
                 
                 </div>
                 <br></br>

                <table class="table border shadow">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Number</th>
                            <th scope="col">Pharmacy ID</th>
                            <th scope="col">Pharmacy Name</th>
                            <th scope="col">Pharmacy Address</th>
                
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pharmacys.map((pharmacy, index) => (
                                <tr key={index} >
                                    <th scope="row">{index+1}</th>
                                    <td>{pharmacy.pharmacyID}</td>
                                    <td>{pharmacy.name}</td>
                                    <td>{pharmacy.address}</td>

                                </tr>                              
                            ) )
                        }
                    </tbody>
                    </table>            
            </div>
        </div> 
    );
};

export default Pharmacy;