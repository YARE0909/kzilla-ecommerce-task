import React from 'react'
import '../displayCard.css'
import cartDataJson from "../cartData.json";

const DisplayCard = ({name, image, price}) => {
    const addCartCallback = () => {
        console.log("HELLO");
        cartDataJson['cartData'].push(name)
       console.log(cartDataJson['cartData']);
    }
  return (
    <div className='displayCard'>
        <div>
            <img src={image} alt="/" />
        </div>
        <div className="name">
            <h1>{name}</h1>
        </div>
        <div className="price">
            <h1>${price}</h1>
        </div>
        <button className="addToCart" onClick={addCartCallback}>
            <h1>Add To Cart</h1>
        </button>
    </div>
  )
}

export default DisplayCard