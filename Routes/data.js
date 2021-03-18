const express = require('express')
const router = express.Router()
const Data = require('../Schema/data')

// Routes
router.get('/', async (req, res) => {
    try {
        const set_data = await Data.find()
        res.status(200).json(set_data)
    } catch (error) {
        res.status(400).json({ message: error })
    }
})

module.exports = router

