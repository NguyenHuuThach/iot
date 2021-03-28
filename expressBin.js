const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const mqttHandler = require('./mqtt_handler');
const setData = require('./Routes/data'); // Routes

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


    return app;
}



