import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import PatientScreen from "./PatientScreen";
import WardScreen from "./WardScreen";
import PharmacyScreen from "./PharmacyScreen";
import AccountScreen from "./AccountScreen";
import Patient from "./components/ListPatient";
import AddPatient from "./components/patients/AddPatient";
import EditPatient from "./components/patients/EditPatient";

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
          <Route exact path="/ward">
            <WardScreen />
          </Route>
          <Route exact path="/pharmacy">
            <PharmacyScreen />
          </Route>
          <Route exact path="/account">
            <AccountScreen />
          </Route>
          <Route exact path="/patients/add">
            <AddPatient />
          </Route>
          <Route exact path="/patients/edit/:id">
            <EditPatient />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
