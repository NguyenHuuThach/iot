const express = require('express')
const router = express.Router()
const { getListInforIOTsAgriculture, getInforIOTAgriculture, addInforIOTAgriculture, updateInforIOTAgriculture, deleteInforIOTAgriculture } = require('../controllers/info_iot_agricultureController')
const { upload } = require('../helpers/fileHelper')
const { authenticateToken } = require('../controllers/tokenController')



// Routes
router.get('/', getListInforIOTsAgriculture)

router.get('/:id', getInforIOTAgriculture)

router.post('/', authenticateToken, upload.single('file'), addInforIOTAgriculture)

router.put('/:id', authenticateToken, upload.single('file'), updateInforIOTAgriculture)

router.delete('/:id', authenticateToken, deleteInforIOTAgriculture)


module.exports = router

