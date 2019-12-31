import React, { Component } from "react";
import { Carousel } from "antd";
import { inject, observer, PropTypes as MobxPropTypes } from "mobx-react";
import "./index.scss";
@inject("discover")
@observer
class Slideshow extends Component {
  static propTypes = {
    discover: MobxPropTypes.observableObject.isRequired
  };
  state = {
    imgHeight: 200
  };
  async componentDidMount() {
    await this.props.discover.getBannerList();
  }
  onChange = (a, b, c) => {
    // console.log(a, b, c);
  };
  render() {
    const { bannerList } = this.props.discover;
    return (
      <div className="bannerBox">
        <Carousel afterChange={this.onChange} autoplay easing dots>
          {bannerList.map(banner => {
            return (
              <img
                src={banner.pic}
                key={banner.bannerId}
                alt="banner"
                className="banner"
              />
            );
          })}
        </Carousel>
      </div>
    );
  }
}

Slideshow.propTypes = {};

export default Slideshow;
