const User = require('../Schema/user')
const jwt = require('jsonwebtoken')


function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1500000s' })
}


const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ userName: req.query.userName, password: req.query.password })
        if (user) {
            user.token = generateAccessToken({ userId: user._id })

            res.status(200).json({
                profile: user,
                token: user.token
            })

            return
        }
        res.status(401).json({ status: 'Failed' })
        console.log("Login failed!!!")

    } catch (error) {
        res.status(400).json({ message: error })
    }
}

const signUp = async (req, res, next) => {
    try {
        const already_exist = await User.find({ userName: req.query.userName })
        console.log(already_exist)
        let avatar = ''
        if (req.file) {
            avatar = 'images/' + req.file.path.slice(7)
        }
        if (already_exist.length == 0) {
            const user = new User({
                userName: req.query.userName,
                password: req.query.password,
                email: req.query.email,
                phoneNumber: req.query.phoneNumber,
                address: req.query.address,
                avatar: avatar
            })
            // if (user.avatar) {
            //     user.avatar = 'images/' + user.avatar.slice(7)
            // }
            await user.save()
            res.status(200).json(user)
            console.log('Another user')
            return
        }
        res.status(409).send('Username is already exist!!!')
        console.log('Username is already exist!!!')
    } catch (error) {
        res.status(400).json({ message: error })
        console.log(error)
    }
}

const getListUser = async (req, res, next) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

module.exports = {
    login, signUp, getListUser, getUser
}