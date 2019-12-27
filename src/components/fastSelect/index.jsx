import React, { Component } from 'react';
import { inject, observer, PropTypes as MobxPropTypes } from "mobx-react";
import "./index.scss";
@inject("discover")
@observer
class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            btn: [
                {
                    title: '每日推荐',
                    path: '/dailySpecial'
                },
                {
                    title: '歌单',
                    path: '/dailySpecial'
                },
                {
                    title: '排行榜',
                    path: '/dailySpecial'
                },
                {
                    title: '电台',
                    path: '/dailySpecial'
                },
                {
                    title: '直播',
                    path: '/dailySpecial'
                }
            ]
        }
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}



export default index;