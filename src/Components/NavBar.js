import React from 'react';
import { AiFillHome, AiOutlineStar } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav className='nav'>
        <h1 className='ClassCollection text-center text-white'>CLASS <AiOutlineStar className='text-white'/> COLLECTION</h1>
        <ul>
            <li>
                <a href='/' className='AiFillHome'>
                    Home <AiFillHome/>
                </a>
            </li>

            <li>
                <a href='/products'>Products</a>
            </li>

            <li>
                <a href='/about'>About</a>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar;