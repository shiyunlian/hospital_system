import axios from 'axios';
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

/****************************************************************************************
 * Create a file for adding a patient and create stateful component addPatient
 *****************************************************************************************/
const url = "http://localhost:8090/patients";
const AddPatient = () => {
    let history = useHistory();
    const [patient, setPatient] = useState({
            PATIENTID: '',
            FIRSTNAME: '',
            LASTNAME: '',
            DOB: '',
            GENDER: '',
            DIAGNOSIS: '',
            HOSPITALIZEDDATE: '',
            DISCHARGEDDATE: '',
            BILLID: ''
    });


   const { PATIENTID, FIRSTNAME, LASTNAME, DOB, GENDER, DIAGNOSIS, HOSPITALIZEDDATE, DISCHARGEDDATE, BILLID} = patient;

   const onInputChange = e => {
       setPatient({ ...patient, [e.target.name]: e.target.value });
   };

   React.useEffect(() => {
    axios.get('${url}/{PATIENTID}').then((response) => {
      setPatient(response.data);
    });
    }, []);

  const onSubmit = e => {
    e.preventDefault();
    axios.post(url, patient)
    .then((response) => {
       setPatient(response.data);
     
    });
    
    history.push("/patients");
    };


    return(
        <div className="container bg-light">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A Patient</h2>
                    <form onSubmit={e => onSubmit(e)}>

                    <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Patient ID"
                                name="PATIENTID"
                                value={PATIENTID}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>
                
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Patient First Name"
                                name="FIRSTNAME"
                                value={FIRSTNAME}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Patient Last Name"
                                name="LASTNAME"
                                value={LASTNAME}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>

                        <div class="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Patient DOB"
                                name="DOB"
                                value={DOB}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>

                        <div class="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Patient GENDER"
                                name="GENDER"
                                value={GENDER}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>               

                        <div class="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Patient DIAGNOSIS"
                                name="DIAGNOSIS"
                                value={DIAGNOSIS}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>

                        <div class="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Patient Hospitalized Date"
                                name="HOSPITALIZEDDATE"
                                value={HOSPITALIZEDDATE}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>

                        <div class="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Patient Discharged Date"
                                name="DISCHARGEDDATE"
                                value={DISCHARGEDDATE}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>

                        <div class="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Patient BILLID"
                                name="BILLID"
                                value={BILLID}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>
   
                        <button className="btn btn-primary btn-block">Add Patient</button>
            </form>
            </div>
        </div>
    
    
        
    )
};

export default AddPatient;