import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.scss";
export default class hotItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { item } = this.props
    return (
    <div>
        <h3 className='songTitle'>{item.simpleResourceInfo.name} 歌手:{item.simpleResourceInfo.artists.name}</h3>
        <p className='songIntroduce'>
           简介: { item.content }
        </p>
        <img src={item.simpleResourceInfo.songCoverUrl} alt="封面"/>
    </div>
    )
  }
}
