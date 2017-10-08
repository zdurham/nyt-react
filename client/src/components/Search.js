import React from 'react';
import Query from './Query';
import Results from './Results';
import API from '../utils/API'

class Search extends React.Component {
  constructor(props) {
    super(props)
   
    this.state = {
      articles: [],
      saved: [],
      searchTerm: '',
      limit: '',
      startYear: '',
      endYear: ''
    }
  }

  

  // methods go here
  handleInputChange = (event) => {
    const {name, value} = event.target
     
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    

    API.getArticles(this.state.searchTerm)
      .then(results => this.setState({articles: results.data.response.docs}))
      .catch(err => console.warn(err))
  }

  render() {
    return (
      <div className='row'>
        <div className='col-sm-12'>
          <Query
          searchTerm = {this.state.searchTerm}
          limit = {this.state.limit}
          startYear = {this.state.startYear}
          endYear = {this.state.endYear}
          handleInputChange = {this.handleInputChange}
          handleSubmit = {this.handleSubmit}
          />
          <Results articles = {this.state.articles}/>
        </div>
      </div>   
    )
  }
}

export default Search