import React from 'react';
import { AiFillHome, AiOutlineShoppingCart, AiOutlineComment } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav className='nav'>
        <h1 className='ClassCollection text-center text-xl text-white italic font-sans'>CLASS COLLECTIONS LTD</h1>
        <ul>
            <li>
                <a href='/project' className='AiFillHome'>
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
                    Reviews <AiOutlineComment />
                </a>
            </li>
        </ul>

        
    </nav>
  )
}

export default NavBar;