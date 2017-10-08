import React from 'react'
import Jumbotron from '../components/Jumbotron'
import Search from '../components/Search'


class Main extends React.Component {

  // render the UI
  render() {
    return(
      <div className='container content'>
        <Jumbotron />
        <Search />
      </div>
    )
  }
}

export default Main