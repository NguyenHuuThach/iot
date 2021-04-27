const express = require('express')
const router = express.Router()
const { getListSuggestionPlants, getSuggestionPlant, addSuggestionPlant, updateSuggestionPlant, deleteSuggestionPlant } = require('../controllers/suggestion_plantController')
const { upload } = require('../helpers/fileHelper')



router.get('/', getListSuggestionPlants)

router.get('/:id', getSuggestionPlant)

router.post('/', upload.single('file'), addSuggestionPlant)

router.put('/:id', upload.single('file'), updateSuggestionPlant)

router.delete('/:id', deleteSuggestionPlant)

module.exports = router
