import React from 'react'

const Save = (props) => {
  return (
    <button className='btn btn-default' onClick={() => props.saveArticle({
      _id: props.id,
      title: props.title,
      link: props.link,
      date: props.date 
    })}>
      Save Article
    </button>
  )
}

export default Save