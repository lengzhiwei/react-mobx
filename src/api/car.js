import '../axios/index'
import request from '../axios/index'
const getBrandList = function (name) {
    return request({
      url: `cxdq/brand?key=f8499c098afe54c6d741408f79f36ad2&first_letter=${name || ''}`,
      method: 'get'
    })
  }
  const getSeriesByBrand = function (brand,level) {
    return request({
      url: `cxdq/series?key=f8499c098afe54c6d741408f79f36ad2&brandid=${brand}&levelid=${level || ''}`,
      method: 'get'
    })
  }
  const getCarBySeries = function (id,year) {
    return request({
      url: `cxdq/models?key=f8499c098afe54c6d741408f79f36ad2&series_id=${id}&year=${year || ''}`,
      method: 'get'
    })
  }
export default {
  getBrandList,
  getSeriesByBrand,
  getCarBySeries
}