const mongoose = require('mongoose')

const infoIOTs = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model('info iots', infoIOTs)