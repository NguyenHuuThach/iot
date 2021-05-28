const express = require('express')
const router = express.Router()
const { getListSuggestionPlants, getSuggestionPlant, addSuggestionPlant, updateSuggestionPlant, deleteSuggestionPlant } = require('../controllers/suggestion_plantController')
const { upload } = require('../helpers/fileHelper')
const { authenticateToken } = require('../controllers/tokenController')




router.get('/', getListSuggestionPlants)

router.get('/:id', getSuggestionPlant)

router.post('/', authenticateToken, upload.single('file'), addSuggestionPlant)

router.put('/:id', authenticateToken, upload.single('file'), updateSuggestionPlant)

router.delete('/:id', authenticateToken, deleteSuggestionPlant)

module.exports = router
