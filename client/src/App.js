import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Dashboard />
          </Route>
          <Route exact path="/patients"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
