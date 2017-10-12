import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar navbar-default navbar-fixed-top'>
      <div className='container-fluid nav'>
        <ul className='nav'>
          <li>
            <NavLink exact activeClassName='active' to='/'>
              <img src={require('../images/nyt-logo.png')} className='image' alt='logo'/>
            </NavLink>
          </li>
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