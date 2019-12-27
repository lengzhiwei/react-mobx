import React, { Component } from "react";
import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react';
import ReactRouterPropTypes from 'react-router-prop-types';
import HotItem from './hotItem'
import './index.scss'
// import Item from "antd/lib/list/Item";
@inject("hotList")
@observer
class HotList extends Component {
  static propTypes = {
    hotList:MobxPropTypes.observableObject.isRequired,
    history: ReactRouterPropTypes.history.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
      this.props.hotList.getHotwallList()
  }
  render() {
    return (
       <div>
        {
        this.props.hotList.hotArr.map(Item=>{
            return <HotItem item = {Item} key={Item.id}/>
        })
        }
      </div>
    );
  }
}
export default HotList;
