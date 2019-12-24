import React, { Component } from "react";
class One extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <h1>页面一</h1>
                <button onClick={() => { this.props.history.push("/");}}>
                    跳转到首页
                </button>
            </div>
        );
    }
}
export default One
