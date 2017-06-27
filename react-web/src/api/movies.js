import api from './init'

export function list() {
    return api.get('/movies').then(res => res.data)
}

export function create({ title, yearReleased, description }) {
    return api.post('/movies', {
        title, yearReleased, description
    }).then(res => res.data)
}