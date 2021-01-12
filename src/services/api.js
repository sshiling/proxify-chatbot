import axios from 'axios'

export default class ApiService {
  constructor() {
    axios.defaults.baseURL = '/'
  }

  get (url, config) {
    return axios.get(url, config)
      .then(res => res)
      .catch(e => console.error(e))
  }
}
