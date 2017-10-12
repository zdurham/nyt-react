import React from 'react'

const Delete = (props) => {
  return (
    <button className='btn btn-default remove' onClick={() => props.removeArticle(props.id)}>
      Remove
    </button>
  )
}

export default Delete