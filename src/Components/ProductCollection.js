import React from 'react'
import ProductCard from './ProductCard'

const ProductCollection = ({products, action, removeCard}) => {
  //console.log(products);
  const displayProducts = products.map(product => {
    return (
      <ProductCard key={product.id} product={product} action={action} removeCard={removeCard} />
    )
  })
  return (
    <>
    <div>
    </div>
    <h1 className='text-4xl'>Shop with us</h1>
    <div className='grid items-center p-10 h-auto w-auto'>
      <div className='flex border border-purple-200 rounded'>
        <input
          type={"text"}
          className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder='Search...' 
        />
        <select>
          <option value='all'>All</option>
          <option value='jewelery'>Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value='electronics'>Electronics</option>
        </select>
        <button className='px-4 text-white bg-purple-600 border-l rounded'>Search</button>
      </div>
    </div>

    <div className=' grid grid-rows-4 grid-flow-col gap-7 h-fit ml-5 mr-5'>
        {displayProducts}
    </div>
    </>

  )
}

export default ProductCollection 

