const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path')
const mqttHandler = require('./mqtt_handler');
const setData = require('./Routes/data'); // Routes
const plants = require('./Routes/plant'); // Routes
const suggestionPlants = require('./Routes/suggestion_plant'); // Routes
const infoIOTs = require('./Routes/info_iot'); // Routes

module.exports.init = () => {
    const app = express()

    // Ket noi mqtt Client
    const mqttClient = new mqttHandler();
    mqttClient.connect();

    // Middlewares third-party
    app.use(bodyParser.json({ limit: '30mb', extended: true }))
    app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
    app.use(cors())
    // use routes
    app.use('/', setData)
    app.use('/plants', plants)
    app.use('/suggestion-plants', suggestionPlants)
    app.use('/info-iots', infoIOTs)

    // app.use('/public', express.static(path.join(__dirname, 'images')))
    app.use('/images', express.static(path.join(__dirname, 'images')))


    return app;
}



