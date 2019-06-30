import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./homepage/Homepage";
import Navbar from "./navbar/Navbar";
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact to="/" component={Homepage} />
        </Switch>
      </div>
    );
  }
}
