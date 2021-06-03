const express = require('express')
const router = express.Router()
const { getHistory } = require('../controllers/dataController')
const { authenticateToken } = require('../controllers/tokenController')


// Routes
router.get('/history', authenticateToken, getHistory)


module.exports = router

