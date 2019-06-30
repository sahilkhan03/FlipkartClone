import React, { Component } from "react";
import ImageSlide from "./imageslide/ImageSlide";
import Arrow from "./arrow/Arrow";
import "./Carousel.css";
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curIdx: 0,
      imgUrl: [
        "https://www.91-img.com/pictures/97744-v1-apple-iphone-7-mobile-phone-large-1.jpg",
        "https://www.91-img.com/pictures/121008-v1-apple-iphone-x-mobile-phone-large-1.jpg"
      ]
    };
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  previousSlide() {
    let { curIdx, imgUrl } = this.state;
    curIdx = curIdx === 0 ? imgUrl.length - 1 : curIdx - 1;
    this.setState({ curIdx });
  }

  nextSlide() {
    let { curIdx, imgUrl } = this.state;
    curIdx = curIdx === imgUrl.length - 1 ? 0 : curIdx + 1;
    this.setState({ curIdx });
  }
  render() {
    return (
      <div className="carousel">
        <Arrow
          direction="left"
          clickFunction={this.previousSlide}
          glyph="&#9664;"
        />
        <ImageSlide url={this.state.imgUrl[this.state.curIdx]} />
        <Arrow
          direction="right"
          clickFunction={this.nextSlide}
          glyph="&#9654;"
        />
      </div>
    );
  }
}
