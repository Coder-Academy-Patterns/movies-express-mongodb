import fetchJSON from './fetchJSON'

export const collection = () => fetchJSON('/movies')
export const single = (id) => fetchJSON(`/movies/${id}`)
