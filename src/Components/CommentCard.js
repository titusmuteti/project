import React from 'react'
import { AiOutlineDelete} from "react-icons/ai";

const CommentCard = ({comment, removeCard}) => {

  const handleDelete = () => {
    removeCard(comment)
  }
  return (
    <div className='container mx-auto mb-10 shadow-lg'>
      <h3 className='font-bold'>Name:</h3> <h3>{comment.name}</h3>
      <h3 className='font-bold'>Made a purchase?</h3> <h3>{comment.choice}</h3>
      <p className='font-bold'>Comment:</p> <p>{comment.comment}</p>
      <span className='inline-block px-3 py-1 pl-5 pr-5 bg-lime-500 ' onClick={handleDelete}><AiOutlineDelete className='text-red-600 text-4xl'/></span>
    </div>
  )
}

export default CommentCard;