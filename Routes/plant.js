const express = require('express')
const router = express.Router()
const { getListPlants, getPlant, addPlant, updatePlant, deletePlant } = require('../controllers/plantController')
const { upload } = require('../helpers/fileHelper')
const { authenticateToken } = require('../controllers/tokenController')



router.get('/', getListPlants)

router.get('/:id', getPlant)

router.post('/', authenticateToken, upload.single('file'), addPlant)

router.put('/:id', authenticateToken, upload.single('file'), updatePlant)

router.delete('/:id', authenticateToken, deletePlant)


module.exports = router
