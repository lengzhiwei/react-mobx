import '../axios/index'
import request from '../axios/index'
export function getWeatherByName(name) {
    return request({
        url: `/weather/forecast/${name}`,
        method: 'get'
    })
}
// export {
//     getWeatherByName
// }
