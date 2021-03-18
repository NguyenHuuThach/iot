require('dotenv/config')
const PORT = process.env.PORT || 3001
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose')
const mqttHandler = require('./mqtt_handler');
// Routes
const setData = require('./Routes/data')
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





// Ket noi DATABASE va bat dau listening server
mongoose.connect(process.env.CONNECTION_DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`)))
    .catch((error) => console.log(error.message))
// Khong nhan bat ky log warnings nao
mongoose.set('useFindAndModify', false)