import React, { useState } from 'react';
import Comments from '../Components/Comments';

const Reviews = () => {
  const [comment, setComment] = useState([]);

  const handleChange =(e)=> {
    setComment({...comment, [e.target.value] : e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    //console.log(comment);
    return <Comments comment={comment} />   
  }

  return (
    <div >
      How do you feel about our products? Leave a comment

      <div className="App">
      <header className="App-header mt-5">
      <form className='form' onSubmit={handleSubmit} >
      <img className="h-20 pl-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBC-9OSf41AWvLERVefeZdV1FKvWc6SDqdXA&usqp=CAU" alt="" />
      <h4 className='text-sm text-orange-600' >Add comment</h4>
        <label >
          Did you buy a product
        </label><br/>
        <select type="select" className='border-4 border-black mt-0' onChange={handleChange}>
          <option value='yes'>YES</option>
          <option value="no">NO</option>
        </select><br/>

        <label>
          Comment:
        </label><br/>
          <input type="text" placeholder="add comment" className='border-4 border-black mt-2'
          onChange={handleChange}/><br/>
          
        <input className='bg-indigo-200 mt-2 rounded-lg' type="submit" value="Comment"/>
        </form>
      </header>
      </div>
    </div>
  )
}

export default Reviews