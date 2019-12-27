import {
    observable,
    action
  } from "mobx";
  import discover from '../api/discover'
  class Discover {
    @observable searchText = '';
    @observable bannerList = [];
    @action.bound async getBannerList() {
      try {
        const response = await discover.getBanner();
        return this.getBannerListSuccess(response);
      } catch (error) {
        return this.getBannerListFail(error);
      }
    }
    @action.bound getBannerListFail(Error){
      return Promise.reject(Error);
    }
    @action.bound getBannerListSuccess(response) {
      if(response && response.banners.length > 0){
          console.log(response.banners)
        this.bannerList = response.banners
      }
      return Promise.resolve(response);
    }
  }

  export default Discover;
