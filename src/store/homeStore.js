import { observable,action} from "mobx";
import axios from "../axios";
class HomeStore {
  @observable homeNum = 0;
  @observable arr = [];
  @action addNum() {
    this.homeNum += 1;
  }
  @action lessNum() {
    this.homeNum -= 1;
  }
  @action getList() {
    axios.get(`/toutiao/index?type=top&key=82c7615d33b2e95690f923fa03143166`)
      .then(res => {
        console.log(res)
      });
  }
}
export default HomeStore;
