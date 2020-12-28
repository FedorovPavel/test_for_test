const env = process.env.NODE_ENV || "dev";

const config = {
    "test": {
        port: 3000,
        serverAddress: 'http://localhost:3000'
    },
    "dev": {
        port: 3000,
        serverAddress: 'https://testdev2088.herokuapp.com'
    },
    "production": {
        port: process.env.PORT || 15565
    },
    "prod": {
        port: process.env.PORT || 15565,
        serverAddress: 'https://testdev2088.herokuapp.com'
    },
    "intTest": {
        port: process.env.PORT || 15565,
        serverAddress: 'https://testdev2088.herokuapp.com',
        db: 'mongodb://cluster0-shard-00-00.5mapr.mongodb.net:27017,cluster0-shard-00-01.5mapr.mongodb.net:27017,cluster0-shard-00-02.5mapr.mongodb.net:27017/course?ssl=true&replicaSet=atlas-3z9frj-shard-0&retryWrites=true&w=majority'
    }
}

module.exports = config[env];