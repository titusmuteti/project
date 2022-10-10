import React from 'react';
import { AiFillHeart, AiOutlineShoppingCart, AiOutlineDelete} from "react-icons/ai";


const ProductCard = ({product, action, removeCard}) => {
  //const [color, setColor] = useState(true)

  const handleClick = () => {
    alert (`"${product.title}" successfully added to cart`)
    action(product)
    // console.log(product);
  }

  const handleLike = () => {
    alert(`You liked "${product.title}"`)
    //const newColor = color
    //className={{color:color ? 'bg-red-600' : 'bg-white'}}
  }

  const handleDelete = () => {
    removeCard(product);
  }

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
        <span className='inline-block px-3 py-1 pl-10'><AiFillHeart className='text-4xl' onClick={handleLike}/></span>
        <span className='inline-block px-3 py-1 pl-10' onClick={handleClick}><AiOutlineShoppingCart className='text-black text-4xl'/></span>
        <span className='inline-block px-3 py-1 pl-10'><AiOutlineDelete onClick={handleDelete} className='text-black text-4xl'/></span>
      </div>
    </div>
    </>

  )
}

export default ProductCard