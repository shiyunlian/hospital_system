import Axios from 'axios';
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

/****************************************************************************************
 * Create a file for adding a patient and create stateful component addPatient
 *****************************************************************************************/

const AddPatient = () => {
    let history = useHistory();
    const [patient, setPatient] = useState({
            patientID: '',
            firstname: '',
            lastname: '',
            gender: '',
            dob: '',
            diagnosis: '',
            hospitalized_date: '',
            discharged_date: '',
            bill: '',
            wardID: '',
            insuranceID: ''
    });

   const { patientID, firstname, lastname, gender, dob, diagnosis, hospitalized_date, wardID, discharged_date, bill, insuranceID} = patient;

   const onInputChange = e => {
       setPatient({ ...patient, [e.target.name]: e.target.value });
   };

   //post add patient record to db.json
   const onSubmit = async e => {
       e.preventDefault();
       await Axios.post("http://localhost:8000/patients", patient);
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
                                name="patientID"
                                value={patientID}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>
                
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Patient First Name"
                                name="firstname"
                                value={firstname}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Patient Last Name"
                                name="lastname"
                                value={lastname}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>

                        <div class="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Patient Gender"
                                name="gender"
                                value={gender}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>

                        <div class="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Patient DOB"
                                name="dob"
                                value={dob}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>

                        <div class="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Patient Diagnosis"
                                name="diagnosis"
                                value={diagnosis}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>

                        <div class="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Patient Hospitalized Date"
                                name="hospitalized_date"
                                value={hospitalized_date}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>

                        <div class="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Patient Discharged Date"
                                name="discharged_date"
                                value={discharged_date}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>

                        <div class="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Patient Bill"
                                name="bill"
                                value={bill}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>

                        <div class="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Patient wardID"
                                name="wardID"
                                value={wardID}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>

                        <div class="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Patient insuranceID"
                                name="insuranceID"
                                value={insuranceID}
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