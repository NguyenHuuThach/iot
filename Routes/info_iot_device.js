const express = require('express')
const router = express.Router()
const { getListInforIOTsDevice, getInforIOTDevice, addInforIOTDevice, updateInforIOTDevice, deleteInforIOTDevice } = require('../controllers/info_iot_deviceController')
const { upload } = require('../helpers/fileHelper')



// Routes
router.get('/', getListInforIOTsDevice)

router.get('/:id', getInforIOTDevice)

router.post('/', upload.single('file'), addInforIOTDevice)

router.put('/:id', upload.single('file'), updateInforIOTDevice)

router.delete('/:id', deleteInforIOTDevice)


module.exports = router

