import {
    observable,
    action
  } from "mobx";
  import discover from '../api/discover'
  class Discover {
    @observable searchText = '';
    @observable bannerList = [];
    @observable recomdList = []
    @action.bound async getRecommendplaylist(){
      try{
        const res = await discover.getPersonalized();
        return this.getplaylistSuccess(res);
      } catch(error){
        return this.getplaylistFail(error)
      }
    }
    @action.bound getplaylistSuccess(response) {
      if(response && response.result.length > 0){
          console.log(response.result)
        this.recomdList = response.result
      }
      return Promise.resolve(response);
    }
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
    @action.bound getplaylistFail(Error){
      return Promise.reject(Error);
    }
    @action.bound getBannerListSuccess(response) {
      if(response && response.banners.length > 0){
        this.bannerList = response.banners
      }
      return Promise.resolve(response);
    }
  }

  export default Discover;
