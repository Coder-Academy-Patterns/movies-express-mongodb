const mongoose = require('mongoose')
mongoose.Promise = Promise
//mongoose.connect('mongodb://localhost/movies')
mongoose.connect(
    process.env.MONGODB_USER ? (
        `mongodb://${ process.env.MONGODB_USER }:${ process.env.MONGODB_PASSWORD }@cluster0-shard-00-00-fbl9m.mongodb.net:27017,cluster0-shard-00-01-fbl9m.mongodb.net:27017,cluster0-shard-00-02-fbl9m.mongodb.net:27017/${ process.env.MONGODB_DATABASE }?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`
    ) : (
        `mongodb://localhost/${ process.env.MONGODB_DATABASE || 'movies' }`
    )
)

const db = mongoose.connection

module.exports = mongoose