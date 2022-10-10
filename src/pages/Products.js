import React, { useEffect, useState } from 'react'
import ProductCollection from '../Components/ProductCollection';
import Search from '../Components/Search';

const Products = () => {
const [productsList, setProductsList] = useState([]);
const [search, setSearch] = useState('');


const removeCardPermanently = (product) => {
  const newFilteredProducts = productsList.filter(card => card !== product)
  
  setProductsList(newFilteredProducts)
  // console.log(newFilteredProducts);

  fetch(`https://fierce-ridge-31455.herokuapp.com/products/${product.id}`, {
    method: "DELETE"
  })
  .then(res => res.json())
  .then(product => console.log(product))
}

useEffect(()=> {
  fetch("https://fierce-ridge-31455.herokuapp.com/products")
  .then(res => res.json())
  .then(products => setProductsList(products))
  //console.log(productsList);
  .catch(err => console.log(err))
})

const visibleProducts = productsList.filter(product=>{
  return product.title.toLowerCase().includes(search.toLowerCase())
})
  return (
    <>
    <Search setSearch={setSearch} search={search} />
    <ProductCollection products={visibleProducts} removeCard={removeCardPermanently} />
    </>
  )
}

export default Products;