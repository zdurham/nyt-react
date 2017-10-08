import React from 'react'
import ResultItem from './ResultItem'

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
              title={article.headline.main}
              date={article.pub_date}
              link={article.web_url}
              saveArticle={props.saveArticle}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Results