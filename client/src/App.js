import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import PatientScreen from "./PatientScreen";
import WardScreen from "./WardScreen";
import PharmacyScreen from "./PharmacyScreen";
import AccountScreen from "./AccountScreen";

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
          <Route exact path="/ward">
            <WardScreen />
          </Route>
          <Route exact path="/pharmacy">
            <PharmacyScreen />
          </Route>
          <Route exact path="/account">
            <AccountScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
