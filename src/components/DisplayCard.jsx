import React from "react";
import "../displayCard.css";

const DisplayCard = ({ name, image, price }) => {
  const addCartCallback = (e) => {
    console.log("Clicked");
  };
  return (
    <div className="displayCard">
      <div className="imgHolder">
        <img src={image} alt="/" />
      </div>
      <div className="name">
        <h1>{name}</h1>
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
