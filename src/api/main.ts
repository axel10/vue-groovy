import request from '../utils/request'
import {rendomNum} from '@/utils/utils'


export default {
  getFiles() {
    return request.get('/data/result.json?' + rendomNum(10))
  },
  getMusic(path: string) {
    return request.get(path)
  },
  register(data) {
    return request.post('https://localhost:44374/user/register', data)
  },

  login(data) {
    return request.post('https://localhost:44374/user/login', data)
  },
}
