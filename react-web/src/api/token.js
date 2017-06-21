import decodeJWT from 'jwt-decode'

const authTokenKey = 'authToken'

export function readToken() {
  return localStorage.getItem(authTokenKey)
}

export function readDecodedToken() {
  try {
    const encodedToken = readToken()
    return decodeJWT(encodedToken)
  }
  catch (error) {
    return null
  }
}

export function setToken(encodedToken) {
  localStorage.setItem(authTokenKey, encodedToken)
}
