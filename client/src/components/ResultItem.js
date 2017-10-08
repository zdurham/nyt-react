import React from 'react';

const ResultItem = (props) => {
  return (
    <div className='well' key={props.id} >
      <h3>{props.title}</h3>
      <h5>Published: {props.date}</h5>
      <a href={props.link}>Link To Article</a>

      <button className='btn btn-success' onClick={() => props.saveArticle({
        title: props.title,
        link: props.link,
        date: props.date
      })}>
        Save Article
      </button>
    </div>
  )
}

export default ResultItem