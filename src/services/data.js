import axios from 'axios'

const baseUrl = 'http://localhost:3002/data'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default { getAll }