const express = require('express')
const router = express.Router()
const { getListInforIOTs, getInforIOT, addInforIOT, updateInforIOT, deleteInforIOT } = require('../controllers/info_iotController')
const { authenticateToken } = require('../controllers/tokenController')
const { upload } = require('../helpers/fileHelper')




// Routes
router.get('/', getListInforIOTs)

router.get('/:id', getInforIOT)

router.post('/', authenticateToken, upload.single('file'), addInforIOT)

router.put('/:id', authenticateToken, upload.single('file'), updateInforIOT)

router.delete('/:id', authenticateToken, deleteInforIOT)


module.exports = router

