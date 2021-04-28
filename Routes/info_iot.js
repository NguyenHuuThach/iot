const express = require('express')
const router = express.Router()
const { getListInforIOTs, getInforIOT, addInforIOT, updateInforIOT, deleteInforIOT } = require('../controllers/info_iotController')
const { upload } = require('../helpers/fileHelper')



// Routes
router.get('/', getListInforIOTs)

router.get('/:id', getInforIOT)

router.post('/', upload.single('file'), addInforIOT)

router.put('/:id', upload.single('file'), updateInforIOT)

router.delete('/:id', deleteInforIOT)


module.exports = router

