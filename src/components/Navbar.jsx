import React, { useState } from "react";
import "../navbar.css";

const Navbar = () => {
  let cartData = localStorage.getItem("userCart");
  const [cartState, setCartState] = useState(false);
  const displayCart = () => {
    setCartState(!cartState)
  }
  if (cartData) {
    let parsedCartData = JSON.parse(cartData);
    return (
      <div className="NavBar">
        <div>
          <h1>SRM MART</h1>
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li onClick={displayCart}>Cart</li>
            <li lassName={cartState ? "block absolute right-3" : "hidden"}>
              <div className="w-[200px] h-[200px] bg-white absolute right-3 mt-16 rounded-lg">
                <ul>
                  {parsedCartData.map((product) => (
                    <li>{product}</li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
        <div className="NavBar">
          <div>
            <h1>SRM MART</h1>
          </div>
          <div>
            <ul>
              <li>Home</li>
              <li onClick={displayCart}>Cart</li>
              <li className={cartState ? "block absolute right-3" : "hidden"}>
                <div className="w-[200px] h-[200px] bg-white text-black flex flex-col items-center absolute right-3 mt-16 rounded-lg">
                  <h1 className="text-3xl font-bold p-3">Your Items</h1>
                  <div className="w-full h-full flex items-center justify-center">

                  <h1 className="font-semibold">Your cart is empty :(</h1>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      );
  }
};

export default Navbar;
