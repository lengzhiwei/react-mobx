import {
  observable,
  action
} from "mobx";
import car from '../api/car'
class loginStore {
  @observable keyword = '';

  @observable brandList = [];
  @observable seriesList = [];
  @observable carsList = [];

  @action.bound async getBrandListData(params) {
    try {
      const result = await car.getBrandList(params)
      return this.getSuccess(result);
    } catch (err) {
      return this.getFail(err);
    }
  }
  @action.bound async getSeriesListData(params) {
    try {
      const result = await car.getSeriesByBrand(params)
      this.seriesList = result.result || []
    } catch (err) {
      return err
    }
  }
  getCarBySeries
  @action.bound async getCarListData(id) {
    try {
      const result = await car.getCarBySeries(id)
      this.carsList = result.result || []
    } catch (err) {
      return err
    }
  }
  @action.bound getFail(err) {
    this.brandList = err
    return Promise.reject(err);
  }
  @action.bound getSuccess(response) {
    this.brandList = response.result || []
    return Promise.resolve(response);
  }
}

export default loginStore;