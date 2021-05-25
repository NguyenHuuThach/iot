const express = require('express')
const router = express.Router()
const { login, signUp, getListUser, getUser } = require('../controllers/userController')
const { upload } = require('../helpers/fileHelper')




router.post('/login', login)

router.post('/signup', upload.single('file'), signUp)
router.get('/users/', getListUser)
router.get('/users/:id', getUser)



module.exports = router
