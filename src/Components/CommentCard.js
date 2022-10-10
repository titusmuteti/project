import React from 'react'

const CommentCard = ({comment}) => {
    // console.log(comment);
  return (
    <div className='container mx-auto mb-10 shadow-lg'>
      <h3 className='font-bold'>Name:</h3> <h3>{comment.name}</h3>
      <h3 className='font-bold'>Made a purchase?</h3> <h3>{comment.choice}</h3>
      <p className='font-bold'>Comment:</p> <p>{comment.comment}</p>
    </div>
  )
}

export default CommentCard;