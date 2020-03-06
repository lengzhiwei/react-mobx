import React, { Component } from "react";
import { inject, observer, PropTypes as MobxPropTypes } from "mobx-react";
import {  Drawer, Input } from "antd";
import ReactRouterPropTypes from "react-router-prop-types";
import "./index.scss";
import BranchItem from '../../components/car/branchItem'
import SeriesItem from '../../components/car/seriesItem'
const {Search} = Input
@inject("carStore")
@observer
class Car extends Component {
  static propTypes = {
    carStore: MobxPropTypes.observableObject.isRequired,
    history: ReactRouterPropTypes.history.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      drawerVisible:false,
      brandId:0
    };
  }
  onClose = () => {
    this.setState({
      drawerVisible: false,
    });
  };
  componentDidMount() {
    this.props.carStore.getBrandListData();
  }
  valueChange = (value)=>{
    this.props.carStore.getBrandListData(value)
  }
  brandOnClick = (id)=>{
    console.log(id)
    this.props.carStore.getSeriesListData(id,'')
    this.setState({
      drawerVisible: true,
      brandId:id
    })
  }
  handelSeriesClick = (id,year)=>{
    console.log(id,year)
    this.props.carStore.getCarListData(id)
  }
  render() {
    return (
      <div>
        <div className='searchCar'>
        <Search placeholder="请输入品牌首字母" onSearch={value => this.valueChange(value)} enterButton />
        </div>
        <div>
          {
            this.props.carStore.brandList.map(item=>{
             return <BranchItem key={item.id} carItem={item} brandOnClick = {(carId)=>this.brandOnClick(carId)}></BranchItem>
            })
          }
        </div>
        <Drawer
          title="车系列表"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.drawerVisible}
          getContainer={false}
          style={{ position: 'absolute' }}
        >
          <div>
          {
            this.props.carStore.seriesList.map(item=>{
             return <SeriesItem series = {item} key={item.id} seriesOnClick={(id,year)=>this.handelSeriesClick(id,year)}></SeriesItem>
            })
          }
          </div>
        </Drawer>
      </div>
    );
  }
}
export default Car;
