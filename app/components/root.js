import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import HomePage from './HomePage';

const Root = () => {
  return (
    <div>
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
          <li>
            <NavLink to="/example2" activeClassName="active" id="exampleLink2">
              Example 2
            </NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <div id="homepageRoutes">
          <Switch>
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </main>
    </div>
  );
};

export default Root;
