import React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css'
import Home from './Home'
import InfoTable from './InfoTable'
import Game from './Game'
import Flex from './Flex'
import Conjugacion from './Conjugacion'
import Footer from './Footer'

export default function App () {
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
        <Route path="/conjugacion">
          <Redirect to="/conjugacion" />
          <Conjugacion />
        </Route>
        <Route path="/">
          <Redirect to="/" />
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}
