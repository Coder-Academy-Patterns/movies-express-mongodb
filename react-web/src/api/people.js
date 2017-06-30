import api from './init'

export function list() {
    return api.get('/people').then(res => res.data)
}

export function create({ firstName, lastName }) {
    return api.post('/people', {
        firstName, lastName
    }).then(res => res.data)
}