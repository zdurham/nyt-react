import React from 'react'
import ResultItem from './ResultItem'
import Save from './buttons/Save'
import Delete from './buttons/Delete'

const Results = (props) => {

  return (
    <div className='panel panel-default'>
      <div className='panel-heading'>
        <h3 className='panel-title'>Results</h3>
      </div>
      <div className='panel-body'>
        {props.articles.map(article => {
          return (
            <ResultItem 
              key={article._id}
              id={article._id}
              title={article.headline.main}
              date={article.pub_date}
              link={article.web_url}>
              {props.savedArticles.find((item) => {
                return item['_id'] === article._id
              }) ? (
                <Delete 
                  id={article._id}
                  title={article.headline.main}
                  date={article.pub_date}
                  link={article.web_url}
                  removeArticle={props.removeArticle}
                />
              ) : (
                <Save 
                  id={article._id}
                  title={article.headline.main}
                  date={article.pub_date}
                  link={article.web_url}
                  saveArticle={props.saveArticle}
                />
              )}
              
            </ResultItem>
          )
        })}
      </div>
    </div>
  )
}

export default Results