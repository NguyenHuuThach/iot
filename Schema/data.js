const mongoose = require('mongoose')

const data = mongoose.Schema({
    topic: {
        type: String
    },
    user: {
        type: String
    },
    isStart: {
        type: Boolean
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('set datas', data)