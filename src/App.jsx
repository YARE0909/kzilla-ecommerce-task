import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductDisplay from "./components/ProductDisplay";
// import DisplayCard from "./components/DisplayCard";
// import Navbar from "./components/Navbar";

function App() {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL)
      .then((res) => {
        console.log(res);
        setProducts(res.data);
        setLoader(false)
      })
      .catch((err) => {
        console.log(err);
        setLoader(true)
      });
  }, []);

  return (
    <div className="container">
      <div className="navBar">
        <Navbar />
      </div>
      <div className={loader ? "block" : "hidden"}>
        <div className="loaderContainer">

        <div className="loader">
         
        </div>
        </div>
      </div>
      <div className={loader ? "hidden" : "block"}>

      <div className="mainContainer">
        <ProductDisplay products={products} />
      </div>
      </div>
    </div>
  );
}

export default App;
