import React from "react";
import "../displayCard.css";

const DisplayCard = ({ name, image, price }) => {
  const addCartCallback = (e) => {
    const product =
      e.target.parentElement.parentElement.querySelector(".name").innerHTML;
    let userCartData = JSON.parse(localStorage.getItem("userCartData"));
    console.log(userCartData);
    if (userCartData == null) {
      localStorage.setItem("userCartData", "[]");
      userCartData.push(product);
      localStorage.setItem("userCartData", JSON.stringify(userCartData));
    } else {
      userCartData.push(product);
      localStorage.setItem("userCartData", JSON.stringify(userCartData));
    }

    console.log(product);
  };
  return (
    <div className="displayCard">
      <div className="imgHolder">
        <img src={image} alt="/" />
      </div>
      <div className="name">{name}</div>
      <div className="price">
        <h1>${price}</h1>
      </div>
      <div className="btnHolder">
        <button
          className="addToCart"
          onClick={addCartCallback}
          placeholder="Add To Cart"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default DisplayCard;
