import "../navbar.css";
import cartDataJson from "../cartData.json";
// import { useState } from "react";

const Navbar = () => {
  // const [cartData, setCartData] = useState([]);
  // setCartData(cartDataJson.cartData);

  return (
    <div className="NavBar">
      <div>
        <h1 className="font-bold">SRM MART</h1>
      </div>
      <div className="w-[13%] h-[82vh] bg-[#30353b] fixed top-0 right-0 mt-40 rounded-lg m-3">
        <div>
          <div className="w-full h-full flex justify-center p-4 text-3xl font-bold">
            <h1>Your Cart</h1>
          </div>
          <div className="p-2 overflow-auto">
            {cartDataJson.cartData.map((item, key) => {
              return <div key={key}>{item}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
