import React from 'react'
import Jumbotron from '../components/Jumbotron'
import Search from '../components/Search'


class Main extends React.Component {

  // render the UI
  render() {
    return(
      <div>
        
        <div className='container-fluid content'>  
          <Search />
        </div>
      </div>
    )
  }
}

export default Main