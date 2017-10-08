import React from 'react';

const ResultItem = (props) => {
  return (
    <div className='well' key={props.id} >
      <h3>{props.title}</h3>
      <h5>By: {props.author}</h5>
      <h5>Section: {props.desk}</h5>
      <h5>Published: {props.date}</h5>
      <a href={props.link}>Link To Article</a>
    </div>
  )
}

export default ResultItem