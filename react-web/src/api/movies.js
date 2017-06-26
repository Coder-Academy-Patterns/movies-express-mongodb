import axios from './init'

export function list() {
    return axios.get('/movies').then(res => res.data)
}

export function create({ title, yearReleased, description }) {
    return axios.post('/movies', {
        title, yearReleased, description
    }).then(res => res.data)
}