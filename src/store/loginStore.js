import { observable,action} from "mobx";
import loginApi from '../api/login'
class loginStore {
  @observable homeNum = 0;
  @observable dNum = 0
  @observable arr = [];
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
        const res = await loginApi.phoneLogin({phone:'18349692538',password:'leng598930'})
        console.log(res)
    } catch (err) {
        console.log(err)
    }
  }
}

export default loginStore;
