import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import InfoTable from "./InfoTable";

export default function App() {
  return (
    <Router>
      <Link to="/">Home</Link>{" | "}
      <Link to="/infotable">Info Table</Link>
      <Switch>
        <Route path="/infotable">
          <Redirect to="/infotable" />
          <InfoTable />
        </Route>
        <Route path="/">
          <Redirect to="/" />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
