import React from 'react'

const CommentCard = ({comment}) => {
    // console.log(comment);
  return (
    <div className='container mx-auto mb-10 shadow-lg'>
        <p className='font-bold'>Comment:</p> <p>{comment.comment}</p>
    </div>
  )
}

export default CommentCard;