import api from '@/api'
import axios from 'axios'

function getList () {
  return axios.get(api.iconfont.list)
}

export default {
  getList
}
