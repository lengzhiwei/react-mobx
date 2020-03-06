import React, { Component } from "react";
import { PropTypes as MobxPropTypes } from "mobx-react";
import './branchItem.scss'
class branchItem extends Component {
  static propTypes = {
    carItem: MobxPropTypes.observableObject.isRequired
  };
  handelClick = (id)=>{
        this.props.brandOnClick(id)
  }
  render() {
    const { brand_name, first_letter, brand_logo } = this.props.carItem;
    return (
      <div>
        <div className="item-content" onClick={()=>this.handelClick(this.props.carItem.id)}>
            <img src={brand_logo} alt="logo" className='logo'/>
          <span className='brand-name'>{brand_name}</span>
          <span className='first-letter'>{first_letter}</span>
        </div>
        
      </div>
    );
  }
}

export default branchItem;
