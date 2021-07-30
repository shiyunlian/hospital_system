import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useHistory } from 'react-router-dom';


const Patient = () => {
    let history = useHistory();
    const [patient, setPatient] = useState([]);
    /*
    const [patient, setPatient] = useState({
        patientID: "",
        name: "",
        gender: "",
        dob: "",
        diagnosis: "",
        hospitalized_date: "",
        discharged_date: "",
        bill: "",
        wardID: "",
        insuranceID: ""
    });
    */


    const { id } = useParams();

    const { patientID, firstname, lastname, gender, dob, diagnosis, hospitalized_date, wardID, discharged_date, bill, insuranceID} = patient;

    useEffect(() => {
        loadPatient();
    }, []);

    //load all patient information
    const loadPatient = async () =>{
        const result = await axios.get('http://localhost:8000/patients/${id}');
        setPatient(result.data.reverse());
    };


    return (
        <div className="container">
            <Link className="btn btn-primary" to="/patients"> 
            back to Home
            </Link>
            <h1 className="display-4"> Patient </h1>
            <hr />
            

            <ul className="list-group w-50">
           
            <li className="list-group-item">patientID: {patient.patientID}</li>
                <li className="list-group-item">name: {patient.name}</li>
                <li className="list-group-item">gender: {patient.gender}</li>
                <li className="list-group-item">dob: {patient.dob}</li>
                <li className="list-group-item">diagnosis: {patient.diagnosis}</li>
                <li className="list-group-item">hospitalized_date: {patient.hospitalized_date}</li>
                <li className="list-group-item">discharged_date: {patient.discharged_date}</li>
                <li className="list-group-item">bill: {patient.bill}</li>
                <li className="list-group-item">wardID: {patient.wardID}</li>
                <li className="list-group-item">insuranceID: {patient.insuranceID}</li>
            
                
            </ul>
        </div>
    );
};

export default Patient;