import Axios from 'axios';
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

/****************************************************************************************
 * Create a file for adding a Pharmacy and create stateful component addPharmacy
 *****************************************************************************************/

const AddPharmacy = () => {
    let history = useHistory();
    const [pharmacy, setPharmacy] = useState({
            pharmacyID: '',
            name: '',
            address: '',
         
    });

   const { pharmacyID, name, address} = pharmacy;

   const onInputChange = e => {
       setPharmacy({ ...pharmacy, [e.target.name]: e.target.value });
   };

   //post add Pharmacy record to db.json
   const onSubmit = async e => {
       e.preventDefault();
       await Axios.post("http://localhost:8000/pharmacys", pharmacy);
       history.push("/pharmacys");
   };


    return(
        <div className="container bg-light">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A Pharmacy</h2>
                    <form onSubmit={e => onSubmit(e)}>

                    <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Pharmacy ID"
                                name="pharmacyID"
                                value={pharmacyID}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>
                
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Pharmacy Name"
                                name="name"
                                value={name}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>

                        <div class="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Pharmacy Address"
                                name="address"
                                value={address}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>  
                        <button className="btn btn-primary btn-block">Add Pharmacy</button>
            </form>
            </div>
        </div>
    
    
        
    )
};

export default AddPharmacy;