import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import PatientScreen from "./PatientScreen";
import WardScreen from "./WardScreen";
import PharmacyScreen from "./PharmacyScreen";
import InsuranceScreen from "./InsuranceScreen";
import AccountScreen from "./AccountScreen";
import Patient from "./components/ListPatient";
import AddPatient from "./components/patients/AddPatient";
import EditPatient from "./components/patients/EditPatient";
import AddPharmacy from "./components/pharmacys/AddPharmacy";
import AddWard from "./components/wards/AddWard";
import EditPharmacy from "./components/pharmacys/EditPharmacy";
import EditWard from "./components/wards/EditWard";
import AddInsurance from "./components/insurances/AddInsurance";
import EditInsurance from "./components/insurances/EditInsurance";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route exact path="/login">
            <PatientScreen />
          </Route>
          <Route exact path="/patients">
            <PatientScreen />
          </Route>
          <Route exact path="/wards">
            <WardScreen />
          </Route>
          <Route exact path="/pharmacys">
            <PharmacyScreen />
          </Route>
          <Route exact path="/account">
            <AccountScreen />
          </Route>
          <Route exact path="/insurances">
            <InsuranceScreen />
          </Route>
          <Route exact path="/patients/add">
            <AddPatient />
          </Route>
          <Route exact path="/pharmacys/add">
            <AddPharmacy />
          </Route>
          <Route exact path="/wards/add">
            <AddWard />
          </Route>
          <Route exact path="/insurances/add">
            <AddInsurance />
          </Route>
          <Route exact path="/patients/edit/:id">
            <EditPatient />
          </Route>
          <Route exact path="/pharmacys/edit/:id">
            <EditPharmacy />
          </Route>
          <Route exact path="/wards/edit/:id">
            <EditWard />
          </Route>
          <Route exact path="/insurances/edit/:id">
            <EditInsurance />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
