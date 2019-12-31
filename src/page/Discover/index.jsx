import React, { Component } from 'react';
import { inject, observer, PropTypes as MobxPropTypes } from "mobx-react";
import './index.scss'
// import PropTypes from 'prop-types';
import Slideshow from '../../components/Slideshow/index'
import MusicType from '../../components/musicTypeList/index'
import Recommendplaylist from '../../components/Recommendplaylist/index'
@inject('discover')
@observer
class index extends Component {
    static propTypes = {
        discover: MobxPropTypes.observableObject.isRequired
      };

    async componentDidMount() {
        await this.props.discover.getRecommendplaylist();
      }
    render() {
        return (
            <div className='contentBox'>
                <Slideshow/>
                <MusicType/>
                <Recommendplaylist list={this.props.discover.recomdList}/>
            </div>
        );
    }
}

export default index;