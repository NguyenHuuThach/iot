const mongoose = require('mongoose')

const data = mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    isStart: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('set datas', data)