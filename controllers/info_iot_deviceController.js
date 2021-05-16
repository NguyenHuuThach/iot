const infoIOTDecive = require('../Schema/info_iot_device')
const { fileSizeFormatter } = require('../utils/file')

const getListInforIOTsDevice = async (req, res, next) => {
    try {
        const info_iots_device = await infoIOTDecive.find()
        res.status(200).json(info_iots_device)
        console.log('All Info IOT')
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

const getInforIOTDevice = async (req, res, next) => {
    try {
        const info_iot_device = await infoIOTDecive.findById(req.params.id)
        res.status(200).json(info_iot_device)
        console.log('Detail info IOT')
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

const addInforIOTDevice = async (req, res, next) => {
    try {
        const info_iot_device = new infoIOTDecive({
            title: req.query.title,
            content: req.query.content,
            fileName: req.file.originalname || '',
            filePath: req.file.path || '',
            fileType: req.file.mimetype || '',
            fileSize: fileSizeFormatter(req.file.size, 2) // 0.00
        })

        info_iot_device.filePath = 'images/' + info_iot_device.filePath.slice(7)
        await info_iot_device.save()
        res.status(200).send('You just add another info IOT')
        console.log('You just add another info IOT')
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

const updateInforIOTDevice = async (req, res, next) => {
    try {
        const info_iot_device = await infoIOTDecive.findById(req.params.id)

        info_iot_device.title = req.query.title,
            info_iot_device.content = req.query.content,
            info_iot_device.fileName = req.file.originalname || '',
            info_iot_device.filePath = req.file.path || '',
            info_iot_device.fileType = req.file.mimetype || '',
            info_iot_device.fileSize = fileSizeFormatter(req.file.size, 2) // 0.00

        info_iot_device.filePath = 'images/' + info_iot_device.filePath.slice(7)
        await info_iot_device.save()
        res.status(200).send('You just updated an info IOT')
        console.log('You just updated an info IOT')
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

const deleteInforIOTDevice = async (req, res, next) => {
    try {
        const info_iot_device = await infoIOTDecive.findById(req.params.id)
        await info_iot_device.remove()
        res.status(200).send('You just deleted an info IOT')
        console.log('You just deleted an info IOT')
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

module.exports = {
    getListInforIOTsDevice,
    getInforIOTDevice,
    addInforIOTDevice,
    updateInforIOTDevice,
    deleteInforIOTDevice
}