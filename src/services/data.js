import axios from 'axios'

const baseUrl = 'http://localhost:3002/data'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const update = async (id, objectRequest) => {
  const response = await axios.put(`${baseUrl}/${id}`, objectRequest)
  return response.data
}

export default { getAll, update }