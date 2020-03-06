import '../axios/index'
import request from '../axios/index'
const getWeatherByName = function (name) {
    return request({
        url: `/weather/forecast/${name}`,
        method: 'get'
    })
}
export default {
    getWeatherByName
}
