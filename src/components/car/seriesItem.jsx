import React, { Component } from "react";
import { inject, observer, PropTypes as MobxPropTypes } from "mobx-react";

import './seriesItem.scss'
import {  Drawer } from "antd";
@inject("carStore")
@observer
class seriesItem extends Component {
  static propTypes = {
    series: MobxPropTypes.observableObject.isRequired,
    carStore: MobxPropTypes.observableObject.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
        closable:false
    };
  }
  handelClick = (id)=>{
        this.props.seriesOnClick(id)
        this.setState({closable:true})
  }
  onChildrenDrawerClose = ()=>{
    this.setState({closable:false})
  }
  render() {
    const { name,levelname,id } = this.props.series;
    const {closable} = this.state
    return (
      <div id='series-content'>
        <div className="item-content" onClick={()=>this.handelClick(id)}>
          <span className='brand-name'>{name}</span>
          <span className='first-letter'>{levelname}</span>
        </div>
        <Drawer
            title="车型列表"
            width={320}
            closable={false}
            onClose={this.onChildrenDrawerClose}
            visible={closable}
          >
            {
                    this.props.carStore.carsList.map(item=>{
                return <p key={item.id}>{item.name}</p>
                })
            }
          </Drawer>
      </div>
    );
  }
}
export default seriesItem;
