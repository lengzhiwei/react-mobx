import { observable,action} from "mobx";
import login from '../api/login'
class loginStore {
  @observable phone = '';
  @observable password = '';
  @observable res = [];
  @action addNum() {
    this.homeNum += 1;
    this.arr.push(this.homeNum)
    // this.dNum = this.doubleNUm
  }
  @action lessNum() {
    this.homeNum -= 1;
  }
  @action.bound async loginWithPhone(params) {
    try{
        const result = await login.phoneLogin({phone:params.phone,password:params.password})
        console.log(result)
        if(result.code === 400){
        alert('请输入正确的数据')
       } else {
        return this.loginSuccess(result);
       }
    } catch (err) {
      alert('请输入正确的数据1')
        console.log(err)
    }
  }
  @action.bound loginSuccess(response){
    this.res = response
  }
}

export default loginStore;
