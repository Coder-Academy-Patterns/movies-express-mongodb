import { readToken } from './token'

function sendJSONOptions({ method, body, headers }) {
  const token = readToken()
  return {
    method,
    body: JSON.stringify(body),
    headers: Object.assign(
      {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      !!token ? {
        'Authorization': `JWT ${token}`
      } : null,
      headers
    )
  }
}

export default (path, options) => fetch(path, options ? sendJSONOptions(options) : null).then(res => res.json())
