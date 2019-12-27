import {
  observable,
  action
} from "mobx";
import login from '../api/login'
class loginStore {
  @observable phone = '';
  @observable password = '';
  @observable loginRes = {};
  @observable hotList = [];
  @observable info = {}
  @action addNum() {
    this.homeNum += 1;
    this.arr.push(this.homeNum)
    // this.dNum = this.doubleNUm
  }
  @action lessNum() {
    this.homeNum -= 1;
  }
  @action.bound async loginWithPhone(params) {
    try {
      const result = await login.phoneLogin({
        phone: params.phone,
        password: params.password
      })
      return this.loginSuccess(result);
    } catch (err) {
      return this.loginFail(err);
    }
  }
  @action.bound loginFail(err) {
    this.loginRes = err
    return Promise.reject(err);
  }
  @action.bound loginSuccess(response) {
    this.loginRes = response
    return Promise.resolve(response);
  }
  // @action.bound async getHotwallList() {
  //   try {
  //     const List = await login.hotwallList().then(res => {
  //       return res
  //     })
  //     this.hotList = List
  //   } catch {
  //     console.log('-------err-----')
  //     console.log('-------err-----')
  //   }
  // }
  @action.bound async getUserInfo(){
    try{
      const info = await login.userDetails(this.loginRes.uid)
      this.userInfo = info
    } catch(err){

    }
  }
}

export default loginStore;