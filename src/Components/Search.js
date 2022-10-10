import React from 'react'

function Search({search, setSearch}) {
  return (
    <div className='grid items-center p-10 h-auto w-auto'>
    <div className='flex border border-purple-200 rounded'>
      <input
        type={"text"}
        className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        placeholder='Search...' 
      />
       <button className='px-4 text-white bg-purple-600 border-l rounded'>Search</button>
      {/* <select>
        <option value='all'>All</option>
        <option value='jewelery'>Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value='electronics'>Electronics</option>
      </select> */}
     
    </div>
  </div>
  )
}

export default Search