import React, { useState } from "react";
import "../navbar.css";
import cartDataJson from "../cartData.json";

const Navbar = () => {
  
  console.log(cartDataJson['cartData']);

  const [cartState, setCartState] = useState(false);
  const displayCart = () => {
    setCartState(!cartState);
  };
  if (cartDataJson['cartData']) {
    return (
      <div className="NavBar">
        <div>
          <h1 className="font-bold">SRM MART</h1>
        </div>
        <div>
          <ul>
            <li onClick={displayCart}>Cart</li>
            <div className={cartState ? "block absolute right-3" : "hidden"}>
              <div className="w-[200px] h-fit min-h-[300px] bg-white absolute right-3 mt-16 rounded-lg">
                <div className="flex flex-col text-black p-4 overflow-auto">
                  {cartDataJson["cartData"].map((product, key) => (
                    <div key={key}>
                      <h1>{product}</h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
