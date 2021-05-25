const mongoose = require('mongoose')

const user = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    listPlant: {
        type: Array
    }
})

module.exports = mongoose.model('users', user)