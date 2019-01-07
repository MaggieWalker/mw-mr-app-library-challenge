import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import Navbar from './Navbar'

const Root = () => {
  return (
    <div>
      <Navbar />
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
