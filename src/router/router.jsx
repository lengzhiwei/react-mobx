import React, { Component, Fragment } from "react";
import { HashRouter,Route } from "react-router-dom";
import Test from '../page/test/index'
import Car from '../page/car/index'
import Home from '../page/home'
class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Fragment>
          <Route exact  path={`/`} component={Home} />
          <Route exact  path={`/car`} component={Car} />
          <Route path={`/test`}  component={Test} />
        </Fragment>
      </HashRouter>
    );
  }
}
export default Router;
