const infoIOT = require('../Schema/info_iot')
const { fileSizeFormatter } = require('../utils/file')

const getListInforIOTs = async (req, res, next) => {
    try {
        const info_iots = await infoIOT.find()
        res.status(200).json(info_iots)
        console.log('All Info IOT')
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

const getInforIOT = async (req, res, next) => {
    try {
        const info_iot = await infoIOT.findById(req.params.id)
        res.status(200).json(info_iot)
        console.log('Detail info IOT')
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

const addInforIOT = async (req, res, next) => {
    try {
        const info_iot = new infoIOT({
            title: req.query.title,
            content: req.query.content
        })

        if (req.file) {
            info_iot.fileName = req.file.originalname
            info_iot.fileType = req.file.mimetype
            info_iot.fileSize = fileSizeFormatter(req.file.size, 2) // 0.00
            info_iot.filePath = 'images/' + req.file.path.slice(7)
        }

        await info_iot.save()
        res.status(200).send('You just add another info IOT')
        console.log('You just add another info IOT')
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

const updateInforIOT = async (req, res, next) => {
    try {
        const info_iot = await infoIOT.findById(req.params.id)

        info_iot.title = req.query.title
        info_iot.content = req.query.content

        if (req.file) {
            info_iot.fileName = req.file.originalname
            info_iot.fileType = req.file.mimetype
            info_iot.fileSize = fileSizeFormatter(req.file.size, 2) // 0.00
            info_iot.filePath = 'images/' + req.file.path.slice(7)
        }

        await info_iot.save()
        res.status(200).send('You just updated an info IOT')
        console.log('You just updated an info IOT')
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

const deleteInforIOT = async (req, res, next) => {
    try {
        const info_iot = await infoIOT.findById(req.params.id)
        await info_iot.remove()
        res.status(200).send('You just deleted an info IOT')
        console.log('You just deleted an info IOT')
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

module.exports = {
    getListInforIOTs,
    getInforIOT,
    addInforIOT,
    updateInforIOT,
    deleteInforIOT
}