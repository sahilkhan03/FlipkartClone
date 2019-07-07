import React, { Component } from "react";
export default class Product extends Component {
  render() {
    return (
      <div className="column is-one-fifth">
        {JSON.stringify(this.props.details)}
      </div>
    );
  }
}
