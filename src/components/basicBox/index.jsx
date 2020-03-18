import React, {Component} from 'react';
import './index.scss'
class BasicBox extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='MaincContentBox'>
                <div className='funcName'>
                    {this.props.funcName}
                </div>
                {
                                     this.props.children
                }
            </div>
        );
    }
}
export default BasicBox
