import '../axios/index'
import request from '../axios/index'
// const phoneLogin = (params)=>{
//     request.get(`/api/login/cellphone?phone=${params.phone}&password=${params.password}`).then(res=>{
//         console.log(res)
//         return res
//     })
// }
const phoneLogin = function (params) {
    return request({
      url: `/api/login/cellphone?phone=${params.phone}&password=${params.password}`,
      method: 'get'
    })
  }

export default {
    phoneLogin
}