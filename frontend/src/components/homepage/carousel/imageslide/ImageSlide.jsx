import React from "react";

let ImageSlide = ({ url }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };
  return <div className="carousel-image" style={styles} />;
};

export default ImageSlide;
