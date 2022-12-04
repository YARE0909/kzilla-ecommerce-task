import React from 'react'
import "../navbar.css"

const Navbar = () => {
  return (
    <div className='NavBar'>
        <div>
            <h1>SRM MART</h1>
        </div>
        <div>
            <ul>
                <li>Home</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar