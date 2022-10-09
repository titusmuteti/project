import React from 'react'

const CommentCard = ({comment}) => {
    console.log(comment);
  return (
    <div className='container mx-auto mb-10 shadow-lg'>
        <h4 className='font-bold'>Did you make a purchase: </h4> <h4>{comment.choice}</h4>
        <p>Comment: {comment.comment}</p>
    </div>
  )
}

export default CommentCard;