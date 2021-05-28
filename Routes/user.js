const express = require('express')
const router = express.Router()
const { login, signUp, getListUser, getUser } = require('../controllers/userController')
const { upload } = require('../helpers/fileHelper')

const { authenticateToken } = require('../controllers/tokenController')





router.post('/login', login)

router.post('/signup', upload.single('file'), signUp)

router.get('/users/', authenticateToken, getListUser)
router.get('/users/:id', authenticateToken, getUser)



module.exports = router
