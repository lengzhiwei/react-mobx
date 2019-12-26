import React, { Component } from "react";
import PropTypes from "prop-types";
import './index.scss'
import {Modal} from 'antd'
const { confirm } = Modal;
export default class NewsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "lengzhiwei"
    };
  }
  showConfirm = (title,url)=> {
    confirm({
      title: '确定要离开本页面嘛?',
      content: `将要跳转到${title}的详情页面`,
      onOk() {
        window.location.href = url
      },
      onCancel() {},
    });
  }
  render() {
    const { news } = this.props
    return (
        <div>   
             {
            news.map(item=>{
                return (
                    <div key={item.uniquekey} className='content'>
                        <p>作者:{item.author_name} 日期:{item.date}</p>
                        <p>{item.title}</p>
                        {/* <p><a href={item.url}>{item.title}</a></p> */}
                        <p onClick={()=>this.showConfirm(item.title,item.url)}>{item.title}</p>
                    </div>
                )
            })
        }
        </div>
        
    );
  }
}
NewsItem.propTypes = {
    news: PropTypes.array.isRequired
};
