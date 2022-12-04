import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductDisplay from "./components/ProductDisplay";
// import DisplayCard from "./components/DisplayCard";
// import Navbar from "./components/Navbar";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="navBar">
        <Navbar />
      </div>
      <div className="mainContainer">
        <ProductDisplay products={products} />
      </div>
    </div>
  );
}

export default App;
