import api from './init'

// Read: list
export function list() {
    return api.get('/movies')
        .then(res => res.data)
}