import React from 'react'
import API from '../utils/API'



class Saved extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      savedArticles: []
    }
  }

  componentDidMount() {
    this.loadSaved()
  }

  loadSaved = () => {
    API.getSavedArticles()
      .then(res => {
        console.log(res.data)
        return this.setState({savedArticles: res.data})
      })
      .catch(err => console.log(err))
  }

  

  render() {
    return (
      <div className='container content'>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            <h3 className='panel-title'>Saved Articles</h3>
          </div>
          <div className='panel-body'>
            
          </div>
        </div>
      </div>
    )
  }
}

export default Saved