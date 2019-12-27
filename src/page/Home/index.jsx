import React, { Component } from "react";
import { inject, observer, PropTypes as MobxPropTypes } from "mobx-react";
import ReactRouterPropTypes from "react-router-prop-types";
import { Tabs, WhiteSpace, Badge } from "antd-mobile";
// import { StickyContainer, Sticky } from 'react-sticky';
import Discover from "../Discover/index";
import "./index.scss";
@inject("loginStore")
@observer
class Home extends Component {
  static propTypes = {
    loginStore: MobxPropTypes.observableObject.isRequired,
    history: ReactRouterPropTypes.history.isRequired
  };
  render() {
    const tabs = [
      { title: "我的", sub: "1" },
      { title: "发现", sub: "2" },
      { title: "热门", sub: "3" }
    ];
    return (
      <div>
        <WhiteSpace />
        <Tabs
          tabs={tabs}
          initialPage={1}
          onChange={(tab, index) => {
            console.log("onChange", index, tab);
          }}
          onTabClick={(tab, index) => {
            console.log("onTabClick", index, tab);
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "150px",
              backgroundColor: "#fff"
            }}
          >
            Content of first tab
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "150px",
              backgroundColor: "#fff"
            }}
          >
            <Discover />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "150px",
              backgroundColor: "#fff"
            }}
          >
            Content of third tab
          </div>
        </Tabs>

        <WhiteSpace />
      </div>
    );
  }
}
export default Home;
