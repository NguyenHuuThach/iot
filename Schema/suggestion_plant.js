const mongoose = require('mongoose')

const suggestion_plant = mongoose.Schema({
    uid: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    temperature: {
        type: Number,
        required: true
    },
    humidity: {
        type: Number,
        required: true
    },
    water: {
        type: Number,
        required: true
    },
    description: {
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

module.exports = mongoose.model('suggestion plants', suggestion_plant)