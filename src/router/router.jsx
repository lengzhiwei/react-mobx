import React, { Component, Fragment } from "react";
import { HashRouter,Route } from "react-router-dom";
import Test from '../page/test/index'
import Car from '../page/car/index'
import Home from '../page/Home/index'
import CityWeather from '../page/func/cityWeather/index'
class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Fragment>
          <Route exact  path={`/`} component={Home} />
          <Route exact  path={`/car`} component={Car} />
          <Route path={`/test`}  component={Test} />
          <Route path={`/cityWeather`}  component={CityWeather} />
        </Fragment>
      </HashRouter>
    );
  }
}
export default Router;
