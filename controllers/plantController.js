const plant = require('../Schema/plant')
const { fileSizeFormatter } = require('../utils/file')

const getListPlants = async (req, res, next) => {
    try {
        const plants = await plant.find()
        res.status(200).json(plants)
        console.log('All Plants')
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

const getPlant = async (req, res, next) => {
    try {
        const a_plant = await plant.findById(req.params.id)
        res.status(200).json(a_plant)
        console.log('Detail Plant')
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

const addPlant = async (req, res, next) => {
    try {
        const a_plant = new plant({
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
        await a_plant.save()
        res.status(200).send('You just add another Plant')
        console.log('You just add another Plant')
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

const updatePlant = async (req, res, next) => {
    try {
        const a_plant = await plant.findById(req.params.id)

        a_plant.title = req.query.title,
            a_plant.temperature = req.query.temperature,
            a_plant.humidity = req.query.humidity,
            a_plant.water = req.query.water,
            a_plant.description = req.query.description,
            a_plant.fileName = req.file.originalname || '',
            a_plant.filePath = req.file.path || '',
            a_plant.fileType = req.file.mimetype || '',
            a_plant.fileSize = fileSizeFormatter(req.file.size, 2) // 0.00
        await a_plant.save()
        res.status(200).send('You just updated a Plant')
        console.log('You just updated a Plant')
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

const deletePlant = async (req, res, next) => {
    try {
        const a_plant = await plant.findById(req.params.id)
        await a_plant.remove()
        res.status(200).send('You just deleted a Plant')
        console.log('You just deleted a Plant')
    } catch (error) {
        res.status(400).json({ message: error })
    }
}


module.exports = {
    getListPlants,
    getPlant,
    addPlant,
    updatePlant,
    deletePlant
}