import  React, { useState, useEffect }  from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import {Link as NavLink} from "react-router-dom";

import { Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container
} from 'reactstrap';

/***************************************************************
 Create a file for showing ward list and delete records
 * ************************************************************/
const Ward = () => {
    const [wards, setWard] = useState([]);

    useEffect(() => {
        loadWards();
    }, []);

    //Get request using Axios http
    const loadWards = async () => {
        const result = await axios.get("http://localhost:8000/wards");
        setWard(result.data.reverse());
    };

 

    return  (  
        <div className="container" >
            <div className="py-4">
                <h1>ward Information</h1>
                <Navbar color="dark" dark>
                    <Container>
                    <NavbarBrand href="/wards">Ward List</NavbarBrand>
            
                    </Container>

                </Navbar>
                <div className = "row">
                 
                 </div>
                 <br></br>

                <table class="table border shadow">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Number</th>
                            <th scope="col">ward ID</th>
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
                                    <td>{ward.wardId}</td>
                                    <td>{ward.bedNumber}</td>
                                    <td>{ward.patientId}</td>
                                    <td>
                                      

                                        <Link class="btn btn-outline-primary mr-2" 
                                            to={'/wards/edit/${ward.id}'}>Edit</Link>

                                

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

export default Ward;