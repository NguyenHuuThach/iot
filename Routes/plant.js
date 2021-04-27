const express = require('express')
const router = express.Router()
const { getListPlants, getPlant, addPlant, updatePlant, deletePlant } = require('../controllers/plantController')
const { upload } = require('../helpers/fileHelper')


router.get('/', getListPlants)

router.get('/:id', getPlant)

router.post('/', upload.single('file'), addPlant)

router.put('/:id', upload.single('file'), updatePlant)

router.delete('/:id', deletePlant)


module.exports = router
