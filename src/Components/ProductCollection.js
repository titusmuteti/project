import React from 'react'
import ProductCard from './ProductCard'

const ProductCollection = ({products}) => {
  //console.log(products);
  const displayProducts = products.map(product => {
    return (
      <ProductCard key={product.id} product={product} />
    )
  })
  return (
    <>
    <h1 className='text-4xl'>Shop with us</h1>
    <div className='grid items-center p-10 h-auto w-auto'>
      <div className='flex border border-purple-200 rounded'>
        <input
          type={"text"}
          className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder='Search...' 
        />
        <button className='px-4 text-white bg-purple-600 border-l rounded'>Search</button>
      </div>
    </div>

    <div className=' grid grid-rows-5 grid-flow-col gap-7 object-contain min-h-0'>
        {displayProducts}
    </div>
    </>

  )
}

export default ProductCollection 

