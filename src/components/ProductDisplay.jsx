import React from "react";
import DisplayCard from "./DisplayCard";

const ProductDisplay = ({ products }) => {
  return (
    <div>
      <div className="main">
        {products.map((product) => (
          <DisplayCard
            name={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
