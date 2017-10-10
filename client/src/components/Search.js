import React from 'react';
import Query from './Query';
import Results from './Results';
import API from '../utils/API'

class Search extends React.Component {
  constructor(props) {
    super(props)
   
    this.state = {
      articles: [],
      savedArticles: [],
      searchTerm: '',
      limit: 1,
      startYear: '',
      endYear: ''
    }
  }

  componentDidMount() {
    this.getSaved()
  }  

  // Load saved articles
  getSaved() {
    API.getSavedArticles()
      .then(res => {
        console.log(res.data)
        return this.setState({savedArticles: res.data})
      })
      .catch(err => console.log(err))
  }
  
  // Handle input change 
  handleInputChange = (event) => {
    const {name, value} = event.target
     
    this.setState({
      [name]: value
    })
  }

  // when submit is pressed, do this
  handleSubmit = (event) => {
    event.preventDefault();
    
    let limit = this.state.limit;
    // let start = new Date(this.state.startYear);
    // let end = new Date(this.state.endYear);
    API.getArticles(this.state.searchTerm)
      .then(results => {
      this.setState({articles: results.data.response.docs.slice(0, limit),
      searchTerm: ''})})
      .catch(err => console.warn(err));
  }

  handleClear = (event) => {
    event.preventDefault();

    this.setState({articles: []})

  }

  saveArticle = (articleObj) => {
    API.saveArticle(articleObj)
      .then(res => {
        this.setState({savedArticles: [...this.state.savedArticles, res.data]})
      })
      .catch(err => console.warn(err)) 
  }

  removeArticle = (id) => {
    API.removeSavedArticle(id)
      .then(res => this.getSaved())
      .catch(err => console.warn(err))
  }

  render() {
    console.log(this.state.savedArticles)
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
            articles={this.state.articles}
            savedArticles={this.state.savedArticles}
            saveArticle={this.saveArticle}
            removeArticle={this.removeArticle}
          />

        </div>
      </div>   
    )
  }
}

export default Search