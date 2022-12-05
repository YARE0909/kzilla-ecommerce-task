import React from "react";
import DisplayCard from "./DisplayCard";

const ProductDisplay = ({ products }) => {
  return (
    <div>
      <div className="main p-28">
        {products.map((product, key) => (
          <div key={key}>

            <DisplayCard
              name={product.title}
              price={product.price}
              image={product.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
