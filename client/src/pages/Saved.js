import React from 'react'
import API from '../utils/API'
import ResultItem from '../components/ResultItem'
import Delete from '../components/buttons/Delete'
import Jumbotron from '../components/Jumbotron'

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

  removeArticle = (id) => {
    API.removeSavedArticle(id)
      .then(res => this.loadSaved())
      .catch(err => console.warn(err))
  }

  

  render() {
    return (
      <div className='container-fluid content'>
        <Jumbotron />
        <div className='panel panel-default'>
          <div className='panel-heading'>
            <h3 className='panel-title'>Saved Articles</h3>
          </div>
          <div className='panel-body'>
            {this.state.savedArticles.map(article => {
              return (
                <ResultItem
                  id={article._id}
                  title={article.title}
                  date={article.added}
                  link={article.link}
                >
                <Delete
                  id={article._id}
                  removeArticle={this.removeArticle}
                  />
                </ResultItem>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Saved