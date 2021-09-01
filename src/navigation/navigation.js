import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../pages/home/home';
import Store from '../pages/home/store';
import About from '../pages/home/about';
import SearchPage from '../pages/home/searchPage';
function NavigationContainer() {
  //wrapper to the parent component
    return (
        <div>
     <Router>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/searchPage">
            <SearchPage/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/store">
            <Store />
          </Route>
        </Switch>
      </Router>
        </div>
    )
}

export default NavigationContainer;
