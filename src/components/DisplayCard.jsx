import React from 'react'
import '../displayCard.css'

const DisplayCard = ({name, image, price}) => {
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
        <button className="addToCart">
            <h1>Add To Cart</h1>
        </button>
    </div>
  )
}

export default DisplayCard