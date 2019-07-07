import React, { Component } from "react";
import Carousel from "./carousel/Carousel";
import DealCard from "./dealCard/DealCard";
export default class Homepage extends Component {
  render() {
    return (
      <div className="container">
        <Carousel style={{ width: "100%", height: "100%" }} />
        <br />
        <DealCard title="Sports" category="Sports" />
        <br />
        <DealCard title="Electronics" category="Electronics" />
        <br />
        <DealCard title="Toys" category="Toys" />
        <br />
      </div>
    );
  }
}
