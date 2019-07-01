import React, { Component } from "react";
import "./DealCard.css";
export default class DealCard extends Component {
  render() {
    return (
      <div className="card">
        <header className="card-header">
          <p className="title">Mens Wear</p>
          <button className="button is-info" href="#">
            See More
          </button>
        </header>
        <div className="card-content">
          <div className="content columns">
            <div className="column is-one-fifth">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
