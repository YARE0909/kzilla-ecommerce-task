import { useEffect, useState } from "react";
import "./App.css";
import DisplayCard from "./components/DisplayCard";
import Navbar from "./components/Navbar";

function App() {
  const [data,setData]=useState([]);
  const url = "https://fakestoreapi.com/products";

  
  useEffect(()=>{
    fetch(url)
      .then(results => results.json())
      .then(productData => {
        const products = productData;
        console.log(products);
        setData(products);
      });



  },[])
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="App">
        {/* <DisplayCard name={data[0].title} image={data[0].image} price={data[0].price}/> */}
        
      </div>
    </div>
  );
}

export default App;
