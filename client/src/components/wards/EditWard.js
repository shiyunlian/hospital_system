import axios from "axios";
import Axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';

/****************************************************************************************
 * Create a file for editing a ward and create stateful component addward
 *****************************************************************************************/

const EditWard= () => {
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

   useEffect(() => {
       loadward();
   }, []);

   const onSubmit = async e => {
    e.preventDefault();
    await Axios.post("http://localhost:8000/wards", ward);
    history.push("/wards");
};

//get edit ward information and post to db.json
   const loadward  = async () =>
   {
       const result = await axios.get('http://localhost:8000/wards/${ward.id}');
       setWard(result.data);
   };


    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit A Ward</h2>
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

                        <div class="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Patient ID"
                                name="patientId"
                                value={patientId}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>

                       
                        <button className="btn btn-primary btn-block">Update Ward</button>
            </form>
            </div>
        </div>
    
        
    )
};

export default EditWard;