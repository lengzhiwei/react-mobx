import React, { Component } from 'react';
import './index.scss'
// import PropTypes from 'prop-types';
import Slideshow from '../../components/Slideshow/index'
class index extends Component {
    render() {
        return (
            <div className='contentBox'>
                <Slideshow/>
            </div>
        );
    }
}

export default index;