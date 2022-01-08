export const BASEAPI = process.env.REACT_APP_BASE_API
const token = localStorage.getItem('token') || ''

const api = async (url, method, data) => {
  const result = await fetch(BASEAPI + url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(data),
  })
  return await result.json()
}

export default api
