import React, {Component} from 'react';
import './index.scss'
import FuncItem from './item'
import {navList} from '../../../../settingData/navList'
console.log()
class Index extends Component {

    render() {
        return (
            <div id='funcNav'>
                <div className='container'>
                    {
                        navList.map(item=>{
                            console.log(item)
                         return <FuncItem info={item} key={item.id}></FuncItem>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Index;
