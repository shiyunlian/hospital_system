import axios from "axios";
import Axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';

/****************************************************************************************
 * Create a file for editing a insurance and create stateful component addinsurance
 *****************************************************************************************/

const EditInsurance= () => {
    let history = useHistory();
    const [insurance, setInsurance] = useState({
            patientID: '',
            insuranceID: '',
            insuranceNumber: '',
            name: '',
            phone: '',
            address: ''
    });

   const { patientID, insuranceID, insuranceNumber, name, phone, address} = insurance;

   const onInputChange = e => {
       setInsurance({ ...insurance, [e.target.name]: e.target.value });
   };

   useEffect(() => {
       loadInsurances();
   }, []);

   const onSubmit = async e => {
    e.preventDefault();
    await Axios.post("http://localhost:8000/insurances", insurance);
    history.push("/insurances");
};

//get edit insurance information and post to db.json
   const loadInsurances  = async () =>
   {
       const result = await axios.get('http://localhost:8000/insurances/${insurance.id}');
       setInsurance(result.data);
   };


    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit A insurance</h2>
                    <form onSubmit={e => onSubmit(e)}>

                    <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter patient ID"
                                name="patientID"
                                value={patientID}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>

                    <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Insurance ID"
                                name="insuranceID"
                                value={insuranceID}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Insurance Numer"
                                name="insuranceNumber"
                                value={insuranceNumber}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>
                
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Insurance Name"
                                name="name"
                                value={name}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>

                        <div class="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Insurance Phone Number"
                                name="phone"
                                value={phone}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>

                        <div class="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Insurance Address"
                                name="address"
                                value={address}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>

                       
                        <button className="btn btn-primary btn-block">Update insurance</button>
            </form>
            </div>
        </div>
    
        
    )
};

export default EditInsurance;