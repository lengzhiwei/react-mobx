import React, { Component } from 'react';
import MyHeader from './components/home/header'
import FuncBody from './components/functionItem/index'
import func from '../../api/func'
import './index.scss'
class index extends Component {
    constructor(props) {
        super(props);
        this.state = { inputValue: localStorage.getItem('inputValue') };
    }
    componentDidMount() {
        func.getWeatherByName('成都市').then(res=>{
            console.log(res)
        })
    }

    render() {
        return (
            <div className='content'>
                <MyHeader></MyHeader>
                <FuncBody></FuncBody>
            </div>
        );
    }
}

export default index;
