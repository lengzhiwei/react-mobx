import React, { Component } from "react";
import './index.scss'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { inputValue: localStorage.getItem('inputValue') };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { inputValue } = this.state;
        return (
            <div className="persistent-form">
                <input type="text" value={inputValue}
                    onChange={this.handleChange} />
                <button onClick={this.handleClick}>Save to storage</button>
            </div>
        );
    }

    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    handleClick() {
        localStorage.setItem('inputValue', this.state.inputValue);
    }
}
export default Login
