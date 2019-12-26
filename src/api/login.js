import '../axios/index'
import axios from '../axios/index'
const phoneLogin = (params)=>{
    axios.get(`/api/login/cellphone?phone=${params.phone}&password=${params.password}`)
}
export default {
    phoneLogin
}