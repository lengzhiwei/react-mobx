import React, {Component} from 'react';
import './header.scss'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='container'>
                    <div className='top-line'>
                        <div className='logo-content'>
                            <img className='logo' src={require('../../../../static/image/wlq.jpg')} alt="logo"/>
                        </div>
                        <div className='nav'>
                            <p className='nav-item'>
                                <a href="https://www.mxnzp.com/" title='外链'>API来源</a>
                            </p>
                            <p className='nav-item'>
                                <a href="https://www.mxnzp.com/" title='外链'>API来源</a>
                            </p>
                            <p className='nav-item'>
                                <a href="https://www.mxnzp.com/" title='外链'>API来源</a>
                            </p>
                            <p className='nav-item'>
                                <a href="https://www.mxnzp.com/" title='外链'>API来源</a>
                            </p>
                        </div>
                    </div>
                    <div className='total'>
                        <h1>RollToolsApi，开放易用的接口服务</h1>
                        <p>已累计提供服务 54682040 次</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
