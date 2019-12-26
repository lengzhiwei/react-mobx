import React, { Component, Fragment } from "react";
import { HashRouter,Route } from "react-router-dom";
import Login from '../page/Login/index'
import LonginWithPhone from '../page/loginWithPhone/index'
class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Fragment>
          <Route exact  path={`/`} component={Login} />
          <Route path={`/loginWithPhone`}  component={LonginWithPhone} />
        </Fragment>
      </HashRouter>
    );
  }
}
export default Router;
