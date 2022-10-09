import React, { useEffect, useState } from 'react';
import Comments from '../Components/Comments';

const Reviews = () => {
  const [comment, setComment] = useState([]);
  const [displayComments, setDisplayComments] = useState([]);

  useEffect(()=> {
    fetch("https://gentle-taiga-85011.herokuapp.com/comments")
    .then(res=> res.json())
    .then(comments => setDisplayComments(comments))
  })

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
      <h1 className='mt-2 mb-5 font-bold'>How do you feel about our product/services? Leave a comment</h1>

      <Comments displayComments={displayComments} />

      <div className="App">
      <header className="App-header mt-5">
      <form className='form' onSubmit={handleSubmit} >
      <img className="h-20 pl-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBC-9OSf41AWvLERVefeZdV1FKvWc6SDqdXA&usqp=CAU" alt="" />
      <h4 className='text-sm text-orange-600' >Add comment</h4>
        <label >
          Did you make a purchase?
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