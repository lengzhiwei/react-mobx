import React, { useState,Fragment } from 'react';
import {getWeatherByName} from "../../../api/func";
import { Input } from 'antd';
import BasicBox from '../../../components/basicBox/index'
const { Search } = Input;
export default()=> {
  // 声明一个叫 “count” 的 state 变量。
  const [city,setCity] = useState('');
  const [weather] = useState({});
  function changeCity(city){
    console.log(city)
    getWeatherByName(city).then(res=>{

    })
  }
  return (
    <Fragment>
      <BasicBox funcName='城市天气查询'>
        <p>You clicked {city} times</p>
        <Search placeholder="input search text" onSearch={value => changeCity(value)} enterButton />
      </BasicBox>
    </Fragment>
  );
}
