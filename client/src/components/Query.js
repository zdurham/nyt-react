import React from 'react';

const Query = (props) => {
  return (
    <div className='panel panel-default'>
      <div className='panel-heading'>
        <h3 className='panel-title'>Search Parameters</h3>
      </div>
      <div className='panel-body'>
        <form>
          <div className='form-group'>
            <label for='searchTerm'>Search Term</label>
            <input 
              type='text'
              className='form-control'
              value={props.searchTerm}
              onChange={props.handleInputChange}
              name='searchTerm'
              placeholder='Search Term'
            />
          </div>
          <div className='form-group'>
            <label for='limit'>Number of Results to Return</label>
            <select name='limit' value={props.limit} className="form-control" onChange={props.handleInputChange}>
              <option>1</option>
              <option>5</option>
              <option>10</option>
            </select>
          </div>
          <div className='form-group'>
            <label for='startYear'>Start Year</label>
            <input 
              type='text'
              className='form-control'
              value={props.startYear}
              onChange={props.handleInputChange}
              name='startYear'
            />
          </div>
          <div className='form-group'>
            <label for='endYear'>End Year</label>
            <input 
              type='text'
              className='form-control'
              value={props.endYear}
              onChange={props.handleInputChange}
              name='endYear'
            />
          </div>
          <button className='btn' onClick={props.handleSubmit}>
            Submit
          </button>
          <button className='btn' onClick={props.handleClear}>
            Clear Results
          </button>
        </form>
      </div>
    </div>
  )
}

export default Query