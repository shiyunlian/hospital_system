import React from "react";
import SignIn from "./components/SignIn";
import Header from "./components/Header";
import PatientScreen from "./PatientScreen";

const HomeScreen = () => {
    const setToken = function (token) {
        localStorage.setItem('token', token)
    }

    const getToken = function () {
        return localStorage.getItem('token')
    }
    if (!getToken()) {
        return (
            <div>
                <Header />
                <SignIn  setToken={setToken}/>
            </div>
        );
    }

    return (
        <div>
            <Header />
            <PatientScreen/>
        </div>
    );

};

export default HomeScreen;
