import React, { Component, Fragment } from 'react'
import './index.scss'
import { inject, observer, PropTypes as MobxPropTypes } from "mobx-react";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
@inject('discover')
@observer
class Recommendplaylist extends Component {
    static propTypes = {
        discover: MobxPropTypes.observableObject.isRequired
    };
    recondItemClick= (id)=>{
        console.log(id)
    }
    render() {
        const { recomdList } = this.props.discover
        return (
            <Fragment>
                <div className='recomdTitle'>

                <h4 className='discoverTitle'>推荐歌单</h4>
                <Link to='/' class='moreplaylist'>更多歌单&nbsp;</Link>

                </div>
                <div className='recomdListBox'>
                    {
                        recomdList.map(item => {
                            return (
                                <div className='recomdItem' key={item.id} onClick={()=>this.recondItemClick(item.id)}>
                                    <div className='imgBack' style={{ backgroundImage: 'url(' + item.picUrl + ')' }}>
                                        <span className='playNum'>
                                            {item.playCount >=10000 ?item.playCount.toString().slice(0,4)+ '万' : item.playCount}
                                        </span>
                                        
                                    </div>
                                    <p className='listName'>
                                            {item.name}
                                        </p>
                                </div>
                            )
                        })
                    }
                </div>
            </Fragment>
        )
    }
}
export default Recommendplaylist;