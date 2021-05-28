const SuggestionPlant = require('../Schema/suggestion_plant')
const { fileSizeFormatter } = require('../utils/file')


const getListSuggestionPlants = async (req, res, next) => {
    try {
        const suggestion_plants = await SuggestionPlant.find()
        res.status(200).json(suggestion_plants)
        console.log('All Suggestion Plants')
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

const getSuggestionPlant = async (req, res, next) => {
    try {
        const suggestion_plants = await SuggestionPlant.findById(req.params.id)
        res.status(200).json(suggestion_plants)
        console.log('Detail Suggestion Plant')
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

const addSuggestionPlant = async (req, res, next) => {
    try {
        const suggestion_plants = new SuggestionPlant({
            uid: req.query.uid,
            title: req.query.title,
            temperature: req.query.temperature,
            humidity: req.query.humidity,
            water: req.query.water,
            description: req.query.description,
            fileName: req.file.originalname || '',
            filePath: req.file.path || '',
            fileType: req.file.mimetype || '',
            fileSize: fileSizeFormatter(req.file.size, 2) // 0.00
        })

        suggestion_plants.filePath = 'images/' + suggestion_plants.filePath.slice(7)
        await suggestion_plants.save()
        res.status(200).send('You just add another Suggestion Plant')
        console.log('You just add another Suggestion Plant')
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

const updateSuggestionPlant = async (req, res, next) => {
    try {
        const suggestion_plants = await SuggestionPlant.findById(req.params.id)

        suggestion_plants.title = req.query.title,
            suggestion_plants.temperature = req.query.temperature,
            suggestion_plants.humidity = req.query.humidity,
            suggestion_plants.water = req.query.water,
            suggestion_plants.description = req.query.description,
            suggestion_plants.fileName = req.file.originalname || '',
            suggestion_plants.filePath = req.file.path || '',
            suggestion_plants.fileType = req.file.mimetype || '',
            suggestion_plants.fileSize = fileSizeFormatter(req.file.size, 2) // 0.00

        suggestion_plants.filePath = 'images/' + suggestion_plants.filePath.slice(7)
        await suggestion_plants.save()
        res.status(200).send('You just Suggestion updated a Plant')
        console.log('You just Suggestion updated a Plant')
    } catch (error) {
        res.status(400).json({ message: error })
    }
}
const deleteSuggestionPlant = async (req, res, next) => {
    try {
        const suggestion_plants = await SuggestionPlant.findById(req.params.id)
        await suggestion_plants.remove()
        res.status(200).send('You just deleted a Suggestion Plant')
        console.log('You just deleted a Suggestion Plant')
    } catch (error) {
        res.status(400).json({ message: error })
    }
}


module.exports = {
    getListSuggestionPlants,
    getSuggestionPlant,
    addSuggestionPlant,
    updateSuggestionPlant,
    deleteSuggestionPlant
}