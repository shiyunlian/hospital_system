import React, { Component } from 'react'
//import PatientService from '../services/PatientService';
import PatientService from './PatientService';
import { Route , withRouter} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class CreatePatientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            patientID: '',
            name: '',
            gender: '',
            dob: '',
            diagnosis: '',
            hospitalized_date: '',
            ward: '',
            discharged_date: '',
            bill: ''
         
        }
        this.changePatientIdHandler = this.changePatientIdHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeDOBHandler = this.changeDOBHandler.bind(this);
        this.changeDiagnosisHandler = this.changeDiagnosisHandler.bind(this);
        this.changeHospitalized_dateHandler = this.changeHospitalized_dateHandler.bind(this);
        this.changeWardHandler = this.changeWardHandler.bind(this);
        this.changeDischarged_dateHandler = this.changeDischarged_dateHandler.bind(this);
        this.changeBillHandler = this.changeBillHandler.bind(this);  
    }

    componentDidMount() {
        if(this.state.id === '_add'){
            return
        }else{
            PatientService.getPatientById(this.state.id).then( (res) =>{
                let patient = res.data;
                this.setState(
                    {
                        patientID: patient.patientID,
                        name: patient.name,
                        gender: patient.gender,
                        dob: patient.dob,
                        diagnosis: patient.diagnosis,
                        hospitalized_date: patient.hospitalized_date,
                        ward: patient.ward,
                        discharged_date: patient.discharged_date,
                        bill: patient.bill
                    });
            });
        }
    }

    saveOrUpdatePatient = (e) => {
        e.preventDefault();
        let patient = { 
            patientID: this.state.patientID,
            name = this.state.name,
            gender = this.state.gender,
            dob = this.state.dob,
            diagnosis = this.state.diagnosis,
            hospitalized_date = this.state.hospitalized_date,
            ward = this.state.ward,
            discharged_date = this.state.discharged_date,
            bill = this.state.bill
        }
        console.log('patient => ' + JSON.stringify(patient));

        if(this.state.id === '_add'){
            PatientService.createPatient(patient).then(res => {
                this.props.history.push('/patients');
            });
        }else {
            PatientService.updatePatient(patient, this.state.id).then(res => {
                this.props.history.push('/patients');
            });
        }
    }

    changePatientIdHandler = (event) => {
        this.setState({
            patientID: event.target.value
        });
    }

    changeNameHandler = (event) => {
        this.setState({
            name: event.targer.value
        });
    }

    changeGenderHandler = (event) => {
        this.setState({
            gender: event.target.value
        });
    }

    changeDOBHandler = (event) => {
        this.setState({
            dob: event.targer.value
        });
    }
    changeDiagnosisHandler = (event) => {
        this.setState({
            diagnosis: event.target.value
        });
    }

    changeHospitalized_dateHandler = (event) => {
        this.setState({
           hospitalized_date: event.targer.value
        });
    }

    changeWardHandler = (event) => {
        this.setState({
            ward: event.target.value
        });
    }

    changeDischarged_dateHandler = (event) => {
        this.setState({
            discharged_date: event.targer.value
        });
    }

    changeBillHandler = (event) => {
        this.setState({
            bill: event.targer.value
        });
    }

    cancel(){
        this.props.history.push('/patients');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Patient</h3>
        }else{
            return <h3 className="text-center">Update Patient</h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                    <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Patient ID: </label>
                                            <input placeholder="Patient ID" name="patientID" className="form-control"
                                            value={this.state.patientID} onChange={this.changePatientIdHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Name" name="name" className="form-control"
                                            value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Gender: </label>
                                            <input placeholder="Gender" name="gender" className="form-control"
                                            value={this.state.gender} onChange={this.changeGenderHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> DOB: </label>
                                            <input placeholder="DOB" name="dob" className="form-control"
                                            value={this.state.dob} onChange={this.changeDOBHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Diagnosis: </label>
                                            <input placeholder="Diagnosis" name="diagnosis" className="form-control"
                                            value={this.state.diagnosis} onChange={this.changeDiagnosisHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Patient ID: </label>
                                            <input placeholder="Hospitalized Date" name="hospitalized_date" className="form-control"
                                            value={this.state.hospitalized_date} onChange={this.changeHospitalized_dateHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Ward: </label>
                                            <input placeholder="Ward" name="ward" className="form-control"
                                            value={this.state.ward} onChange={this.changeWardHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Discharged Date: </label>
                                            <input placeholder="Discharged Date" name="discharged_date" className="form-control"
                                            value={this.state.discharged_date} onChange={this.changeDischarged_dateHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Bill: </label>
                                            <input placeholder="Bill" name="bill" className="form-control"
                                            value={this.state.bill} onChange={this.changeBillHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}> Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>
            </div>
        )
    }

}

export default CreatePatientComponent