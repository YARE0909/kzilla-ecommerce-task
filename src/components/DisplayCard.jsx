import React from "react";
import "../displayCard.css";
import cartDataJson from "../cartData.json";

const DisplayCard = ({ name, image, price }) => {
  const addCartCallback = (e) => {
    const product = e.target.parentElement.parentElement.querySelector(".name").innerHTML;
    console.log(cartDataJson.cartData);
    cartDataJson.cartData.push(product)
    console.log(cartDataJson.cartData);
    console.log(product);
  };
  return (
    <div className="displayCard">
      <div className="imgHolder">
        <img src={image} alt="/" />
      </div>
      <div className="name">
        {name}
      </div>
      <div className="price">
        <h1>${price}</h1>
      </div>
      <div className="btnHolder">
        <button className="addToCart" onClick={addCartCallback}>
          <h1>Add To Cart</h1>
        </button>
      </div>
    </div>
  );
};

export default DisplayCard;
