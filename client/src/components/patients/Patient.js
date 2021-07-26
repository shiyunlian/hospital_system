import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from "axios";


const Patient = () => {
    const [patient, setPatient] = useState({
        patientID: "",
        name: "",
        gender: "",
        dob: "",
        diagnosis: "",
        hospitalized_date: "",
        ward: "",
        discharged_date: "",
        bill: ""
    });

    const { id } = useParams();

    useEffect(() => {
        loadPatient();
    }, []);

    const loadPatient = async () =>{
        const res = await axios.get('http://localhost:8000/patients/${id}');
        setPatient(res.data);
    };


    return (
        <div className="container">
            <Link className="btn btn-primary" to="/patients"> 
            back to Home
            </Link>
            <h1 className="display-4"> Patient ID: {id}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">patientID: {patient.patientID}</li>
                <li className="list-group-item">name: {patient.name}</li>
                <li className="list-group-item">gender: {patient.gender}</li>
                <li className="list-group-item">dob: {patient.dob}</li>
                <li className="list-group-item">diagnosis: {patient.diagnosis}</li>
                <li className="list-group-item">hospitalized_date: {patient.hospitalized_date}</li>
                <li className="list-group-item">ward: {patient.ward}</li>
                <li className="list-group-item">discharged_date: {patient.discharged_date}</li>
                <li className="list-group-item">bill: {patient.bill}</li>
            </ul>
        </div>
    );
};

export default Patient;