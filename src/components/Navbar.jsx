import "../navbar.css";
import { useEffect } from "react";
import { useState } from "react";
// import { useState } from "react";

const Navbar = () => {
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    let userCartData = JSON.parse(localStorage.getItem("userCartData"));
    if (!userCartData) {
      localStorage.setItem("userCartData", "[]");
      let userCartData = JSON.parse(localStorage.getItem("userCartData"));
      setCartData(userCartData);
      console.log(userCartData);
    }else{
      setCartData(userCartData);
      console.log(userCartData);
    }

  }, [cartData])

  return (
    <div className="NavBar">
      <div>
        <h1 className="font-bold">SRM MART</h1>
      </div>
      <div className="w-[13%] h-[82vh] bg-[#30353b] fixed top-0 right-0 mt-40 rounded-lg m-3 overflow-scroll">
        <div>
          <div className="w-full h-full flex justify-center p-4 text-3xl font-bold">
            <h1>Your Cart</h1>
          </div>
          <div className="p-2 overflow-auto whitespace-nowrap text-xl hover:whitespace-normal">
            {cartData.map((item, key) => {
              return <div className="border-b-2 border-gray-600 overflow-hidden py-4" key={key}>{item}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
