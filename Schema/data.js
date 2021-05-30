const mongoose = require('mongoose')

const data = mongoose.Schema({
    topic: {
        type: String
    },
    sensorID: {
        type: Number,
        require: true
    },
    sensorType: {
        type: Number
    },
    sensorName: {
        type: String
    },
    isSchedule: {
        type: Boolean,
        require: true,
        default: false
    },
    duration: {
        type: Array,
        require: true,
        default: [0, 0]
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