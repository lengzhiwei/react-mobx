import React, { Component, Fragment } from "react";
import "./index.scss";

class MusicTypeList extends Component {
  itemClick = id => {
    console.log(id);
    const path = this.filter(item=>{
        if(item.id === id){
            return item.path
        }
    })
  };
  constructor(){
      super()
      this.state = {
        list : [
            {
              name: "每日推荐",
              path: "/",
              id: 1
            },
            {
              name: "歌单",
              path: "/",
              id: 2
            },
            {
              name: "排行榜",
              path: "/",
              id: 3
            },
            {
              name: "电台",
              path: "/",
              id: 4
            },
            {
              name: "直播",
              path: "/",
              id: 5
            }
          ]
      }
  }
   
  render() {
    
    return (
      <Fragment>
        <div className="musicTypeBox">
          {this.state.list.map(item => {
            return (
              <span
                onClick={() => this.itemClick(item.id)}
                key={item.id}
                className="typeItem"
              >
                {item.name}
              </span>
            );
          })}
        </div>
      </Fragment>
    );
  }
}
export default MusicTypeList;
