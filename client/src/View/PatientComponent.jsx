import React, { Component } from 'react'
import patientService from '../services/PatientService'

class ViewPatientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            patient: {}
        }
    }

    componentDidMount() {
        patientService.getPatientById(this.state.id).then( res => {
            this.setState({patient: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Patient Details</h3>
                    <div className = "card-body">

                        <div className = "row">
                            <label> Patient ID</label>
                            <div> { this.state.patient.patientID }</div>
                        </div>

                        <div className = "row">
                            <label> Patient Name</label>
                            <div> { this.state.patient.name }</div>
                        </div>

                        <div className = "row">
                            <label> Patient Gender</label>
                            <div> { this.state.patient.gender }</div>
                        </div>

                        <div className = "row">
                            <label> Patient DOB</label>
                            <div> { this.state.patient.dob }</div>
                        </div>

                        <div className = "row">
                            <label> Patient Diagnosis</label>
                            <div> { this.state.patient.diagnosis }</div>
                        </div>

                        <div className = "row">
                            <label> Patient Hospitalized Date</label>
                            <div> { this.state.patient.hospitalized_date }</div>
                        </div>

                        <div className = "row">
                            <label> Patient Ward</label>
                            <div> { this.state.patient.ward }</div>
                        </div>

                        <div className = "row">
                            <label> Patient Discharged Date </label>
                            <div> { this.state.patient.discharged_date }</div>
                        </div>

                        <div className = "row">
                            <label> Patient Bill</label>
                            <div> { this.state.patient.bill }</div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default ViewPatientComponent