import React from 'react'

const Save = (props) => {
  return (
    <button className='btn btn-success' onClick={() => props.saveArticle({
      title: props.title,
      link: props.link,
      date: props.date 
    })}>
      Save Article
    </button>
  )
}

export default Save