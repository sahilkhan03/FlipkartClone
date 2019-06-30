import React, { Component } from "react";
import Carousel from "./carousel/Carousel";
export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Carousel style={{ width: "100%", height: "100%" }} />
      </div>
    );
  }
}
