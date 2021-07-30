import Axios from 'axios';
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

/****************************************************************************************
 * Create a file for adding a ward and create stateful component AddWard
 *****************************************************************************************/

const AddWard = () => {
    let history = useHistory();
    const [ward, setWard] = useState({
        wardID: '',
        bedNumber: '',
        patientId: ''
    });
    
   const { wardID, bedNumber, patientId} = ward;

   const onInputChange = e => {
       setWard({ ...ward, [e.target.name]: e.target.value });
   };

   //post add ward record to db.json
   const onSubmit = async e => {
       e.preventDefault();
       await Axios.post("http://localhost:8000/wards", ward);
       history.push("/wards");
   };


    return(
        <div className="container bg-light">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A ward</h2>
                    <form onSubmit={e => onSubmit(e)}>

                    <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter ward ID"
                                name="wardID"
                                value={wardID}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>
                
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Bed Number"
                                name="bedNumber"
                                value={bedNumber}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Patient ID"
                                name="patientId"
                                value={patientId}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>

                        
                        <button className="btn btn-primary btn-block">Add Ward</button>
            </form>
            </div>
        </div>
    
    
        
    )
};

export default AddWard;