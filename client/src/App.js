import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import PatientScreen from "./PatientScreen";
import WardScreen from "./WardScreen";
import PharmacyScreen from "./PharmacyScreen";
import InsuranceScreen from "./InsuranceScreen";
import AccountScreen from "./AccountScreen";
import AddPatient from "./components/patients/AddPatient";
import EditPatient from "./components/patients/EditPatient";
import EditWard from "./components/wards/EditWard";


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
          <Route exact path="/patients/edit/:id">
            <EditPatient />
          </Route>
          <Route exact path="/wards/edit/:id">
            <EditWard />
          </Route>  
        </Switch>
      </div>
    </Router>
  );
}

export default App;
