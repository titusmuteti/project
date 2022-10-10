import React, {useState} from 'react';
import { AiFillHeart, AiOutlineShoppingCart} from "react-icons/ai";


const ProductCard = ({product}) => {
  const [color, setColor] = useState(true);
  const [blurred, setBlurred] = useState(false);

  const handleClick = () => {
    // alert (`"${product.title}" successfully added to cart`);
    setBlurred(blurred => !blurred)
    return alertMessage 
  }

  const handleLike = () => {
    setColor(color => !color)
  }

  const btnColor = color ? 'text-black' : 'text-red-600';
  const btnBlur = blurred ? 'blur-sm': '';
  const alertMessage = blurred ? alert(`"${product.title}" successfully added to cart`):'null';

  return (
    <>
    <div className='max-w-sm rounded overflow-hidden shadow-lg bg-orange-300'>
      <h2 className='font-bold'>CATEGORY: {product.category}</h2>
      <img src={product.image} alt="" className='h-40 max-w-none mt-10' />
      {/* <img className='w-full border-4 mt-2 h-64 pr-48' src={product.image} alt={product.title}/> */}

      <div className='px-6 py-4'>
        <div className='font-bold  text-sm '>
          {product.title}
        </div>

        <div className='px-0 mt-2'>
        <span className='class="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2 pb-2 text-lg'>
          ${product.price}
        </span>
      </div>
      </div>

    <div className='px-2 pt-4'>
        <span className='inline-block px-3 py-1 pl-20 text-4xl'><AiFillHeart className={btnColor} onClick={handleLike}/></span>
        <span className='inline-block px-3 py-1 pl-20 text-black text-4xl' onClick={handleClick}><AiOutlineShoppingCart className={btnBlur} /></span>
      </div>
    </div>
    </>

  )
}

export default ProductCard