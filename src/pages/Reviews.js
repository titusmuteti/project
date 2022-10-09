import React, { useEffect, useState } from 'react';
import Comments from '../Components/Comments';

const Reviews = () => {
  const [comment, setComment] = useState([]);
  const [posts, setPosts] = useState('');
  // console.log(posts);

  useEffect(()=> {
    fetch("https://gentle-taiga-85011.herokuapp.com/comments")
    .then(res=> res.json())
    .then(comments => setComment(comments))
  })

  const handleChange =(e)=> {
    setPosts({...posts, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    fetch("https://gentle-taiga-85011.herokuapp.com/comments", {
      method: 'POST',
      headers: 
      { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(posts)
    })
    .then(res=>res.json())
    .then(post=>(post))
  }

  return (
    <div >
      <h1 className='mt-2 mb-5 font-bold'>How do you feel about our product/services? Leave a comment</h1>

      <Comments displayComments={comment} />

      <div className="App">
      <header className="App-header mt-5">
      <form className='form' onSubmit={handleSubmit}>
      <img className="h-24 pl-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBC-9OSf41AWvLERVefeZdV1FKvWc6SDqdXA&usqp=CAU" alt="" />
      <h4 className='text-sm text-orange-600' >Add comment</h4>

        <label>
          Comment:
        </label><br/>
          <input type="text" placeholder="add comment" name='comment' className='border-4 border-black mt-2'
          onChange={handleChange}/><br/>
          
        <input className='bg-indigo-200 mt-2 rounded-lg' type="submit" value="Comment"/>
        </form>
      </header>
      </div>
    </div>
  )
}

export default Reviews