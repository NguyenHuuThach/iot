const infoIOTAgriculture = require('../Schema/info_iot_agriculture')
const { fileSizeFormatter } = require('../utils/file')

const getListInforIOTsAgriculture = async (req, res, next) => {
    try {
        const info_iots_agriculture = await infoIOTAgriculture.find()
        res.status(200).json(info_iots_agriculture)
        console.log('All Info IOT')
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

const getInforIOTAgriculture = async (req, res, next) => {
    try {
        const info_iot_agriculture = await infoIOTAgriculture.findById(req.params.id)
        res.status(200).json(info_iot_agriculture)
        console.log('Detail info IOT')
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

const addInforIOTAgriculture = async (req, res, next) => {
    try {
        const info_iot_agriculture = new infoIOTAgriculture({
            title: req.query.title,
            content: req.query.content,
            fileName: req.file.originalname || '',
            filePath: req.file.path || '',
            fileType: req.file.mimetype || '',
            fileSize: fileSizeFormatter(req.file.size, 2) // 0.00
        })

        info_iot_agriculture.filePath = 'images/' + info_iot_agriculture.filePath.slice(7)
        await info_iot_agriculture.save()
        res.status(200).send('You just add another info IOT')
        console.log('You just add another info IOT')
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

const updateInforIOTAgriculture = async (req, res, next) => {
    try {
        const info_iot_agriculture = await infoIOTAgriculture.findById(req.params.id)

        info_iot_agriculture.title = req.query.title,
            info_iot_agriculture.content = req.query.content,
            info_iot_agriculture.fileName = req.file.originalname || '',
            info_iot_agriculture.filePath = req.file.path || '',
            info_iot_agriculture.fileType = req.file.mimetype || '',
            info_iot_agriculture.fileSize = fileSizeFormatter(req.file.size, 2) // 0.00

        info_iot_agriculture.filePath = 'images/' + info_iot_agriculture.filePath.slice(7)
        await info_iot_agriculture.save()
        res.status(200).send('You just updated an info IOT')
        console.log('You just updated an info IOT')
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

const deleteInforIOTAgriculture = async (req, res, next) => {
    try {
        const info_iot_agriculture = await infoIOTAgriculture.findById(req.params.id)
        await info_iot_agriculture.remove()
        res.status(200).send('You just deleted an info IOT')
        console.log('You just deleted an info IOT')
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

module.exports = {
    getListInforIOTsAgriculture,
    getInforIOTAgriculture,
    addInforIOTAgriculture,
    updateInforIOTAgriculture,
    deleteInforIOTAgriculture
}