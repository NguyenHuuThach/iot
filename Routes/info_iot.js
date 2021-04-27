const express = require('express')
const router = express.Router()
const { getInfoIOT } = require('../controllers/info_iotController')
const { upload } = require('../helpers/fileHelper')



// Routes
router.get('/', getInfoIOT)


module.exports = router

