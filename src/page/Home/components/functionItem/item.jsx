import React, {Component} from 'react';
import './item.scss'
import { withRouter, RouteComponentProps } from 'react-router';
import { PropTypes as MobxPropTypes } from "mobx-react";

class Item extends Component {
    // static propTypes = {
    //     info: MobxPropTypes.observableObject.isRequired,
    //     // router: MobxPropTypes.observableObject.isRequired,
    // };
    navToFunc = (path)=>{
        console.log(path)
        this.props.history.push(path)
    }
    render() {
        const {name,useCount,introduce,path} = this.props.info
        return (
           <div>
               <div className='func-item' onClick={()=>this.navToFunc(path)}>
                   <h3 className='func-name'>{name}</h3>
                   <p className='use-count'>{useCount}次调用</p>
               </div>
               <p className='func-introduce'>{introduce}</p>
           </div>
        );
    }
}

export default (withRouter(Item));
