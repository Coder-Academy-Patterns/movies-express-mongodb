import axios from 'axios'

export function signIn({ email, password }) {
    return axios.post('/auth', {
        email,
        password
    }).then(res => res.data)
}

export function register({ email, password }) {
    return axios.post('/auth/register', {
        email,
        password
    }).then(res => res.data)
}
