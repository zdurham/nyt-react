import React from 'react';


const ResultItem = (props) => {
  return (
    <div className='well' key={props.id}>
      <h3>{props.title}</h3>
      <h5>Published: {props.date}</h5>
      <a href={props.link}>Link To Article</a>
      {props.children}
    </div>
  )
}

export default ResultItem