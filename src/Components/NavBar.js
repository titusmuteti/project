import React from 'react';
import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav className='nav'>
        <h1 className='ClassCollection text-center text-xl text-white italic font-sans'>CLASS COLLECTIONS LTD</h1>
        <ul>
            <li>
                <a href='/' className='AiFillHome'>
                    Home <AiFillHome/>
                </a>
            </li>

            <li>
                <a href='/products'>
                    Products <AiOutlineShoppingCart />
                </a>
            </li>

            <li>
                <a href='/reviews'>
                    Reviews 
                </a>
            </li>

            <li>
                <a href='/sell'>Sell</a>
            </li>
        </ul>

        
    </nav>
  )
}

export default NavBar;