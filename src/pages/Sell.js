import React, { useState } from 'react'

const About = () => {

  const [productPost, setProductPost] = useState("")
  // const [title, setTitle] = useState([]);
  // const [category, setCategory] = useState([]);
  // const [price, setPrice] = useState([]);
  // const [image, setImage] = useState([]);
   
  // const handleTitleChange = (e) => {
  //   setTitle(e.target.value);
  // }

  // const handleCategoryChange = (e) => {
  //   setCategory(e.target.value);
  // }

  // const handleImageChange = (e) => {
  //   setPrice(e.target.value);
  // }

  // const handlePriceChange = (e) => {
  //   setImage(e.target.value);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://fierce-ridge-31455.herokuapp.com/products", {
      method: 'POST',
      headers:
      {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(productPost)
    })
    .then(res => res.json())
    .then(product => {
      return(product)
    })
  }

  const handleChange = (e) => {
    setProductPost({...productPost, [e.target.value] : e.target.value})
  }

  return (
    <div>
      <h1 className='text-4xl mt-5 font-bold'>Want to market your product with us?</h1>

    <div className="App">
      <header className="App-header mt-10">
      <form className='form' onSubmit={handleSubmit} >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBC-9OSf41AWvLERVefeZdV1FKvWc6SDqdXA&usqp=CAU" alt="" />
        <label >
          Product Title:
        </label><br/>
          <input type="text" 
            className='border-4 border-black'
            onChange={handleChange} /><br/>

          <label>
          Product Category:
        </label><br/>
          <select type="select" className='border-4 border-black mt-5' placeholder='Select' onChange={handleChange}>
            <option value='jewelery'>Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value='electronics'>Electronics</option>
            <option value='male shoes'>Male Shoes</option>
            <option value='female shoes'>Female Shoes</option>
          </select><br/>
            
        <label >
          Price tag:
        </label><br/>
          <input type="number" placeholder='$' className='border-4 border-black mt-5'
          onChange={handleChange} /><br/>
            
        <label>
          Image URL:
        </label><br/>
          <input type="text" className='border-4 border-black mt-5'
          onChange={handleChange}/><br/>
          
        <input className='bg-indigo-200 mt-24 rounded-lg' type="submit" value="Submit"/>
        </form>
      </header>
      </div>
    </div>
  )
}

export default About;