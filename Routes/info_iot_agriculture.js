const express = require('express')
const router = express.Router()
const { getListInforIOTsAgriculture, getInforIOTAgriculture, addInforIOTAgriculture, updateInforIOTAgriculture, deleteInforIOTAgriculture } = require('../controllers/info_iot_agricultureController')
const { upload } = require('../helpers/fileHelper')



// Routes
router.get('/', getListInforIOTsAgriculture)

router.get('/:id', getInforIOTAgriculture)

router.post('/', upload.single('file'), addInforIOTAgriculture)

router.put('/:id', upload.single('file'), updateInforIOTAgriculture)

router.delete('/:id', deleteInforIOTAgriculture)


module.exports = router

