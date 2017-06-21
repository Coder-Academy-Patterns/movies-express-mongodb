import fetchJSON from './fetchJSON'
import { setToken } from './token'

export const signIn = ({ email, password }) => (
  fetchJSON('/auth', {
    method: 'POST',
    body: { email, password }
  })
  .then(({ token }) => {
    setToken(token)
  })
)

export const register = ({ email, password }) => (
  fetchJSON(`/auth/register`, {
    method: 'POST',
    body: { email, password }
  })
)
