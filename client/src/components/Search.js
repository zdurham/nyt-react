import React from 'react';
import Query from './Query';
import Results from './Results';
import API from '../utils/API'

class Search extends React.Component {
  constructor(props) {
    super(props)
   
    this.state = {
      articles: [],
      searchTerm: '',
      limit: 1,
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
    
    let limit = this.state.limit;
    // let start = new Date(this.state.startYear);
    // let end = new Date(this.state.endYear);
    API.getArticles(this.state.searchTerm)
      .then(results => {
      this.setState({articles: results.data.response.docs.slice(0, limit)})})
      .catch(err => console.warn(err));
  }

  handleClear = (event) => {
    event.preventDefault();

    this.setState({articles: []})

  }

  saveArticle = (articleObj) => {
    API.saveArticle(articleObj)
      .then(res => console.log(res))
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
          handleClear = {this.handleClear}
          />

          <Results 
            articles = {this.state.articles} 
            saveArticle={this.saveArticle}
          />

        </div>
      </div>   
    )
  }
}

export default Search