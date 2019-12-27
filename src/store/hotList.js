import {
    observable,
    action
  } from "mobx";
  import login from '../api/login'
  class HotList {
    @observable hotArr = [];
    @observable name = 'lengzhiwei'
    @action.bound async getHotwallList() {
      try {
        const response = await login.hotwallList();
        return this.gethotwallListSuccess(response);
      } catch (error) {
        return this.gethotwallListFail(error);
      }
    }
    @action.bound gethotwallListFail(Error){
      alert(JSON.stringify(Error))
      return Promise.reject(Error);
    }
    @action.bound gethotwallListSuccess(response) {
      if(response && response.data.length > 0){
        this.hotArr = response.data
      }
      return Promise.resolve(response);
    }
  }

  export default HotList;
