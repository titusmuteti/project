import React, { useEffect, useState } from 'react'
import ProductCollection from '../Components/ProductCollection';
import Cart from './Reviews';

const Products = () => {
const [productsList, setProductsList] = useState([]);
const [selectedProduct, setSelectedProduct] = useState([]);

const addToCart = (product) => {
  const newProductCollection = selectedProduct.filter(card => card !== product)
  setSelectedProduct([...newProductCollection, product])
}

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
  return (
    <>
    <ProductCollection products={productsList} action={addToCart}  removeCard={removeCardPermanently} />
    </>
  )
}

export default Products;