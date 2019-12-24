import React, { Component } from "react";
import { observer, inject } from "mobx-react";
@inject("homeStore")
@observer
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <h1>首页</h1>
                <p>首页数据为:{this.props.homeStore.homeNum}</p>
                <button onClick={() => {this.props.homeStore.addNum()}} >+</button>
                <button onClick={()=>{this.props.homeStore.lessNum()}}>-</button>
                <button onClick={() => { this.props.history.push("/one");}}>
                    跳转到第一个页面
                </button>
            </div>
        );
    }
}
export default Home
