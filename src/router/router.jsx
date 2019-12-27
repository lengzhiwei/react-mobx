import React, { Component, Fragment } from "react";
import { HashRouter,Route } from "react-router-dom";
import Login from '../page/Login/index'
import LonginWithPhone from '../page/loginWithPhone/index'
import HotList from '../page/HotList/index'
import Home from '../page/Home/index'
class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Fragment>
          <Route exact  path={`/`} component={Login} />
          <Route path={`/loginWithPhone`}  component={LonginWithPhone} />
          <Route path={`/hotList`}  component={HotList} />
          <Route path={`/home`}  component={Home} />
        </Fragment>
      </HashRouter>
    );
  }
}
export default Router;
