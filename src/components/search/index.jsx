import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
class Search extends Component {
    static propTypes = {
        
    }
    render() {
        return (
            <div>
                <Input placeholder="Basic usage" />
            </div>
        );
    }
}

Search.propTypes = {

};

export default Search;
