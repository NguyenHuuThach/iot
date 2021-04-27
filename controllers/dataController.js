const Data = require('../Schema/data')


const getHistory = async (req, res, next) => {
    try {
        const set_data = await Data.find()
        res.status(200).json(set_data)
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

module.exports = {
    getHistory
}