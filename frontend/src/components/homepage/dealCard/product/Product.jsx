import React from "react";
let Product = ({ image, price, brand, title }) => (
  <div className="column is-one-fifth ">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={image} alt="Product" />
      </figure>
      <p className="title is-5" style={{ textAlign: "center" }}>
        {title}
      </p>
      <p className="title is-6" style={{ textAlign: "center" }}>
        Price: {price}
      </p>
      <p className="title is-6" style={{ textAlign: "center" }}>
        Brand: {brand}
      </p>
    </div>
  </div>
);

export default Product;
