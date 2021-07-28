import axios from "axios";
import Axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';

/****************************************************************************************
 * Create a file for editing a Pharmacy and create stateful component addPharmacy
 *****************************************************************************************/

const EditPharmacy = () => {
    let history = useHistory();
    const { id } = useParams();
    const [pharmacy, setPharmacy] = useState({
        pharmacyID: '',
        name: '',
        address: ''
    });

    const { pharmacyID, name, address} = pharmacy;

   const onInputChange = e => {
       setPharmacy({ ...pharmacy, [e.target.name]: e.target.value });
   };

   useEffect(() => {
       loadPharmacy();
   }, []);

   const onSubmit = async e => {
    e.preventDefault();
    await Axios.post("http://localhost:8000/pharmacys", pharmacy);
    history.push("/pharmacys");
};

//get edit Pharmacy information and post to db.json
   const loadPharmacy  = async () =>
   {
       const result = await axios.get('http://localhost:8000/pharmacys/${pharmacy.id}');
       setPharmacy(result.data);
   };


    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit A Pharmacy</h2>
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

                       
                        <button className="btn btn-primary btn-block">Update Pharmacy</button>
            </form>
            </div>
        </div>
    
        
    )
};

export default EditPharmacy;