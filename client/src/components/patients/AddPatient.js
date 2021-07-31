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
            patientId: '',
            firstname: '',
            lastname: '',
            dob: '',
            gender: '',
            diagnosis: '',
            hospitalizedDate: '',
            dischargedDate: '',
            billId: ''
    });

   const { patientId, firstname, lastname, dob, gender, diagnosis, hospitalizedDate, dischargedDate, billId} = patient;

   const onInputChange = e => {
       setPatient({ ...patient, [e.target.name]: e.target.value });
   };

   React.useEffect(() => {
    axios.get('${url}/{patientId}').then((response) => {
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

   //post add patient record to db.json
   /*
   const onSubmit = async e => {
       e.preventDefault();
       await Axios.post("http://localhost:8000/patients", patient);
       history.push("/patients");
   };
   */


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
                                name="patientId"
                                value={patientId}
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
                                name="hospitalizedDate"
                                value={hospitalizedDate}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>

                        <div class="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Patient Discharged Date"
                                name="dischargedDate"
                                value={dischargedDate}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>

                        <div class="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Patient billId"
                                name="billId"
                                value={billId}
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