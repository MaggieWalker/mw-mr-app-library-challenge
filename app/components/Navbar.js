import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = ()=> (
    <nav>
        <NavLink to="/" activeClassName="active" id="homepage">
          Welcome!
        </NavLink>
        <ul id="navlinks">
          <li>
            <NavLink to="/example1" activeClassName="active" id="exampleLink1">
              Example 1
            </NavLink>
          </li>
        </ul>
        <hr></hr>
    </nav>

)

export default Navbar
