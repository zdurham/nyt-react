import React from 'react';
import Jumbotron from '../components/Jumbotron'


const NoMatch = () => {
  return (
    <div className='container'>
      <Jumbotron />
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h3 className='panel-title'>404 Error</h3>
        </div>
        <div className='panel-body'>
          <p>There's nothing here!</p>
        </div>
      </div>
    </div>
  )
}

export default NoMatch