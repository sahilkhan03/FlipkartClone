import React, { Component } from "react";
import Product from "./product/Product";
import "./DealCard.css";
export default class DealCard extends Component {
  constructor(props) {
    super(props);
    this.state = [];
    this.shuffle = this.shuffle.bind(this);
  }
  shuffle(arr) {
    return arr.sort(() => Math.random - 0.5);
  }
  render() {
    return (
      <div className="card">
        <header className="card-header">
          <p className="title is-3">{this.props.title}</p>
          <button className="button is-info" href="#">
            See More
          </button>
        </header>
        <div className="card-content">
          <div className="content columns">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    );
  }
}
