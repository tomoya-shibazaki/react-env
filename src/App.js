import React from "react"
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductListing from "./containers/ProducrtListing"
import "./App.css"

function App() {
    return (
        <div>
          <Router>
            <Switch>
              <Route path="/" exact component={ProductListing} />
              <Route>404 Not Found!</Route>
            </Switch>
          </Router>
        </div>
    )
}

export default App