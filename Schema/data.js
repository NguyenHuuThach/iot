const mongoose = require('mongoose')

const data = mongoose.Schema({
    user: {
        type: String,
        require: true
    },
    topic: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('set datas', data)