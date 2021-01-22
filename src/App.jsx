import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import "./App.css";
import Clock from "./Clock";
import InfoTable from "./InfoTable";

export default function App() {
  return (
    // <div>
    //   <h1>Hello world!</h1>
    //   <Clock />
    //   <hr />
    //   <InfoTable />
    //   <hr />
    //   <p>© 2021 Xinyi Shen.</p>
    //   <p>18888921102 | shenxinyi@zju.edu.cn</p>
    // </div>

    <Router>
      <Switch>
        <Route path="/infotable">
          <InfoTable />
        </Route>
        <Route path="/">
          <Redirect to="/" />
          <div>
            <h1>Hello world!</h1>
            <Clock />
            <hr />
            <InfoTable />
            <hr />
            <p>© 2021 Xinyi Shen.</p>
            <p>18888921102 | shenxinyi@zju.edu.cn</p>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
