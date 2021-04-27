const infoIOT = require('../Schema/info_iot')



const getInfoIOT = async (req, res, next) => {
    try {
        console.log('API info IOT')
        const info_iots = await infoIOT.find()
        res.status(200).json(info_iots)
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

module.exports = {
    getInfoIOT
}