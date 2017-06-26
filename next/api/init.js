import axios from 'axios'

console.log('env', process.env)

export default axios.create({
    baseURL: process.env.API_URL || 'http://localhost:7000'
})
