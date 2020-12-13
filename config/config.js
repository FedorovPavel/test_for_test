const env = process.env.NODE_ENV || "dev";

const config = {
    "test": {
        port: 3000,
        serverAddress: 'http://localhost:3000'
    },
    "dev": {
        port: 3000,
        serverAddress: 'http://localhost:3000'
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
        serverAddress: 'https://testdev2088.herokuapp.com'
    }
}

module.exports = config[env];