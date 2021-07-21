import React, { Component } from 'react'
import EmployeeService from '../services/PatientService'
import WardRecord from './WardRecord';

class ListPatientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                patients: []
        }
        this.addPatient = this.addPatient.bind(this);
        this.editPatient = this.editPatient.bind(this);
        this.deletePatient = this.deletePatient.bind(this);
    }

    deletePatient(id){
        PatientService.deletePatient(id).then( res => {
            this.setState({patients: this.state.patients.filter(patient => patient.id !== id)});
        });
    }
    viewPatient(id){
        this.props.history.push(`/view-patient/${id}`);
    }
    editPatient(id){
        this.props.history.push(`/add-patient/${id}`);
    }

    //Invokes the patient service calss method to fetch the patient from an API call
    //and populates the state variable patients
    componentDidMount(){
        PatientService.getPatients().then((res) => {
            this.setState({ patients: res.data});
        });
    }

    addPatient(){
        this.props.history.push('/add-patient/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Patient List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addPatient}> Add Patient</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Patient ID</th>
                                    <th> Name</th>
                                    <th> Gender</th>
                                    <th> Date of birth</th>
                                    <th>Diagnosis</th>
                                    <th>Hospitalized date</th>
                                    <th>Ward</th>
                                    <th>Discharged date</th>
                                    <th>Bill</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.patients.map(
                                        patient => 
                                        <tr key = {patient.id}>
                                             <td> { patient.patientID} </td>   
                                             <td> {patient.name}</td>
                                             <td> {patient.gender}</td>
                                             <td> {patient.dob}</td>
                                             <td> {patient.diagnosis}</td>
                                             <td> {patient.hospitalized_date}</td>
                                             <td> {patient.ward}</td>
                                             <td> {patient.discharged_date}</td>
                                             <td> {patient.bill}</td>
                                             <td>
                                                 <button onClick={ () => this.editPatient(patient.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletePatient(patient.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(patient.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListPatientComponent