import axios from "axios";
import Axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';

/****************************************************************************************
 * Create a file for editing a ward and create stateful component addward
 *****************************************************************************************/

 const url = "http://localhost:8090/wards";

const EditWard= () => {
    let history = useHistory();
    const [ward, setWard] = useState({
        WARDID: '',
        BEDID: '',
        PATIENTID: ''
    });
    
   const { WARDID, BEDID, PATIENTID} = ward;


   const onInputChange = e => {
       setWard({ ...ward, [e.target.name]: e.target.value });
   };

   /*
   const onSubmit = e => {
    e.preventDefault();
    axios.post(url, ward)
    .then((response) => {
       setWard(response.data);
     
    });
    
    history.push("/wards");
    };
    */

    React.useEffect(() => {
        axios.get('${url}/{WARDID}').then((response) => {
          setWard(response.data);
        });
    }, []);

      

        const onSubmit = e => {
            e.preventDefault();
            axios.put('${url}/{WARDID}', ward)
            .then((response) => {
            setWard(response.data);
            });
        
        history.push("/wards");
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
                                name="WARDID"
                                value={WARDID}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>
                
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Bed Number"
                                name="BEDID"
                                value={BEDID}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>

                        <div class="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Patient ID"
                                name="PATIENTID"
                                value={PATIENTID}
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