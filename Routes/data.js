const express = require('express')
const router = express.Router()
const { getHistory } = require('../controllers/dataController')

// Routes
router.get('/history', getHistory)


module.exports = router

