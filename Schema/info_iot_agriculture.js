const mongoose = require('mongoose')

const infoIOTs_agriculture = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    fileName: {
        type: String
    },
    filePath: {
        type: String
    },
    fileType: {
        type: String
    },
    fileSize: {
        type: String
    }
}, { timestamps: true })


module.exports = mongoose.model('info iots agriculture', infoIOTs_agriculture)