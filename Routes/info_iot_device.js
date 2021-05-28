const express = require('express')
const router = express.Router()
const { getListInforIOTsDevice, getInforIOTDevice, addInforIOTDevice, updateInforIOTDevice, deleteInforIOTDevice } = require('../controllers/info_iot_deviceController')
const { upload } = require('../helpers/fileHelper')
const { authenticateToken } = require('../controllers/tokenController')




// Routes
router.get('/', getListInforIOTsDevice)

router.get('/:id', getInforIOTDevice)

router.post('/', authenticateToken, upload.single('file'), addInforIOTDevice) // 1 cái rout tao nhieu file, tach ra

router.put('/:id', authenticateToken, upload.single('file'), updateInforIOTDevice)

router.delete('/:id', authenticateToken, deleteInforIOTDevice)


module.exports = router

