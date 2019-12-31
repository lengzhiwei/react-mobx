import '../axios/index'
import request from '../axios/index'
// const phoneLogin = function (params) {
//     return request({
//       url: `/api/login/cellphone?phone=${params.phone}&password=${params.password}`,
//       method: 'get'
//     })
//   }
const getBanner = function (params) {
    return request({
        url: `/api/banner?type=2`,
        method: 'get'
    })
}
const getPersonalized = function () {
    return request({
        url: `/personalized?limit=9`,
        method: 'get'
    })
}
export default {
    getBanner,
    getPersonalized
}