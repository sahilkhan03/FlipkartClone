import React, { Component } from "react";
import Product from "./product/Product";
import * as apiCall from "./../../../api/ProductsAPI";
import "./DealCard.css";
export default class DealCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.shuffle = this.shuffle.bind(this);
  }

  shuffle(arr) {
    return arr.sort(() => Math.random - 0.5);
  }

  async componentWillMount() {
    let products = await apiCall.getProductsByCategory(this.props.category);
    products = this.shuffle(products);
    this.setState({ products });
  }

  render() {
    let productSection = this.state.products.map((product, index) => (
      <Product {...product} key={index} />
    ));
    return (
      <div className="card">
        <header className="card-header">
          <p className="title is-3">{this.props.title}</p>
          <button className="button is-info" href="#">
            See More
          </button>
        </header>
        <div className="card-content">
          <div className="content columns">{productSection}</div>
        </div>
      </div>
    );
  }
}
