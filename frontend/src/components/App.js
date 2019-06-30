import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./homepage/Homepage";
export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact to="/" component={Homepage} />
      </Switch>
    );
  }
}
