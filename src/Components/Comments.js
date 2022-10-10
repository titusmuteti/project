import React from 'react'
import CommentCard from './CommentCard'

const Comments = ({displayComments, removeCard}) => {
 const displayComment = displayComments.map((comment, index) => {
  return <CommentCard key={index} comment={comment} removeCard={removeCard}/>
 })
  return (
    <div className='container mx-auto w-96 border-solid border-4 border-indigo-400 pl-2'>
      <h1 className='font-bold text-2xl mt-5 mb-10 text-lime-600'>Comments</h1>
      {displayComment}
    </div>
  )
}

export default Comments