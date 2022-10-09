import React from 'react'
import CommentCard from './CommentCard'

const Comments = ({displayComments}) => {
 const displayComment = displayComments.map(comment => {
  return <CommentCard key={comment.id} comment={comment} />
 })
  return (
    <div className='container mx-auto border-solid border-4 border-indigo-400 pl-2'>
      <h1 className='font-bold text-2xl mt-5 mb-10 text-lime-600'>Comments</h1>
      {displayComment}
    </div>
  )
}

export default Comments