import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import InfoTable from "./InfoTable";
import Game from "./Game";
import Flex from "./Flex";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/info-table">
          <Redirect to="/info-table" />
          <InfoTable />
        </Route>
        <Route path="/tic-tac-toe">
          <Redirect to="/tic-tac-toe" />
          <Game />
        </Route>
        <Route path="/flex">
          <Redirect to="/flex" />
          <Flex />
        </Route>
        <Route path="/">
          <Redirect to="/" />
          <Home />
        </Route>
      </Switch>
      <Link to="/">Home</Link>{" | "}
      <Link to="/info-table">Info Table</Link>{" | "}
      <Link to="/tic-tac-toe">Tic Tac Toe</Link>{" | "}
      <Link to="/flex">Flex</Link>
    </Router>
  );
}
