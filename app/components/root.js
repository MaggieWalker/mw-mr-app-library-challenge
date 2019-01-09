import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import SearchNumber from './SearchNumber';
import SearchKeyword from './SearchKeyword';
import Navbar from './Navbar';
import Browse from './Browse';
import SingleBook from './SingleBook';

const Root = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id="homepageRoutes">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/number" component={SearchNumber} />
            <Route exact path="/keyword" component={SearchKeyword} />
            <Route exact path="/browse" component={Browse} />
            <Route exact path="/book/:isbn" component={SingleBook} />
          </Switch>
        </div>
      </main>
    </div>
  );
};

export default Root;
