import axios from 'axios'

export const DataService = {
  fetchCarsList,
}

function fetchCarsList() {
  return axios.get('https://www.mocky.io/v2/5eb553df31000060006994a8')
}
