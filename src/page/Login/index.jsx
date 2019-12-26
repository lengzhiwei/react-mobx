import React, { Component } from "react";
import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react';
import ReactRouterPropTypes from 'react-router-prop-types';
import './index.scss'
@inject("loginStore")
@observer
class Login extends Component {
  static propTypes = {
    loginStore:MobxPropTypes.observableObject.isRequired,
    history: ReactRouterPropTypes.history.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
    // this.phoneLogin()
    console.log('sss')
  }
  async phoneLogin(){
    try {
      await this.props.loginStore.loginWithPhone(null);
    } catch (err){
      console.log(err)
    }
  }
  toLoginPhone = ()=>{
    console.log('sss')
      this.props.history.push('/loginWithPhone')
  }
  render() {
    return (
       <div className='login'>
         <div className='logo'>
           <img src={require('../../static/image/logo.jpg')} alt="logo"/>
         </div>
        <div className='loginWay'>
          <div className='loginWithPhone' onClick={()=> this.toLoginPhone()}>
              手机号登录
          </div>
          <div className='experience'>
              立即体验
          </div>
        </div>
      </div>
    );
  }
}
export default Login
