import React, { Component } from 'react'
import SignInHeader from "./SignInHeader";

class PatientHeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a className="navbar-brand">Patient Record</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default PatientHeaderComponent