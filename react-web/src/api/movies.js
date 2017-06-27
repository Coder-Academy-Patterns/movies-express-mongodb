<<<<<<< HEAD
import api from './init'

// Read: list
export function list() {
    return api.get('/movies')
        .then(res => res.data)
=======
import axios from './init'

export function list() {
    return axios.get('/movies').then(res => res.data)
}

export function create({ title, yearReleased, description }) {
    return axios.post('/movies', {
        title, yearReleased, description
    }).then(res => res.data)
>>>>>>> fa54ddc6523ce569354107605c38b75db3326eb4
}