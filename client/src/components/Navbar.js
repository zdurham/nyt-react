import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <ul className='nav'>
          <li>
            <NavLink exact activeClassName='active' to='/'>
              Search
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName='active' to='/saved'>
              Saved
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar