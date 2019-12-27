import LoginStore from "./loginStore";
import HotList from "./hotList";
import Discover from "./discover";
let hotList = new HotList();
let loginStore = new LoginStore();
let discover = new Discover();
const stores = {
  loginStore,
  hotList,
  discover
};
/// 默认导出接口
export default stores;
